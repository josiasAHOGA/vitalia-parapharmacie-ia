/* @ds-bundle: {"format":4,"namespace":"VitaliaParapharmacieDesignSystem_4f79c2","components":[{"name":"CategoryChip","sourcePath":"components/commerce/CategoryChip.jsx"},{"name":"PriceTag","sourcePath":"components/commerce/PriceTag.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"QuantityStepper","sourcePath":"components/commerce/QuantityStepper.jsx"},{"name":"RatingStars","sourcePath":"components/commerce/RatingStars.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"CartDrawer","sourcePath":"components/feedback/CartDrawer.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/commerce/CategoryChip.jsx":"7d698a376348","components/commerce/PriceTag.jsx":"7aef4f73cd89","components/commerce/ProductCard.jsx":"49314a04d326","components/commerce/QuantityStepper.jsx":"0ab9cd779924","components/commerce/RatingStars.jsx":"48fa18d36d94","components/core/Badge.jsx":"59dfd4ced600","components/core/Button.jsx":"c916bd7fd7a4","components/core/Input.jsx":"31f6865785ff","components/core/Select.jsx":"10a9d2c4ba88","components/feedback/CartDrawer.jsx":"bd5c2772be84","components/feedback/Toast.jsx":"fdb315e82346","components/navigation/Footer.jsx":"e6d9750e2f1a","components/navigation/Header.jsx":"539d034cbfa2","components/navigation/Tabs.jsx":"a79565ca13a3","ui_kits/parapharmacie-web/App.jsx":"2035eb36ef39","ui_kits/parapharmacie-web/data.js":"db929d468b68"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VitaliaParapharmacieDesignSystem_4f79c2 = window.VitaliaParapharmacieDesignSystem_4f79c2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/CategoryChip.jsx
try { (() => {
function CategoryChip({
  children,
  active = false,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      border: active ? 'none' : '1.5px solid var(--color-border-strong)',
      background: active ? 'var(--color-primary)' : 'var(--color-surface)',
      color: active ? 'var(--color-on-primary)' : 'var(--color-text)',
      transition: 'all .15s ease'
    }
  }, children);
}
Object.assign(__ds_scope, { CategoryChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CategoryChip.jsx", error: String((e && e.message) || e) }); }

// components/commerce/PriceTag.jsx
try { (() => {
function PriceTag({
  price,
  oldPrice,
  unit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '8px',
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 800,
      color: 'var(--color-primary)'
    }
  }, price.toFixed(2).replace('.', ','), " \u20AC"), oldPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-faint)',
      textDecoration: 'line-through',
      fontFamily: 'var(--font-body)'
    }
  }, oldPrice.toFixed(2).replace('.', ','), " \u20AC"), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-text-muted)',
      fontFamily: 'var(--font-body)'
    }
  }, "/", unit));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/commerce/QuantityStepper.jsx
try { (() => {
function QuantityStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange
}) {
  const set = v => onChange && onChange(Math.max(min, Math.min(max, v)));
  const btnStyle = {
    width: '32px',
    height: '32px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '16px',
    color: 'var(--color-primary)',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1.5px solid var(--color-border-strong)',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btnStyle,
    onClick: () => set(value - 1),
    "aria-label": "Diminuer la quantit\xE9"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: '24px',
      textAlign: 'center',
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text)'
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    style: btnStyle,
    onClick: () => set(value + 1),
    "aria-label": "Augmenter la quantit\xE9"
  }, "+"));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/commerce/RatingStars.jsx
try { (() => {
function RatingStars({
  value = 0,
  count
}) {
  const full = Math.round(value);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: '1px'
    }
  }, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("svg", {
    key: i,
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: i <= full ? 'var(--amber-600)' : 'var(--neutral-200)'
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01z"
  })))), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-text-muted)'
    }
  }, "(", count, ")"));
}
Object.assign(__ds_scope, { RatingStars });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/RatingStars.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tones = {
  success: {
    bg: 'var(--color-success-tint)',
    fg: 'var(--green-800)'
  },
  warning: {
    bg: 'var(--color-warning-tint)',
    fg: '#8A4E06'
  },
  danger: {
    bg: 'var(--color-danger-tint)',
    fg: 'var(--red-600)'
  },
  accent: {
    bg: 'var(--color-accent-tint)',
    fg: 'var(--coral-700)'
  },
  neutral: {
    bg: 'var(--neutral-100)',
    fg: 'var(--color-text-muted)'
  }
};
function Badge({
  children,
  tone = 'neutral'
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-xs)',
      background: t.bg,
      color: t.fg
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function ProductCard({
  image,
  brand,
  name,
  price,
  oldPrice,
  rating,
  reviewCount,
  badge,
  onAdd
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px',
      fontFamily: 'var(--font-body)',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow .2s ease, transform .2s ease',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      width: '220px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--color-surface-sunken)',
      borderRadius: 'var(--radius-md)',
      aspectRatio: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-faint)',
      fontSize: 'var(--text-xs)'
    }
  }, "Photo produit"), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '8px',
      left: '8px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "accent"
  }, badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-text-muted)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.3px'
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text)',
      fontWeight: 600,
      lineHeight: 1.3,
      minHeight: '34px'
    }
  }, name), /*#__PURE__*/React.createElement(__ds_scope.RatingStars, {
    value: rating,
    count: reviewCount
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '2px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    price: price,
    oldPrice: oldPrice
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onAdd,
    "aria-label": "Ajouter au panier",
    style: {
      width: '36px',
      height: '36px',
      borderRadius: 'var(--radius-full)',
      border: 'none',
      background: 'var(--color-accent)',
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '18px',
      fontWeight: 700
    }
  }, "+")));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizes = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--text-sm)'
  },
  md: {
    padding: '12px 22px',
    fontSize: 'var(--text-base)'
  },
  lg: {
    padding: '15px 28px',
    fontSize: 'var(--text-lg)'
  }
};
const variants = {
  primary: {
    background: 'var(--color-accent)',
    color: 'var(--color-on-accent)',
    border: 'none'
  },
  secondary: {
    background: 'var(--color-primary)',
    color: 'var(--color-on-primary)',
    border: 'none'
  },
  outline: {
    background: 'transparent',
    color: 'var(--color-primary)',
    border: '1.5px solid var(--color-border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-primary)',
    border: 'none'
  }
};
const hoverBg = {
  primary: 'var(--color-accent-hover)',
  secondary: 'var(--color-primary-hover)',
  outline: 'var(--color-primary-tint)',
  ghost: 'var(--color-primary-tint)'
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const style = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'background .15s ease, transform .1s ease, border-color .15s ease',
    opacity: disabled ? 0.45 : 1,
    transform: active && !disabled ? 'scale(0.97)' : 'scale(1)',
    ...sizes[size],
    ...v,
    background: !disabled && hover ? hoverBg[variant] : v.background
  };
  return /*#__PURE__*/React.createElement("button", {
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  icon = null,
  helperText,
  error
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--color-text)',
      marginBottom: '6px'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      border: `1.5px solid ${error ? 'var(--color-danger)' : focused ? 'var(--color-primary)' : 'var(--color-border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '11px 14px',
      background: 'var(--color-surface)',
      boxShadow: focused ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color .15s ease, box-shadow .15s ease'
    }
  }, icon, /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      border: 'none',
      outline: 'none',
      flex: 1,
      fontSize: 'var(--text-base)',
      fontFamily: 'inherit',
      background: 'transparent',
      color: 'var(--color-text)'
    }
  })), helperText && !error && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-text-muted)',
      marginTop: '5px'
    }
  }, helperText), error && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-danger)',
      marginTop: '5px'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--color-text)',
      marginBottom: '6px'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      width: '100%',
      padding: '11px 14px',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid var(--color-border-strong)',
      background: 'var(--color-surface)',
      fontSize: 'var(--text-base)',
      color: 'var(--color-text)',
      fontFamily: 'inherit'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/feedback/CartDrawer.jsx
try { (() => {
function CartDrawer({
  items = [],
  onQtyChange,
  onClose,
  onCheckout
}) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(11,61,42,0.45)',
      backdropFilter: 'blur(2px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '380px',
      maxWidth: '92vw',
      background: 'var(--color-surface)',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px',
      borderBottom: '1px solid var(--color-border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)'
    }
  }, "Mon panier"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      border: 'none',
      background: 'transparent',
      fontSize: '20px',
      cursor: 'pointer',
      color: 'var(--color-text-muted)'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '16px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-text-muted)',
      fontSize: 'var(--text-sm)',
      textAlign: 'center',
      marginTop: '40px'
    }
  }, "Votre panier est vide."), items.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.id,
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '56px',
      height: '56px',
      background: 'var(--color-surface-sunken)',
      borderRadius: 'var(--radius-md)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600
    }
  }, item.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-text-muted)'
    }
  }, item.price.toFixed(2).replace('.', ','), " \u20AC")), /*#__PURE__*/React.createElement(__ds_scope.QuantityStepper, {
    value: item.qty,
    onChange: v => onQtyChange && onQtyChange(item.id, v)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px',
      borderTop: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '14px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, total.toFixed(2).replace('.', ','), " \u20AC")), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    onClick: onCheckout
  }, "Passer la commande"))));
}
Object.assign(__ds_scope, { CartDrawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  tone = 'success',
  onClose
}) {
  const tones = {
    success: {
      bg: 'var(--green-900)',
      icon: '✓'
    },
    danger: {
      bg: 'var(--red-600)',
      icon: '✕'
    }
  };
  const t = tones[tone] || tones.success;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '14px 18px',
      background: t.bg,
      color: '#fff',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      minWidth: '260px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, t.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, message), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 'none',
      color: '#fff',
      opacity: 0.7,
      cursor: 'pointer',
      fontSize: '16px'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer() {
  const col = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };
  const link = {
    color: 'var(--ink-300)',
    fontSize: 'var(--text-sm)',
    textDecoration: 'none'
  };
  const heading = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'var(--text-sm)',
    color: '#fff',
    marginBottom: '4px'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--green-900)',
      color: 'var(--neutral-0)',
      padding: '48px 32px 24px',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '32px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '22px'
    }
  }, "vitalia", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--coral-500)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-300)',
      fontSize: 'var(--text-sm)',
      maxWidth: '220px'
    }
  }, "Votre parapharmacie en ligne : conseils, prix justes, livraison rapide.")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("div", {
    style: heading
  }, "Boutique"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Visage"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Cheveux"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "B\xE9b\xE9 & Maman"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Compl\xE9ments")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("div", {
    style: heading
  }, "Aide"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Livraison"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Retours"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "FAQ")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("div", {
    style: heading
  }, "Vitalia"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "\xC0 propos"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Nos pharmaciens"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Mentions l\xE9gales"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.12)',
      marginTop: '36px',
      paddingTop: '18px',
      textAlign: 'center',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-300)'
    }
  }, "\xA9 2026 Vitalia Parapharmacie. Tous droits r\xE9serv\xE9s."));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
function Header({
  cartCount = 0,
  onSearch,
  onCartClick,
  query,
  onQueryChange
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      padding: '14px 32px',
      background: 'var(--color-surface)',
      borderBottom: '1px solid var(--color-border)',
      fontFamily: 'var(--font-body)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '22px',
      color: 'var(--color-primary)',
      letterSpacing: '-0.5px'
    }
  }, "vitalia", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent)'
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'var(--color-surface-sunken)',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 18px',
      maxWidth: '480px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--color-text-muted)",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  })), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => onQueryChange && onQueryChange(e.target.value),
    placeholder: "Rechercher un produit, une marque\u2026",
    style: {
      border: 'none',
      outline: 'none',
      background: 'transparent',
      flex: 1,
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text)',
      fontFamily: 'inherit'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '20px',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--color-text)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Cat\xE9gories"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Promotions"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Conseils")), /*#__PURE__*/React.createElement("button", {
    onClick: onCartClick,
    style: {
      position: 'relative',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: '8px'
    },
    "aria-label": "Panier"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--color-primary)",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6h15l-1.5 9h-12z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "20",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "20",
    r: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 6L4 2H1"
  })), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '0',
      right: '0',
      background: 'var(--color-accent)',
      color: '#fff',
      fontSize: '10px',
      fontWeight: 700,
      borderRadius: '50%',
      width: '16px',
      height: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, cartCount)));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs,
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '4px',
      borderBottom: '1.5px solid var(--color-border)',
      fontFamily: 'var(--font-display)'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => onChange && onChange(t),
    style: {
      padding: '10px 18px',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      color: t === active ? 'var(--color-primary)' : 'var(--color-text-muted)',
      borderBottom: t === active ? '2px solid var(--color-primary)' : '2px solid transparent',
      marginBottom: '-1.5px',
      transition: 'color .15s ease'
    }
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/parapharmacie-web/App.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PRODUCTS = window.PRODUCTS;
const CATEGORIES = window.CATEGORIES;
const {
  ProductCard,
  CategoryChip,
  Header,
  Footer,
  Tabs,
  CartDrawer,
  Toast,
  Button,
  RatingStars,
  PriceTag,
  QuantityStepper,
  Badge
} = window.VitaliaParapharmacieDesignSystem_4f79c2;
function Hero() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(120deg, var(--green-700), var(--green-800))',
      color: '#fff',
      padding: '56px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '520px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-4xl)',
      lineHeight: 1.1,
      marginBottom: '14px'
    }
  }, "Votre sant\xE9 au quotidien, livr\xE9e chez vous"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-lg)',
      color: 'var(--green-100)',
      marginBottom: '24px'
    }
  }, "Conseils de pharmaciens, marques de confiance, prix justes. Parapharmacie en ligne."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "D\xE9couvrir les produits")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '220px',
      height: '220px',
      borderRadius: 'var(--radius-xl)',
      background: 'rgba(255,255,255,0.12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.6)',
      fontSize: 'var(--text-sm)',
      textAlign: 'center',
      flexShrink: 0
    }
  }, "Photo hero", /*#__PURE__*/React.createElement("br", null), "(\xE0 remplacer)"));
}
function Home({
  onOpenProduct,
  onAdd
}) {
  const [cat, setCat] = React.useState('visage');
  const filtered = PRODUCTS.filter(p => p.category === cat);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      marginBottom: '24px',
      overflowX: 'auto'
    }
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement(CategoryChip, {
    key: c.id,
    active: cat === c.id,
    onClick: () => setCat(c.id)
  }, c.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '20px'
    }
  }, filtered.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onOpenProduct(p),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(ProductCard, _extends({}, p, {
    onAdd: e => {
      e.stopPropagation();
      onAdd(p);
    }
  })))))));
}
function ProductDetail({
  product,
  onAdd,
  onBack
}) {
  const [tab, setTab] = React.useState('Description');
  const [qty, setQty] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '32px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--color-primary)',
      fontWeight: 600,
      cursor: 'pointer',
      marginBottom: '20px',
      fontFamily: 'var(--font-body)'
    }
  }, "\u2190 Retour"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '40px',
      flexWrap: 'wrap',
      marginBottom: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '320px',
      height: '320px',
      background: 'var(--color-surface-sunken)',
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-text-faint)'
    }
  }, "Photo produit"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: '280px'
    }
  }, product.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, product.badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-muted)',
      fontWeight: 600,
      textTransform: 'uppercase',
      marginBottom: '6px'
    }
  }, product.brand), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      marginBottom: '12px'
    }
  }, product.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement(RatingStars, {
    value: product.rating,
    count: product.reviewCount
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement(PriceTag, {
    price: product.price,
    oldPrice: product.oldPrice
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    onChange: setQty
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onAdd(product, qty)
  }, "Ajouter au panier")))), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Description', 'Composition', 'Avis'],
    active: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 0',
      maxWidth: '640px',
      fontFamily: 'var(--font-body)',
      color: 'var(--color-text)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, tab === 'Description' && /*#__PURE__*/React.createElement("p", null, "Formule dermatologique test\xE9e, adapt\xE9e aux peaux sensibles. Application quotidienne recommand\xE9e par nos pharmaciens."), tab === 'Composition' && /*#__PURE__*/React.createElement("p", null, "Aqua, Glycerin, Niacinamide, Panthenol \u2014 liste compl\xE8te disponible sur l'emballage."), tab === 'Avis' && /*#__PURE__*/React.createElement("p", null, product.reviewCount, " clients ont not\xE9 ce produit ", product.rating, "/5 en moyenne.")));
}
function App() {
  const [view, setView] = React.useState('home');
  const [product, setProduct] = React.useState(null);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cart, setCart] = React.useState([]);
  const [toast, setToast] = React.useState(null);
  const [query, setQuery] = React.useState('');
  const addToCart = (p, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === p.id);
      if (existing) return prev.map(i => i.id === p.id ? {
        ...i,
        qty: i.qty + qty
      } : i);
      return [...prev, {
        id: p.id,
        name: p.name,
        price: p.price,
        qty
      }];
    });
    setToast(`${p.name} ajouté au panier`);
    setTimeout(() => setToast(null), 2500);
  };
  const updateQty = (id, qty) => setCart(prev => prev.map(i => i.id === id ? {
    ...i,
    qty
  } : i));
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--color-bg)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    cartCount: cartCount,
    query: query,
    onQueryChange: setQuery,
    onCartClick: () => setCartOpen(true)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, view === 'home' && /*#__PURE__*/React.createElement(Home, {
    onOpenProduct: p => {
      setProduct(p);
      setView('detail');
    },
    onAdd: p => addToCart(p, 1)
  }), view === 'detail' && /*#__PURE__*/React.createElement(ProductDetail, {
    product: product,
    onAdd: addToCart,
    onBack: () => setView('home')
  })), /*#__PURE__*/React.createElement(Footer, null), cartOpen && /*#__PURE__*/React.createElement(CartDrawer, {
    items: cart,
    onQtyChange: updateQty,
    onClose: () => setCartOpen(false),
    onCheckout: () => {
      setCartOpen(false);
      setToast('Commande validée — merci !');
      setTimeout(() => setToast(null), 2500);
    }
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    message: toast,
    tone: "success"
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/parapharmacie-web/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/parapharmacie-web/data.js
try { (() => {
window.PRODUCTS = [{
  id: 'p1',
  brand: 'La Roche-Posay',
  name: 'Effaclar Duo+ 40ml',
  price: 16.9,
  oldPrice: 19.9,
  rating: 4,
  reviewCount: 342,
  badge: 'Promo',
  category: 'visage'
}, {
  id: 'p2',
  brand: 'Bioderma',
  name: 'Sensibio H2O 500ml',
  price: 14.5,
  rating: 5,
  reviewCount: 981,
  category: 'visage'
}, {
  id: 'p3',
  brand: 'Vichy',
  name: 'Minéral 89 Sérum 50ml',
  price: 22.9,
  rating: 4,
  reviewCount: 156,
  badge: 'Nouveau',
  category: 'visage'
}, {
  id: 'p4',
  brand: 'Klorane',
  name: 'Shampoing Avoine 400ml',
  price: 9.9,
  rating: 4,
  reviewCount: 210,
  category: 'cheveux'
}, {
  id: 'p5',
  brand: 'Ducray',
  name: 'Anaphase+ Shampoing 400ml',
  price: 13.5,
  oldPrice: 16.0,
  rating: 4,
  reviewCount: 88,
  badge: 'Promo',
  category: 'cheveux'
}, {
  id: 'p6',
  brand: 'Mustela',
  name: 'Liniment Oléo-Calcaire 500ml',
  price: 8.9,
  rating: 5,
  reviewCount: 512,
  category: 'bebe'
}, {
  id: 'p7',
  brand: 'Weleda',
  name: 'Huile Bébé Calendula 200ml',
  price: 11.9,
  rating: 5,
  reviewCount: 264,
  category: 'bebe'
}, {
  id: 'p8',
  brand: 'Nutergia',
  name: 'Bion 3 Défense 30 gél.',
  price: 18.9,
  rating: 4,
  reviewCount: 143,
  category: 'complements'
}, {
  id: 'p9',
  brand: 'Solgar',
  name: 'Vitamine D3 60 gél.',
  price: 15.9,
  rating: 5,
  reviewCount: 402,
  category: 'complements'
}, {
  id: 'p10',
  brand: 'CeraVe',
  name: 'Crème Hydratante 340ml',
  price: 15.5,
  rating: 5,
  reviewCount: 678,
  badge: 'Best-seller',
  category: 'visage'
}, {
  id: 'p11',
  brand: 'Klorane',
  name: 'Après-shampoing Mangue 200ml',
  price: 8.5,
  rating: 4,
  reviewCount: 76,
  category: 'cheveux'
}, {
  id: 'p12',
  brand: 'Mustela',
  name: 'Gel Lavant 500ml',
  price: 9.5,
  rating: 4,
  reviewCount: 199,
  category: 'bebe'
}];
window.CATEGORIES = [{
  id: 'visage',
  label: 'Visage'
}, {
  id: 'cheveux',
  label: 'Cheveux'
}, {
  id: 'bebe',
  label: 'Bébé & Maman'
}, {
  id: 'complements',
  label: 'Compléments'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/parapharmacie-web/data.js", error: String((e && e.message) || e) }); }

__ds_ns.CategoryChip = __ds_scope.CategoryChip;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.RatingStars = __ds_scope.RatingStars;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.CartDrawer = __ds_scope.CartDrawer;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
