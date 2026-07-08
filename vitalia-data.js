window.VITALIA_PRODUCTS = [
  { id: 'p1', brand: 'La Roche-Posay', name: 'Effaclar Duo+ 40ml', price: 16.9, oldPrice: 19.9, rating: 4, reviewCount: 342, badge: 'Promo', category: 'visage' },
  { id: 'p2', brand: 'Bioderma', name: 'Sensibio H2O 500ml', price: 14.5, rating: 5, reviewCount: 981, category: 'visage' },
  { id: 'p3', brand: 'Vichy', name: 'Minéral 89 Sérum 50ml', price: 22.9, rating: 4, reviewCount: 156, badge: 'Nouveau', category: 'visage' },
  { id: 'p4', brand: 'Klorane', name: 'Shampoing Avoine 400ml', price: 9.9, rating: 4, reviewCount: 210, category: 'cheveux' },
  { id: 'p5', brand: 'Ducray', name: 'Anaphase+ Shampoing 400ml', price: 13.5, oldPrice: 16.0, rating: 4, reviewCount: 88, badge: 'Promo', category: 'cheveux' },
  { id: 'p6', brand: 'Mustela', name: 'Liniment Oléo-Calcaire 500ml', price: 8.9, rating: 5, reviewCount: 512, category: 'bebe' },
  { id: 'p7', brand: 'Weleda', name: 'Huile Bébé Calendula 200ml', price: 11.9, rating: 5, reviewCount: 264, category: 'bebe' },
  { id: 'p8', brand: 'Nutergia', name: 'Bion 3 Défense 30 gél.', price: 18.9, rating: 4, reviewCount: 143, category: 'complements' },
  { id: 'p9', brand: 'Solgar', name: 'Vitamine D3 60 gél.', price: 15.9, rating: 5, reviewCount: 402, category: 'complements' },
  { id: 'p10', brand: 'CeraVe', name: 'Crème Hydratante 340ml', price: 15.5, rating: 5, reviewCount: 678, badge: 'Best-seller', category: 'visage' },
  { id: 'p11', brand: 'Klorane', name: 'Après-shampoing Mangue 200ml', price: 8.5, rating: 4, reviewCount: 76, category: 'cheveux' },
  { id: 'p12', brand: 'Mustela', name: 'Gel Lavant 500ml', price: 9.5, rating: 4, reviewCount: 199, category: 'bebe' },
  { id: 'p13', brand: 'Nuxe', name: 'Huile Prodigieuse 100ml', price: 24.9, rating: 5, reviewCount: 530, badge: 'Best-seller', category: 'cosmetiques' },
  { id: 'p14', brand: 'Caudalie', name: "Eau de Beauté 100ml", price: 19.9, rating: 4, reviewCount: 210, category: 'cosmetiques' },
  { id: 'p15', brand: 'La Roche-Posay', name: 'Anthelios SPF50+ 50ml', price: 17.9, oldPrice: 20.9, rating: 5, reviewCount: 340, badge: 'Promo', category: 'cosmetiques' },
];

window.VITALIA_CATEGORIES = [
  { id: 'visage', label: 'Visage' },
  { id: 'cheveux', label: 'Cheveux' },
  { id: 'cosmetiques', label: 'Cosmétiques' },
  { id: 'bebe', label: 'Bébé & Maman' },
  { id: 'complements', label: 'Compléments' },
];

window.VITALIA_XOF_RATE = 655;
window.vitaliaFmtXof = function (eur) {
  const v = Math.round(eur * window.VITALIA_XOF_RATE);
  return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' F CFA';
};

window.vitaliaClassifyColor = function (r, g, b) {
  const refs = [
    { label: 'visage', color: [235, 222, 210] },
    { label: 'cheveux', color: [80, 60, 50] },
    { label: 'cosmetiques', color: [220, 150, 170] },
    { label: 'bebe', color: [205, 230, 235] },
    { label: 'complements', color: [140, 190, 120] },
  ];
  const raw = refs.map((ref) => {
    const d = Math.sqrt((r - ref.color[0]) ** 2 + (g - ref.color[1]) ** 2 + (b - ref.color[2]) ** 2);
    return { id: ref.label, sim: Math.max(0.001, 1 - d / 300) };
  });
  const sum = raw.reduce((s, x) => s + x.sim, 0);
  return raw.map((x) => ({ id: x.id, pct: Math.round((x.sim / sum) * 100) })).sort((a, b) => b.pct - a.pct);
};

window.vitaliaRunBandit = function () {
  const arms = [0, 5, 10, 15, 20];
  const trueReward = (d) => 0.20 + d * 0.018 - d * d * 0.0009;
  const counts = arms.map(() => 0), sums = arms.map(() => 0);
  const episodes = 200;
  for (let t = 0; t < episodes; t++) {
    let armIdx;
    if (t < arms.length) armIdx = t;
    else if (Math.random() < 0.15) armIdx = Math.floor(Math.random() * arms.length);
    else {
      const avg = sums.map((s, i) => (counts[i] ? s / counts[i] : 0));
      armIdx = avg.indexOf(Math.max(...avg));
    }
    const reward = trueReward(arms[armIdx]) + (Math.random() - 0.5) * 0.05;
    counts[armIdx]++; sums[armIdx] += reward;
  }
  const avgPerArm = arms.map((d, i) => ({ discount: d, avg: counts[i] ? sums[i] / counts[i] : 0 }));
  const best = avgPerArm.reduce((a, b) => (b.avg > a.avg ? b : a));
  return best.discount;
};

window.vitaliaSegment = function (customer) {
  if (!customer || !customer.orders) return 'Découverte';
  const score = customer.orders * 2.5 + customer.spent / 40;
  if (score > 55) return 'VIP';
  if (score > 20) return 'Régulier';
  return 'Découverte';
};

window.vitaliaPurchaseScore = function (product) {
  let score = (product.rating || 3) * 12 + Math.min(30, Math.log10((product.reviewCount || 10) + 1) * 12);
  if (product.badge) score += 8;
  if (product.oldPrice) score += 6;
  return Math.max(8, Math.min(97, Math.round(score)));
};

window.VITALIA_ORDERS = [
  { id: '#VT-3291', client: 'Camille Fabre', date: '07/07/2026', items: 3, total: 47.30, status: 'Expédiée' },
  { id: '#VT-3290', client: 'Nadia Bensaid', date: '07/07/2026', items: 1, total: 16.90, status: 'En préparation' },
  { id: '#VT-3289', client: 'Julien Morel', date: '06/07/2026', items: 5, total: 89.10, status: 'Livrée' },
  { id: '#VT-3288', client: 'Sophie Nguyen', date: '06/07/2026', items: 2, total: 24.40, status: 'Livrée' },
  { id: '#VT-3287', client: 'Marc Dubreuil', date: '05/07/2026', items: 1, total: 8.90, status: 'Annulée' },
  { id: '#VT-3286', client: 'Élodie Perrin', date: '05/07/2026', items: 4, total: 63.20, status: 'Livrée' },
];

window.VITALIA_CUSTOMERS = [
  { id: 'c1', name: 'Camille Fabre', email: 'camille.fabre@mail.fr', orders: 12, spent: 412.80, since: '2024' },
  { id: 'c2', name: 'Nadia Bensaid', email: 'nadia.bensaid@mail.fr', orders: 3, spent: 61.40, since: '2025' },
  { id: 'c3', name: 'Julien Morel', email: 'julien.morel@mail.fr', orders: 27, spent: 1024.90, since: '2023' },
  { id: 'c4', name: 'Sophie Nguyen', email: 'sophie.nguyen@mail.fr', orders: 8, spent: 199.60, since: '2024' },
  { id: 'c5', name: 'Marc Dubreuil', email: 'marc.dubreuil@mail.fr', orders: 1, spent: 8.90, since: '2026' },
];


