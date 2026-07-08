const http = require('http');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const DATA_DIR = process.env.DATA_DIR || path.join(ROOT, 'data');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

function loadData() {
  const sandbox = { window: {} };
  const code = fs.readFileSync(path.join(ROOT, 'vitalia-data.js'), 'utf8');
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return {
    products: sandbox.window.VITALIA_PRODUCTS || [],
    categories: sandbox.window.VITALIA_CATEGORIES || [],
    fmtXof: sandbox.window.vitaliaFmtXof || ((eur) => `${Math.round(eur * 655)} F CFA`),
    purchaseScore: sandbox.window.vitaliaPurchaseScore || (() => 50),
  };
}

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(ORDERS_FILE)) fs.writeFileSync(ORDERS_FILE, '[]', 'utf8');
}

function readOrders() {
  ensureDataFile();
  try {
    return JSON.parse(fs.readFileSync(ORDERS_FILE, 'utf8'));
  } catch (err) {
    return [];
  }
}

function writeOrders(orders) {
  ensureDataFile();
  fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2), 'utf8');
}

function toOrderForAdmin(order) {
  return {
    id: order.id,
    client: order.customerName,
    date: order.date,
    items: order.items.reduce((sum, item) => sum + Number(item.qty || 0), 0),
    total: order.total,
    status: order.status,
    deliveryMethod: order.deliveryMethod,
  };
}

const trainingSet = [
  { label: 'visage', text: 'acne bouton peau grasse imperfection visage serum creme hydratante rougeur sensible' },
  { label: 'visage', text: 'demaquillant eau micellaire tache visage peau seche soin quotidien' },
  { label: 'cheveux', text: 'cheveux shampoing chute pellicule cuir chevelu apres shampoing sec cassant' },
  { label: 'cheveux', text: 'lavage cheveux doux avoine mangue brillance nourrir' },
  { label: 'cosmetiques', text: 'beaute huile parfum soleil spf protection solaire cosmetique eclat' },
  { label: 'cosmetiques', text: 'routine beaute anti age peau lumineuse soin corps visage protection' },
  { label: 'bebe', text: 'bebe maman liniment change calendrier nourrisson enfant gel lavant peau fragile' },
  { label: 'bebe', text: 'toilette bebe couche irritation douceur naissance huile calendula' },
  { label: 'complements', text: 'vitamine fatigue defense immunite energie gelule complement carence hiver' },
  { label: 'complements', text: 'renforcer organisme vitamine d digestion forme supplement' },
];

const stopWords = new Set(['je', 'tu', 'il', 'elle', 'nous', 'vous', 'un', 'une', 'des', 'de', 'du', 'la', 'le', 'les', 'pour', 'avec', 'mon', 'ma', 'mes', 'et', 'ou', 'en', 'au', 'aux', 'sur', 'que', 'qui', 'est', 'suis', 'ai', 'a']);

function normalize(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ');
}

function tokenize(text) {
  return normalize(text)
    .split(/\s+/)
    .filter((token) => token.length > 2 && !stopWords.has(token));
}

function trainNaiveBayes() {
  const labels = Array.from(new Set(trainingSet.map((item) => item.label)));
  const vocabulary = new Set();
  const model = {};

  labels.forEach((label) => {
    model[label] = { docs: 0, total: 0, words: {} };
  });

  trainingSet.forEach((item) => {
    const bucket = model[item.label];
    bucket.docs += 1;
    tokenize(item.text).forEach((token) => {
      vocabulary.add(token);
      bucket.words[token] = (bucket.words[token] || 0) + 1;
      bucket.total += 1;
    });
  });

  return { labels, vocabulary: Array.from(vocabulary), model, totalDocs: trainingSet.length };
}

const classifier = trainNaiveBayes();

function classifyNeed(question) {
  const tokens = tokenize(question);
  const vocabSize = classifier.vocabulary.length || 1;
  const scores = classifier.labels.map((label) => {
    const bucket = classifier.model[label];
    let logScore = Math.log(bucket.docs / classifier.totalDocs);

    tokens.forEach((token) => {
      const count = bucket.words[token] || 0;
      logScore += Math.log((count + 1) / (bucket.total + vocabSize));
    });

    return { label, logScore };
  });

  const max = Math.max(...scores.map((item) => item.logScore));
  const probabilities = scores
    .map((item) => ({ label: item.label, value: Math.exp(item.logScore - max) }))
    .sort((a, b) => b.value - a.value);
  const sum = probabilities.reduce((acc, item) => acc + item.value, 0) || 1;

  return probabilities.map((item) => ({
    label: item.label,
    confidence: Math.round((item.value / sum) * 100),
  }));
}

function detectIntent(question) {
  const q = normalize(question);
  const has = (words) => words.some((word) => q.includes(word));

  if (has(['enceinte', 'grossesse', 'allaitement', 'ordonnance', 'traitement', 'fievre', 'infection', 'douleur forte'])) return 'medical-warning';
  if (has(['bouton', 'acne', 'imperfection', 'peau grasse', 'point noir'])) return 'acne';
  if (has(['sensible', 'rougeur', 'irritation', 'tiraille', 'allergie'])) return 'sensitive-skin';
  if (has(['seche', 'hydrat', 'creme', 'barriere'])) return 'dry-skin';
  if (has(['soleil', 'spf', 'uv', 'protection solaire', 'tache'])) return 'sun';
  if (has(['cheveux', 'shampoing', 'chute', 'pellicule', 'cuir chevelu'])) return 'hair';
  if (has(['bebe', 'nourrisson', 'maman', 'change', 'liniment', 'couche'])) return 'baby';
  if (has(['fatigue', 'immunite', 'defense', 'vitamine', 'energie', 'forme'])) return 'supplements';
  if (has(['livraison', 'delai', 'expedition', 'retrait'])) return 'delivery';
  if (has(['prix', 'promo', 'remise', 'moins cher', 'reduction'])) return 'price';
  return 'general';
}

function adviceForIntent(intent, categoryLabel) {
  const advice = {
    'medical-warning': [
      'Votre question semble demander un avis personnalisé.',
      'Par prudence, demandez conseil à un pharmacien ou à un professionnel de santé avant d’utiliser un produit.',
      'Je peux seulement vous orienter vers une catégorie de produits non médicamenteux.',
    ],
    acne: [
      'Pour les boutons ou imperfections, privilégiez une routine courte: nettoyage doux, soin ciblé, puis hydratation légère.',
      'Évitez de multiplier les actifs si votre peau réagit facilement.',
      'Les soins visage du catalogue sont les plus adaptés pour commencer.',
    ],
    'sensitive-skin': [
      'Pour une peau sensible, choisissez une routine douce et progressive.',
      'Une eau micellaire ou un nettoyant doux peut aider, puis une crème hydratante pour renforcer le confort.',
      'Testez un produit à la fois afin d’identifier ce que votre peau tolère bien.',
    ],
    'dry-skin': [
      'Pour une peau sèche, l’objectif est de restaurer le confort et l’hydratation.',
      'Privilégiez une crème nourrissante et évitez les nettoyages trop décapants.',
      'Une application régulière matin et soir rend la routine plus stable.',
    ],
    sun: [
      'Pour le soleil, le réflexe prioritaire est une protection SPF élevée.',
      'Appliquez-la généreusement et renouvelez-la en cas d’exposition prolongée.',
      'C’est important en cas de taches, peau sensible ou forte exposition.',
    ],
    hair: [
      'Pour les cheveux, il faut distinguer chute, sécheresse, pellicules ou cuir chevelu sensible.',
      'Un shampoing doux est une bonne base avant d’ajouter un soin ciblé.',
      'La catégorie cheveux est la plus pertinente pour cette demande.',
    ],
    baby: [
      'Pour bébé, privilégiez des produits très doux et adaptés aux peaux fragiles.',
      'Le liniment, le gel lavant et les huiles bébé peuvent aider pour la toilette ou le change.',
      'En cas d’irritation importante ou persistante, demandez un avis professionnel.',
    ],
    supplements: [
      'Pour la fatigue ou l’immunité, les compléments peuvent accompagner une bonne routine de sommeil, alimentation et hydratation.',
      'Les vitamines ou formules défense peuvent être pertinentes selon le besoin.',
      'Demandez conseil si vous prenez déjà un traitement ou si la fatigue persiste.',
    ],
    delivery: [
      'Vitalia propose la livraison standard, la livraison express et le retrait en pharmacie.',
      'Le choix dépend de l’urgence et de votre zone.',
      'Vous pouvez sélectionner le mode de livraison au moment de valider le panier.',
    ],
    price: [
      'Vous pouvez comparer les prix directement dans le catalogue.',
      'Les produits en promotion affichent un badge et un ancien prix barré.',
      'Au panier, la remise IA peut proposer une réduction adaptée à la commande.',
    ],
    general: [
      `D’après votre question, je vous oriente vers la catégorie ${categoryLabel}.`,
      'Je vous propose de comparer les produits recommandés et d’ouvrir chaque fiche pour voir les détails.',
      'Si votre besoin est médical ou persistant, demandez un avis personnalisé à un professionnel de santé.',
    ],
  };

  return advice[intent] || advice.general;
}

function recommendProducts(question) {
  const data = loadData();
  const predictions = classifyNeed(question);
  const best = predictions[0] || { label: 'visage', confidence: 0 };
  const category = data.categories.find((item) => item.id === best.label) || { id: best.label, label: best.label };
  const intent = detectIntent(question);
  const products = data.products
    .filter((product) => product.category === best.label)
    .map((product) => ({ ...product, score: data.purchaseScore(product) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((product) => ({
      id: product.id,
      brand: product.brand,
      name: product.name,
      price: data.fmtXof(product.price),
      score: product.score,
    }));

  const productNames = products.map((product) => `${product.brand} ${product.name}`).join(', ');
  let answer = [
    `Le modèle classe votre besoin dans la catégorie "${category.label}" avec ${best.confidence}% de confiance.`,
    products.length
      ? `Je vous conseille de comparer ces références : ${productNames}.`
      : 'Je vous conseille de demander un avis au pharmacien avant de choisir une référence.',
    'Cette recommandation vient d’un apprentissage supervisé simple entraîné sur des exemples de besoins clients; elle ne remplace pas un avis médical personnalisé.',
  ].join(' ');
  answer = [
    ...adviceForIntent(intent, category.label),
    products.length ? `Produits à comparer: ${productNames}.` : 'Aucun produit précis ne ressort pour cette demande dans le catalogue actuel.',
    `Analyse IA: besoin classé en "${category.label}" avec ${best.confidence}% de confiance.`,
    'Ce conseil ne remplace pas un avis médical personnalisé.',
  ].join(' ');

  return {
    category,
    confidence: best.confidence,
    predictions,
    products,
    answer,
    intent,
    method: 'Apprentissage supervise: classification Naive Bayes + score produit',
  };
}

function optimizeDiscount(cartTotal, cartCount, customerSegment) {
  const arms = [0, 5, 10, 15, 20];
  const segmentBoost = customerSegment === 'VIP' ? 0.04 : customerSegment === 'Régulier' ? 0.02 : 0;
  const trueReward = (discount) => {
    const conversion = 0.18 + discount * 0.019 - discount * discount * 0.00085 + segmentBoost;
    const margin = Math.max(0.35, 1 - discount / 100);
    const basketBonus = Math.min(0.05, cartTotal / 400);
    return conversion * margin + basketBonus + Math.min(0.03, cartCount * 0.004);
  };
  const counts = arms.map(() => 0);
  const sums = arms.map(() => 0);

  for (let t = 0; t < 220; t++) {
    let armIdx;
    if (t < arms.length) armIdx = t;
    else if (Math.random() < 0.12) armIdx = Math.floor(Math.random() * arms.length);
    else {
      const averages = sums.map((sum, index) => (counts[index] ? sum / counts[index] : 0));
      armIdx = averages.indexOf(Math.max(...averages));
    }

    const reward = trueReward(arms[armIdx]) + (Math.random() - 0.5) * 0.025;
    counts[armIdx] += 1;
    sums[armIdx] += reward;
  }

  const ranked = arms
    .map((discount, index) => ({ discount, reward: counts[index] ? sums[index] / counts[index] : 0, tests: counts[index] }))
    .sort((a, b) => b.reward - a.reward);

  return {
    discount: ranked[0].discount,
    method: 'Apprentissage par renforcement: bandit epsilon-greedy',
    explanation: `Le moteur a simulé ${counts.reduce((sum, count) => sum + count, 0)} essais et retient la remise qui maximise conversion et marge.`,
    arms: ranked,
  };
}

function buildProductDescription(product) {
  const data = loadData();
  const category = data.categories.find((item) => item.id === product.category);
  const categoryLabel = category ? category.label.toLowerCase() : 'parapharmacie';
  const price = data.fmtXof(product.price || 0);

  return `${product.brand} ${product.name} est une référence ${categoryLabel} sélectionnée pour une routine simple et rassurante. Son score d’attractivité IA est calculé à partir des notes, du volume d’avis et des promotions afin d’aider le client à comparer rapidement les produits. Prix indicatif : ${price}.`;
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        req.destroy();
        reject(new Error('Payload trop volumineux'));
      }
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res, status, payload) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}

function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const requested = decodeURIComponent(url.pathname === '/' ? '/Vitalia Boutique.dc.html' : url.pathname);
  const filePath = path.normalize(path.join(ROOT, requested));

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Acces refuse');
    return;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Fichier introuvable');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(content);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  try {
    if (req.method === 'GET' && url.pathname === '/api/health') {
      sendJson(res, 200, { ok: true, service: 'Vitalia IA', date: new Date().toISOString() });
      return;
    }

    if (req.method === 'GET' && url.pathname === '/api/catalog') {
      const data = loadData();
      sendJson(res, 200, { products: data.products, categories: data.categories });
      return;
    }

    if (req.method === 'GET' && url.pathname === '/api/orders') {
      const seeded = loadData().products.length ? [] : [];
      const orders = readOrders().map(toOrderForAdmin);
      sendJson(res, 200, { orders: [...orders, ...seeded] });
      return;
    }

    if (req.method === 'POST' && url.pathname === '/api/assistant') {
      const body = await readJsonBody(req);
      const question = String(body.question || '').trim();
      if (!question) {
        sendJson(res, 400, { error: 'Question manquante' });
        return;
      }
      sendJson(res, 200, recommendProducts(question));
      return;
    }

    if (req.method === 'POST' && url.pathname === '/api/product-description') {
      const body = await readJsonBody(req);
      if (!body.product || !body.product.name) {
        sendJson(res, 400, { error: 'Produit manquant' });
        return;
      }
      sendJson(res, 200, { text: buildProductDescription(body.product) });
      return;
    }

    if (req.method === 'POST' && url.pathname === '/api/discount') {
      const body = await readJsonBody(req);
      const result = optimizeDiscount(Number(body.cartTotal || 0), Number(body.cartCount || 0), body.customerSegment || 'Découverte');
      sendJson(res, 200, result);
      return;
    }

    if (req.method === 'POST' && url.pathname === '/api/orders') {
      const body = await readJsonBody(req);
      const items = Array.isArray(body.items) ? body.items : [];
      if (!items.length) {
        sendJson(res, 400, { error: 'Panier vide' });
        return;
      }
      const order = {
        id: '#VT-' + String(Date.now()).slice(-6),
        customerName: String(body.customerName || 'Client Vitalia').trim(),
        phone: String(body.phone || '').trim(),
        address: String(body.address || '').trim(),
        deliveryMethod: String(body.deliveryMethod || 'Livraison standard').trim(),
        items,
        subtotal: Number(body.subtotal || 0),
        discountPct: Number(body.discountPct || 0),
        total: Number(body.total || 0),
        status: 'En préparation',
        date: new Date().toLocaleDateString('fr-FR'),
        createdAt: new Date().toISOString(),
      };
      const orders = readOrders();
      orders.unshift(order);
      writeOrders(orders.slice(0, 80));
      sendJson(res, 201, { ok: true, order });
      return;
    }

    serveStatic(req, res);
  } catch (err) {
    sendJson(res, 500, { error: err.message || 'Erreur serveur' });
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Vitalia IA demarre sur http://localhost:${PORT}`);
});
