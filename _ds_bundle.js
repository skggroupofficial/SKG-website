/* @ds-bundle: {"format":3,"namespace":"SKGShriKuberGroupDesignSystem_2a6fdb","components":[{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Sparkle","sourcePath":"components/brand/Sparkle.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Divider","sourcePath":"components/surfaces/Divider.jsx"},{"name":"Quote","sourcePath":"components/surfaces/Quote.jsx"}],"sourceHashes":{"components/brand/Eyebrow.jsx":"1106f5ad9ddc","components/brand/Logo.jsx":"14df7d6027df","components/brand/Sparkle.jsx":"1cadb57c546d","components/buttons/Button.jsx":"22f99ce1aa24","components/buttons/IconButton.jsx":"8a00a913994a","components/data/Badge.jsx":"c5dd02678359","components/data/Stat.jsx":"09c612b4fd81","components/data/Tag.jsx":"59f6423af3bc","components/forms/Checkbox.jsx":"f204b8f2f4a3","components/forms/Input.jsx":"0575076fc925","components/forms/Select.jsx":"c820fde2fddd","components/forms/Textarea.jsx":"d0616f784335","components/surfaces/Card.jsx":"ba774ba23830","components/surfaces/Divider.jsx":"2da5055e78a3","components/surfaces/Quote.jsx":"b4050eed32df","ui_kits/website/about.jsx":"586d006b29ab","ui_kits/website/app.jsx":"827a26b8de17","ui_kits/website/contact.jsx":"199f74744da5","ui_kits/website/data.jsx":"88c05d9e0044","ui_kits/website/footer.jsx":"6673836edb4e","ui_kits/website/header.jsx":"e883d2c7c0fb","ui_kits/website/home.jsx":"d4675c0bfba9","ui_kits/website/kit.jsx":"c7eb69973802","ui_kits/website/projectDetail.jsx":"296c115d1e58","ui_kits/website/projects.jsx":"d62162313875"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SKGShriKuberGroupDesignSystem_2a6fdb = window.SKGShriKuberGroupDesignSystem_2a6fdb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mono uppercase eyebrow / wayfinding label. Optional leading dash marker.
 */
function Eyebrow({
  children,
  as: Tag = 'span',
  dash = false,
  tone = 'accent',
  size = 'md',
  className = '',
  ...rest
}) {
  const cls = ['skg-eyebrow', dash ? 'skg-eyebrow--dash' : '', tone === 'muted' ? 'skg-label--muted' : '', tone === 'on-dark' ? 'skg-label--on-dark' : '', size === 'sm' ? 'skg-label--sm' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  auto: 'currentColor',
  tobacco: 'var(--tobacco-800)',
  bone: 'var(--bone-200)',
  brass: 'var(--brass-500)'
};
const IMG = {
  lockup: 'assets/logo/skg-logo-gold.png',
  monogram: 'assets/logo/skg-monogram-gold.png'
};

/**
 * SKG logo. `wordmark` renders type (fully self-contained, scales infinitely);
 * `lockup` / `monogram` render the gold artwork via <img> (pass `src` with the
 * correct relative path for your page).
 */
function Logo({
  variant = 'wordmark',
  size = 40,
  tagline = false,
  tone = 'auto',
  src,
  alt = 'SKG — Shri Kuber Group',
  className = '',
  ...rest
}) {
  if (variant === 'lockup' || variant === 'monogram') {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src || IMG[variant],
      alt: alt,
      className: `skg-logo skg-logo--${variant} ${className}`,
      style: {
        height: size,
        width: 'auto'
      }
    }, rest));
  }

  // Wordmark (type)
  const color = TONE[tone] || 'currentColor';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `skg-logo skg-logo--wordmark ${className}`,
    role: "img",
    "aria-label": alt,
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.32em',
      color,
      lineHeight: 1
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: size,
      letterSpacing: '-0.01em',
      lineHeight: 0.9
    }
  }, "SKG"), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: Math.max(8, size * 0.13),
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: tone === 'auto' ? 'var(--brass-500)' : color,
      opacity: 0.92
    }
  }, "The Power of Trust"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Sparkle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The SKG four-point star (✦ U+2726). A small brand atom used in rules,
 * lockups and as a list/section marker.
 */
function Sparkle({
  size = '1em',
  color = 'var(--accent)',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `skg-sparkle ${className}`,
    "aria-hidden": "true",
    style: {
      fontSize: size,
      color,
      lineHeight: 1,
      display: 'inline-block'
    }
  }, rest), "\u2726");
}
Object.assign(__ds_scope, { Sparkle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Sparkle.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANT = {
  primary: '',
  accent: 'skg-btn--accent',
  secondary: 'skg-btn--secondary',
  ghost: 'skg-btn--ghost',
  inverse: 'skg-btn--inverse',
  link: 'skg-btn--link'
};
const SIZE = {
  sm: 'skg-btn--sm',
  md: '',
  lg: 'skg-btn--lg'
};

/**
 * Primary action control. DM Mono uppercase label, near-square corners.
 * Renders <button> by default, or <a> when `href` is given.
 */
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  iconLeft,
  iconRight,
  href,
  disabled = false,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const cls = ['skg-btn', VARIANT[variant] || '', SIZE[size] || '', block ? 'skg-btn--block' : '', className].filter(Boolean).join(' ');
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "skg-btn__icon"
  }, iconLeft), children && /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement("span", {
    className: "skg-btn__icon"
  }, iconRight));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANT = {
  ghost: '',
  outline: 'skg-icon-btn--outline',
  solid: 'skg-icon-btn--solid'
};
const SIZE = {
  sm: 'skg-icon-btn--sm',
  md: '',
  lg: 'skg-icon-btn--lg'
};

/**
 * Square icon-only button. `label` becomes the aria-label (required for a11y).
 */
function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  href,
  disabled = false,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const cls = ['skg-icon-btn', VARIANT[variant] || '', SIZE[size] || '', className].filter(Boolean).join(' ');
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls,
      "aria-label": label
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    "aria-label": label,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Compact count / status badge. Use `dot` for a bare status indicator.
 */
function Badge({
  variant = 'default',
  dot = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['skg-badge', variant === 'accent' ? 'skg-badge--accent' : '', dot ? 'skg-badge--dot' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), !dot && children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A headline figure (Playfair) over a mono label. Optional unit + accent rule.
 */
function Stat({
  value,
  unit,
  label,
  rule = true,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `skg-stat ${className}`.trim()
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    className: "skg-stat__rule",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "skg-stat__value"
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    className: "skg-stat__unit"
  }, unit)), label && /*#__PURE__*/React.createElement("span", {
    className: "skg-stat__label"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANT = {
  brass: '',
  jade: 'skg-tag--jade',
  neutral: 'skg-tag--neutral',
  outline: 'skg-tag--outline',
  solid: 'skg-tag--solid'
};

/**
 * Small mono uppercase tag for status, category or phase.
 */
function Tag({
  variant = 'brass',
  icon,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `skg-tag ${VARIANT[variant] || ''} ${className}`.trim()
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "skg-tag__icon",
    "aria-hidden": "true"
  }, icon), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Custom checkbox or radio (set `type="radio"`). Brass fill when checked.
 */
function Checkbox({
  label,
  type = 'checkbox',
  id,
  className = '',
  ...rest
}) {
  const auto = React.useId();
  const inputId = id || auto;
  const isRadio = type === 'radio';
  return /*#__PURE__*/React.createElement("label", {
    className: `skg-check ${isRadio ? 'skg-check--radio' : ''} ${className}`.trim(),
    htmlFor: inputId
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    className: "skg-check__input"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "skg-check__box",
    "aria-hidden": "true"
  }, isRadio ? '' : '✓'), label && /*#__PURE__*/React.createElement("span", {
    className: "skg-check__label"
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labelled text input with optional hint / error. Renders the full field
 * (label + control + helper). Pass any native <input> props through.
 */
function Input({
  label,
  hint,
  error,
  required = false,
  invalid = false,
  id,
  className = '',
  ...rest
}) {
  const auto = React.useId();
  const inputId = id || auto;
  const isInvalid = invalid || !!error;
  return /*#__PURE__*/React.createElement("div", {
    className: "skg-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "skg-field__label",
    htmlFor: inputId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "skg-req"
  }, "*")), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: `skg-input ${isInvalid ? 'skg-input--invalid' : ''} ${className}`.trim(),
    "aria-invalid": isInvalid || undefined
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "skg-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "skg-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labelled native select with a custom chevron. Provide `options`
 * (array of {value,label} or strings) or pass <option> children.
 */
function Select({
  label,
  hint,
  error,
  required = false,
  invalid = false,
  id,
  options,
  placeholder,
  className = '',
  children,
  ...rest
}) {
  const auto = React.useId();
  const inputId = id || auto;
  const isInvalid = invalid || !!error;
  return /*#__PURE__*/React.createElement("div", {
    className: "skg-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "skg-field__label",
    htmlFor: inputId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "skg-req"
  }, "*")), /*#__PURE__*/React.createElement("span", {
    className: "skg-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    className: `skg-select ${isInvalid ? 'skg-select--invalid' : ''} ${className}`.trim(),
    "aria-invalid": isInvalid || undefined,
    defaultValue: placeholder && !rest.value && !rest.defaultValue ? '' : undefined
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options ? options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  }) : children), /*#__PURE__*/React.createElement("span", {
    className: "skg-select-wrap__chevron",
    "aria-hidden": "true"
  }, "\u25BE")), error ? /*#__PURE__*/React.createElement("span", {
    className: "skg-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "skg-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labelled multi-line text field with optional hint / error.
 */
function Textarea({
  label,
  hint,
  error,
  required = false,
  invalid = false,
  id,
  rows = 4,
  className = '',
  ...rest
}) {
  const auto = React.useId();
  const inputId = id || auto;
  const isInvalid = invalid || !!error;
  return /*#__PURE__*/React.createElement("div", {
    className: "skg-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "skg-field__label",
    htmlFor: inputId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "skg-req"
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    className: `skg-textarea ${isInvalid ? 'skg-textarea--invalid' : ''} ${className}`.trim(),
    "aria-invalid": isInvalid || undefined
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "skg-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "skg-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANT = {
  default: '',
  flat: 'skg-card--flat',
  raised: 'skg-card--raised',
  dark: 'skg-card--dark'
};
const PAD = {
  sm: 'skg-card--pad-sm',
  md: '',
  lg: 'skg-card--pad-lg'
};

/**
 * Square content panel. Renders <a> when `href` is set (and becomes
 * interactive — brass border + lift on hover).
 */
function Card({
  variant = 'default',
  pad = 'md',
  interactive = false,
  href,
  className = '',
  children,
  ...rest
}) {
  const cls = ['skg-card', VARIANT[variant] || '', PAD[pad] || '', interactive ? 'skg-card--interactive' : '', className].filter(Boolean).join(' ');
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Horizontal rule. `sparkle` centres the SKG four-point star between two
 * gold hairlines (section breaks, footers).
 */
function Divider({
  variant = 'subtle',
  className = '',
  ...rest
}) {
  if (variant === 'sparkle') {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: `skg-divider skg-divider--sparkle ${className}`.trim(),
      role: "separator"
    }, rest), /*#__PURE__*/React.createElement(__ds_scope.Sparkle, null));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: `skg-divider ${variant === 'gold' ? 'skg-divider--gold' : ''} ${className}`.trim()
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Divider.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pull quote — Playfair italic with a short brass rule and mono attribution.
 */
function Quote({
  children,
  cite,
  role,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: `skg-quote ${className}`.trim(),
    style: {
      margin: 0
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "skg-quote__rule",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("blockquote", {
    className: "skg-quote__text",
    style: {
      margin: 0
    }
  }, children), (cite || role) && /*#__PURE__*/React.createElement("figcaption", {
    className: "skg-quote__cite"
  }, cite && /*#__PURE__*/React.createElement("strong", null, cite), cite && role ? ' · ' : '', role));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Quote.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/about.jsx
try { (() => {
// ============================================================
// SKG Website — Approach (About)
// ============================================================
(function () {
  const SKG = window.SKGShriKuberGroupDesignSystem_2a6fdb || {};
  const {
    Button,
    Eyebrow,
    Divider
  } = SKG;
  const {
    Container,
    SectionHeading,
    Figure,
    Reveal
  } = window;
  const D = window.SKGData;
  const MATERIALS = [{
    name: 'Limestone',
    token: 'var(--material-limestone)',
    use: 'Cladding, plinths, courtyard paving.'
  }, {
    name: 'Aged Timber',
    token: 'var(--material-aged-timber)',
    use: 'Millwork and soffits. Oil-finished, never lacquered.'
  }, {
    name: 'Brass',
    token: 'var(--material-brass)',
    use: 'Hardware and signage. Unlacquered — designed to patina.'
  }, {
    name: 'Natural Linen',
    token: 'var(--material-natural-linen)',
    use: 'Furnishings and acoustic panels across hospitality.'
  }];
  function About({
    onNav
  }) {
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
      className: "skg-on-dark",
      style: {
        background: 'var(--tobacco-800)',
        color: 'var(--text-on-dark)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "skg-lattice--dark",
      style: {
        position: 'absolute',
        inset: 0
      }
    }), /*#__PURE__*/React.createElement(Container, {
      size: "lg",
      style: {
        position: 'relative',
        padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter)'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      dash: true,
      tone: "on-dark"
    }, "Our approach"), /*#__PURE__*/React.createElement("h1", {
      className: "skg-display",
      style: {
        fontSize: 'clamp(2.8rem, 6vw, 5rem)',
        color: 'var(--bone-100)',
        margin: '1.2rem 0',
        maxWidth: '16ch'
      }
    }, "Ground. Form. Experience."), /*#__PURE__*/React.createElement("p", {
      className: "skg-body skg-body--lead",
      style: {
        maxWidth: '54ch',
        color: 'var(--text-on-dark-muted)'
      }
    }, "SKG is a vertically integrated firm \u2014 not because integration is efficient, but because the alternative produces places where no one is fully accountable."))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: 'var(--section-pad-y) 0'
      }
    }, /*#__PURE__*/React.createElement(Container, {
      size: "lg"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0'
      }
    }, D.principles.map((pr, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: pr.no
    }, /*#__PURE__*/React.createElement("div", {
      className: "principle-row",
      style: {
        display: 'grid',
        gridTemplateColumns: '0.16fr 0.34fr 1fr',
        gap: '1.5rem',
        alignItems: 'baseline',
        padding: 'clamp(1.6rem, 3vw, 2.4rem) 0',
        borderTop: i === 0 ? '1px solid var(--border-default)' : '1px solid var(--border-subtle)',
        borderBottom: i === D.principles.length - 1 ? '1px solid var(--border-default)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        letterSpacing: '0.16em',
        color: 'var(--accent)'
      }
    }, pr.no), /*#__PURE__*/React.createElement("h3", {
      className: "skg-display",
      style: {
        fontSize: 'clamp(1.8rem, 3.4vw, 2.8rem)'
      }
    }, pr.name), /*#__PURE__*/React.createElement("p", {
      className: "skg-body",
      style: {
        fontSize: 'var(--text-md)',
        maxWidth: '52ch'
      }
    }, pr.body))))))), /*#__PURE__*/React.createElement("section", {
      className: "skg-lattice",
      style: {
        background: 'var(--bone-300)',
        padding: 'var(--section-pad-y) 0',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(Container, {
      size: "xl"
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "One roof",
      title: "Develop, build, host \u2014 decisions that carry through.",
      intro: "When you develop, build and operate under one roof, a choice made at the design stage carries through to the guest who sleeps in the room fifteen years later.",
      introMax: "58ch"
    }), /*#__PURE__*/React.createElement("div", {
      className: "flow-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem',
        marginTop: 'clamp(2.5rem, 4vw, 3.5rem)'
      }
    }, D.divisions.map((d, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: d.id,
      delay: i * 90
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bone-100)',
        border: '1px solid var(--border-subtle)',
        padding: 'clamp(1.5rem, 2.2vw, 2rem)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.9rem',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: `ph ${d.icon}`,
      style: {
        fontSize: '1.6rem',
        color: 'var(--accent)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.18em',
        color: 'var(--text-muted)'
      }
    }, d.no)), /*#__PURE__*/React.createElement("h3", {
      className: "skg-subheading",
      style: {
        fontSize: '1.4rem'
      }
    }, d.name), /*#__PURE__*/React.createElement("p", {
      className: "skg-body",
      style: {
        fontSize: '0.92rem',
        margin: 0
      }
    }, d.body))))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: 'var(--section-pad-y) 0'
      }
    }, /*#__PURE__*/React.createElement(Container, {
      size: "xl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "material-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: 'clamp(2rem, 5vw, 5rem)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.4rem'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      dash: true
    }, "Material honesty"), /*#__PURE__*/React.createElement("p", {
      className: "skg-display-italic",
      style: {
        fontSize: 'clamp(1.5rem, 3vw, 2.2rem)'
      }
    }, "We do not use materials to simulate other materials."), /*#__PURE__*/React.createElement("p", {
      className: "skg-body",
      style: {
        maxWidth: '54ch'
      }
    }, "Every material used across SKG developments is chosen for its ability to age \u2014 not just to perform. We resist anything that must be replaced within a decade. The brand's material language is a direct extension of the built work.")), /*#__PURE__*/React.createElement("div", {
      className: "materials-row",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.2rem'
      }
    }, MATERIALS.map(m => /*#__PURE__*/React.createElement("div", {
      key: m.name,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.7rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '84px',
        background: m.token,
        border: '1px solid var(--border-subtle)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "skg-subheading",
      style: {
        fontSize: '1.05rem'
      }
    }, m.name), /*#__PURE__*/React.createElement("span", {
      className: "skg-body",
      style: {
        fontSize: '0.82rem',
        color: 'var(--text-muted)'
      }
    }, m.use))))))), /*#__PURE__*/React.createElement("section", {
      className: "skg-on-dark",
      style: {
        background: 'var(--tobacco-900)',
        color: 'var(--text-on-dark)',
        padding: 'clamp(4rem, 8vw, 6.5rem) 0',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "skg-lattice--dark",
      style: {
        position: 'absolute',
        inset: 0,
        opacity: 0.5
      }
    }), /*#__PURE__*/React.createElement(Container, {
      size: "md",
      style: {
        position: 'relative',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--brass-300)',
        fontSize: '1.3rem'
      }
    }, "\u2726"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: 'clamp(1.5rem, 3.4vw, 2.5rem)',
        lineHeight: 1.3,
        color: 'var(--bone-100)',
        margin: '1.2rem auto 1.8rem',
        maxWidth: '26ch'
      }
    }, "We measure success on a long horizon. A project that performs in year one and degrades in year ten is not a success."), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: () => onNav('contact'),
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      })
    }, "Work with us"))));
  }
  window.About = About;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/about.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
// ============================================================
// SKG Website — App shell + simple router
// ============================================================
(function () {
  const NS = 'SKGShriKuberGroupDesignSystem_2a6fdb';
  function Fallback() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: '40px',
        letterSpacing: '-0.01em',
        color: 'var(--tobacco-800)'
      }
    }, "SKG"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "Design system loading\u2026"));
  }
  function App() {
    const [ready, setReady] = React.useState(() => !!window[NS]);
    const [page, setPage] = React.useState(() => localStorage.getItem('skg-site-page') || 'home');
    const [projectId, setProjectId] = React.useState(() => localStorage.getItem('skg-site-project') || 'kuber-riverfront');
    React.useEffect(() => {
      if (ready) return;
      let n = 0;
      const t = setInterval(() => {
        if (window[NS] || n++ > 40) {
          setReady(!!window[NS]);
          clearInterval(t);
        }
      }, 150);
      return () => clearInterval(t);
    }, [ready]);
    React.useEffect(() => {
      localStorage.setItem('skg-site-page', page);
    }, [page]);
    React.useEffect(() => {
      localStorage.setItem('skg-site-project', projectId);
    }, [projectId]);
    if (!ready) return /*#__PURE__*/React.createElement(Fallback, null);
    const nav = id => {
      setPage(id);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    };
    const openProject = id => {
      setProjectId(id);
      setPage('project');
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    };
    const headerPage = page === 'project' ? 'projects' : page;
    let view;
    if (page === 'projects') view = /*#__PURE__*/React.createElement(window.Projects, {
      onProject: openProject
    });else if (page === 'project') view = /*#__PURE__*/React.createElement(window.ProjectDetail, {
      id: projectId,
      onNav: nav,
      onProject: openProject
    });else if (page === 'about') view = /*#__PURE__*/React.createElement(window.About, {
      onNav: nav
    });else if (page === 'contact') view = /*#__PURE__*/React.createElement(window.Contact, null);else view = /*#__PURE__*/React.createElement(window.Home, {
      onNav: nav,
      onProject: openProject
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.SiteHeader, {
      page: headerPage,
      onNav: nav
    }), view, /*#__PURE__*/React.createElement(window.SiteFooter, {
      onNav: nav
    }));
  }
  ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/contact.jsx
try { (() => {
// ============================================================
// SKG Website — Contact
// ============================================================
(function () {
  const SKG = window.SKGShriKuberGroupDesignSystem_2a6fdb || {};
  const {
    Button,
    Eyebrow,
    Input,
    Textarea,
    Select,
    Checkbox,
    Divider
  } = SKG;
  const {
    Container,
    Figure
  } = window;
  const D = window.SKGData;
  function ContactRow({
    icon,
    label,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '0.9rem',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: `ph ${icon}`,
      style: {
        fontSize: '1.2rem',
        color: 'var(--accent)',
        marginTop: '0.15rem'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.2rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '0.95rem',
        lineHeight: 1.6,
        color: 'var(--text-primary)'
      }
    }, children)));
  }
  function Contact() {
    const [sent, setSent] = React.useState(false);
    const submit = e => {
      e.preventDefault();
      setSent(true);
    };
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: 'clamp(3rem, 6vw, 5rem) 0 0'
      }
    }, /*#__PURE__*/React.createElement(Container, {
      size: "xl"
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      dash: true
    }, "Contact"), /*#__PURE__*/React.createElement("h1", {
      className: "skg-display",
      style: {
        fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
        margin: '1rem 0 0',
        maxWidth: '18ch'
      }
    }, "Let's talk about your ground."))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: 'clamp(2.5rem, 5vw, 4rem) 0 var(--section-pad-y)'
      }
    }, /*#__PURE__*/React.createElement(Container, {
      size: "xl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "contact-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: 'clamp(2.5rem, 5vw, 5rem)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bone-100)',
        border: '1px solid var(--border-subtle)',
        padding: 'clamp(1.8rem, 3vw, 2.6rem)'
      }
    }, sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'flex-start',
        padding: '2rem 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '2rem',
        color: 'var(--accent)'
      }
    }, "\u2726"), /*#__PURE__*/React.createElement("h3", {
      className: "skg-display",
      style: {
        fontSize: '1.8rem'
      }
    }, "Thank you."), /*#__PURE__*/React.createElement("p", {
      className: "skg-body",
      style: {
        maxWidth: '40ch'
      }
    }, "Your enquiry has reached the SKG partnership office. We reply to every serious approach within two working days."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setSent(false)
    }, "Send another")) : /*#__PURE__*/React.createElement("form", {
      onSubmit: submit,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.3rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-row",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.3rem'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Full name",
      placeholder: "Rahul Kuber",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      placeholder: "you@company.com",
      required: true
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-row",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.3rem'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Phone",
      placeholder: "+91 \u2026"
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Enquiry type",
      placeholder: "Choose one",
      options: ['Land / JV', 'Investment', 'Hospitality', 'Press', 'Careers']
    })), /*#__PURE__*/React.createElement(Textarea, {
      label: "About the site or opportunity",
      rows: 4,
      placeholder: "Location, size, current use, and what you have in mind\u2026"
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "I agree to be contacted about this enquiry.",
      required: true
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      variant: "accent",
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      })
    }, "Send enquiry")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.8rem'
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: "dark",
      ratio: "16 / 10",
      caption: "Shri Kuber House \xB7 S.G. Highway"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.3rem'
      }
    }, /*#__PURE__*/React.createElement(ContactRow, {
      icon: "ph-map-pin",
      label: "Office"
    }, D.brand.address.map((l, i) => /*#__PURE__*/React.createElement("div", {
      key: i
    }, l))), /*#__PURE__*/React.createElement(ContactRow, {
      icon: "ph-phone",
      label: "Phone"
    }, D.brand.phone), /*#__PURE__*/React.createElement(ContactRow, {
      icon: "ph-envelope-simple",
      label: "Email"
    }, D.brand.email), /*#__PURE__*/React.createElement(ContactRow, {
      icon: "ph-clock",
      label: "Hours"
    }, "Mon\u2013Sat \xB7 10:00\u201318:30 IST")))))));
  }
  window.Contact = Contact;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.jsx
try { (() => {
// ============================================================
// SKG Website — shared fake content
// ============================================================
window.SKGData = {
  brand: {
    name: 'Shri Kuber Group',
    short: 'SKG',
    tagline: 'The Power of Trust',
    statement: 'Ground. Form. Experience.',
    phone: '+91 98765 43210',
    email: 'info@shrikubergroup.com',
    web: 'www.shrikubergroup.com',
    address: ['Shri Kuber House, 5th Floor', 'Nr. Pakwan Cross Road', 'S.G. Highway, Ahmedabad — 380051', 'Gujarat, India']
  },
  nav: [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'projects',
    label: 'Projects'
  }, {
    id: 'about',
    label: 'Approach'
  }, {
    id: 'contact',
    label: 'Contact'
  }],
  divisions: [{
    id: 'develop',
    no: '01',
    name: 'Develop',
    icon: 'ph-compass-tool',
    lead: 'Land, capital, masterplan.',
    body: 'We acquire ground others overlook and underwrite it for the long horizon — assembling parcels, securing approvals, and shaping the masterplan before a single line is built.',
    points: ['Site acquisition & assembly', 'Feasibility & underwriting', 'Masterplanning & approvals']
  }, {
    id: 'build',
    no: '02',
    name: 'Build',
    icon: 'ph-buildings',
    lead: 'Structure and material lead.',
    body: 'We build to last beyond the current cycle. Construction is managed in-house, with a material language chosen to age — limestone, oiled timber, unlacquered brass.',
    points: ['Construction management', 'Material & finish governance', 'Delivery & handover']
  }, {
    id: 'host',
    no: '03',
    name: 'Host',
    icon: 'ph-bell',
    lead: 'We operate what we build.',
    body: 'Permanence demands accountability. We run the hospitality experiences inside our developments ourselves, so a decision made at the design stage reaches the guest fifteen years later.',
    points: ['Hospitality operations', 'Asset & estate management', 'Guest & resident experience']
  }],
  stats: [{
    value: '1.4',
    unit: 'M ft²',
    label: 'Under development'
  }, {
    value: '06',
    unit: '',
    label: 'Active sites'
  }, {
    value: '18',
    unit: 'yr',
    label: 'Average hold'
  }, {
    value: '100',
    unit: '%',
    label: 'Operated in-house'
  }],
  principles: [{
    no: '01',
    name: 'Ground',
    body: 'Every project is rooted in its land, its context, its ecology. The site leads.'
  }, {
    no: '02',
    name: 'Form',
    body: 'Structure and material lead. Style follows, quietly. We do not ornament to compensate.'
  }, {
    no: '03',
    name: 'Experience',
    body: 'We operate what we build. Permanence is a contract with whoever inhabits the place.'
  }],
  projects: [{
    id: 'kuber-riverfront',
    name: 'Kuber Riverfront',
    division: 'Develop',
    type: 'Mixed-Use',
    location: 'Ahmedabad',
    phase: 'Phase 02',
    status: 'Under construction',
    year: '2026',
    size: '640,000 ft²',
    tone: 'dark',
    summary: 'A riverfront quarter of residences, offices and a public colonnade along the Sabarmati.',
    caption: 'Architectural detail · dawn light · stone & brass',
    specs: [{
      k: 'Programme',
      v: 'Residential · Office · Retail'
    }, {
      k: 'Site area',
      v: '4.2 acres'
    }, {
      k: 'Built-up',
      v: '640,000 ft²'
    }, {
      k: 'Status',
      v: 'Superstructure'
    }],
    narrative: 'The land was assembled over three years from seven holdings. The masterplan keeps the river edge public — a 320-metre colonnade in limestone and oiled timber — and lifts the residences above a podium of shops we will operate ourselves.'
  }, {
    id: 'the-kuber',
    name: 'The Kuber',
    division: 'Host',
    type: 'Hospitality',
    location: 'Ahmedabad',
    phase: 'Operating',
    status: 'Now open',
    year: '2024',
    size: '84 keys',
    tone: 'dark',
    summary: 'An 84-key house hotel above the riverfront, run end-to-end by SKG.',
    caption: 'Interior atmosphere · warm grade · diffused texture',
    specs: [{
      k: 'Keys',
      v: '84'
    }, {
      k: 'Operated by',
      v: 'SKG, in-house'
    }, {
      k: 'Opened',
      v: '2024'
    }, {
      k: 'Materials',
      v: 'Limestone · linen · brass'
    }],
    narrative: 'We host what we build. The Kuber is staffed and run by SKG — the same team that approved the joinery details now answers for how the rooms feel after a thousand nights of use.'
  }, {
    id: 'pakwan-heights',
    name: 'Pakwan Heights',
    division: 'Develop',
    type: 'Residential',
    location: 'S.G. Highway, Ahmedabad',
    phase: 'Phase 03',
    status: 'Now leasing',
    year: '2025',
    size: '210 homes',
    tone: 'light',
    summary: 'Two slender residential towers set back behind a limestone garden plinth.',
    caption: 'Materiality close-up · limestone plinth · courtyard paving',
    specs: [{
      k: 'Homes',
      v: '210'
    }, {
      k: 'Towers',
      v: '2 · 24 floors'
    }, {
      k: 'Amenity',
      v: 'Garden plinth'
    }, {
      k: 'Status',
      v: 'Leasing'
    }],
    narrative: 'The towers sit back from S.G. Highway behind a raised garden the neighbourhood can walk through. Cladding is local limestone; balconies are framed in brass left to patina.'
  }, {
    id: 'kuber-exchange',
    name: 'Kuber Exchange',
    division: 'Build',
    type: 'Commercial',
    location: 'GIFT City, Gandhinagar',
    phase: 'Masterplan',
    status: 'In design',
    year: '2027',
    size: '480,000 ft²',
    tone: 'dark',
    summary: 'A grade-A workplace block organised around a shaded central court.',
    caption: 'Architectural detail · dusk · no people visible',
    specs: [{
      k: 'Programme',
      v: 'Office · F&B'
    }, {
      k: 'Built-up',
      v: '480,000 ft²'
    }, {
      k: 'Court',
      v: 'Shaded · 30m span'
    }, {
      k: 'Status',
      v: 'Design development'
    }],
    narrative: 'A workplace organised around a deep, shaded court — passive cooling first, mechanical second. The structure is exposed and meant to be seen; nothing is added to hide the way it stands up.'
  }, {
    id: 'saanjh-courtyards',
    name: 'Saanjh Courtyards',
    division: 'Develop',
    type: 'Residential',
    location: 'Gandhinagar',
    phase: 'Phase 01',
    status: 'Site acquisition',
    year: '2028',
    size: '96 homes',
    tone: 'light',
    summary: 'Low-rise courtyard housing on the city edge, planted before it is built.',
    caption: 'Materiality close-up · timber soffit · evening',
    specs: [{
      k: 'Homes',
      v: '96 · low-rise'
    }, {
      k: 'Courtyards',
      v: '6'
    }, {
      k: 'Landscape',
      v: 'Planted first'
    }, {
      k: 'Status',
      v: 'Acquisition'
    }],
    narrative: 'We are planting the landscape a season before construction so the courtyards have shade on the day they open. This land has a story — orchard, then field — and we are continuing it.'
  }, {
    id: 'the-linen-house',
    name: 'The Linen House',
    division: 'Host',
    type: 'Boutique Hospitality',
    location: 'Udaipur',
    phase: 'Planning',
    status: 'Pre-development',
    year: '2028',
    size: '36 keys',
    tone: 'dark',
    summary: 'A 36-key retreat in a restored haveli above the lake.',
    caption: 'Interior atmosphere · warm grade · linen & stone',
    specs: [{
      k: 'Keys',
      v: '36'
    }, {
      k: 'Building',
      v: 'Restored haveli'
    }, {
      k: 'Operated by',
      v: 'SKG, in-house'
    }, {
      k: 'Status',
      v: 'Planning'
    }],
    narrative: 'A restoration, not a rebuild. We keep what has aged well and replace only what must be replaced — then run it ourselves, the way we run everything we host.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/footer.jsx
try { (() => {
// ============================================================
// SKG Website — Site Footer
// ============================================================
(function () {
  const SKG = window.SKGShriKuberGroupDesignSystem_2a6fdb || {};
  const {
    Logo,
    Divider
  } = SKG;
  const D = window.SKGData;
  function FootCol({
    title,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.9rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '10.5px',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--brass-300)'
      }
    }, title), children);
  }
  function FootLink({
    children,
    onClick
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      style: {
        appearance: 'none',
        background: 'none',
        border: 0,
        textAlign: 'left',
        padding: 0,
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: '0.95rem',
        color: 'var(--text-on-dark-muted)',
        transition: 'color var(--duration-fast) var(--ease-standard)'
      },
      onMouseEnter: e => e.currentTarget.style.color = 'var(--bone-100)',
      onMouseLeave: e => e.currentTarget.style.color = 'var(--text-on-dark-muted)'
    }, children);
  }
  function SiteFooter({
    onNav
  }) {
    return /*#__PURE__*/React.createElement("footer", {
      className: "skg-on-dark",
      style: {
        background: 'var(--tobacco-900)',
        color: 'var(--text-on-dark)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "skg-lattice--dark",
      style: {
        position: 'absolute',
        inset: 0,
        opacity: 0.6
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 'var(--container-xl)',
        margin: '0 auto',
        padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter) 2.5rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "footer-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
        gap: '2.5rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.3rem',
        maxWidth: '30ch'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "wordmark",
      size: 30,
      tagline: true,
      tone: "bone"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: '1.15rem',
        lineHeight: 1.4,
        color: 'var(--text-on-dark-muted)'
      }
    }, "We build places that outlast the conversation about them.")), /*#__PURE__*/React.createElement(FootCol, {
      title: "Navigate"
    }, D.nav.map(n => /*#__PURE__*/React.createElement(FootLink, {
      key: n.id,
      onClick: () => onNav(n.id)
    }, n.label))), /*#__PURE__*/React.createElement(FootCol, {
      title: "Divisions"
    }, D.divisions.map(d => /*#__PURE__*/React.createElement(FootLink, {
      key: d.id,
      onClick: () => onNav('about')
    }, d.name))), /*#__PURE__*/React.createElement(FootCol, {
      title: "Office"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '0.9rem',
        lineHeight: 1.7,
        color: 'var(--text-on-dark-muted)'
      }
    }, D.brand.address.map((l, i) => /*#__PURE__*/React.createElement("div", {
      key: i
    }, l))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.3rem',
        marginTop: '0.4rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.78rem',
        letterSpacing: '0.04em',
        color: 'var(--brass-300)'
      }
    }, /*#__PURE__*/React.createElement("span", null, D.brand.phone), /*#__PURE__*/React.createElement("span", null, D.brand.email)))), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '3rem 0 1.6rem'
      }
    }, /*#__PURE__*/React.createElement(Divider, {
      variant: "sparkle"
    })), /*#__PURE__*/React.createElement("div", {
      className: "footer-legal",
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '10.5px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--text-on-dark-faint)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 ", D.brand.name), /*#__PURE__*/React.createElement("span", null, "Real Estate Development \xB7 Construction \xB7 Hospitality"), /*#__PURE__*/React.createElement("span", null, D.brand.tagline))));
  }
  window.SiteFooter = SiteFooter;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/header.jsx
try { (() => {
// ============================================================
// SKG Website — Site Header
// ============================================================
(function () {
  const SKG = window.SKGShriKuberGroupDesignSystem_2a6fdb || {};
  const {
    Logo,
    Button,
    IconButton
  } = SKG;
  const D = window.SKGData;
  function NavLink({
    item,
    active,
    onNav
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => onNav(item.id),
      style: {
        appearance: 'none',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        padding: '0.4rem 0',
        position: 'relative',
        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
        transition: 'color var(--duration-fast) var(--ease-standard)'
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.color = 'var(--accent)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-secondary)';
      }
    }, item.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        bottom: '-2px',
        height: '1px',
        width: active ? '100%' : '0%',
        background: 'var(--accent)',
        transition: 'width var(--duration-base) var(--ease-out)'
      }
    }));
  }
  function SiteHeader({
    page,
    onNav
  }) {
    const [open, setOpen] = React.useState(false);
    const go = id => {
      onNav(id);
      setOpen(false);
    };
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 100
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--tobacco-800)',
        color: 'var(--text-on-dark-muted)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-xl)',
        margin: '0 auto',
        padding: '0 var(--gutter)',
        height: '34px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: 'var(--font-mono)',
        fontSize: '10.5px',
        letterSpacing: '0.14em',
        textTransform: 'uppercase'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-map-pin",
      style: {
        color: 'var(--brass-300)'
      }
    }), " Ahmedabad \xB7 Gujarat"), /*#__PURE__*/React.createElement("span", {
      className: "util-contact",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '1.4rem'
      }
    }, /*#__PURE__*/React.createElement("span", null, D.brand.phone), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--brass-300)'
      }
    }, D.brand.email)))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(244,239,228,0.92)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-xl)',
        margin: '0 auto',
        padding: '0 var(--gutter)',
        height: '74px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => go('home'),
      "aria-label": "SKG home",
      style: {
        appearance: 'none',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        padding: 0,
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "wordmark",
      size: 26,
      tone: "tobacco"
    })), /*#__PURE__*/React.createElement("nav", {
      className: "site-nav",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '2.4rem'
      }
    }, D.nav.map(item => /*#__PURE__*/React.createElement(NavLink, {
      key: item.id,
      item: item,
      active: page === item.id,
      onNav: onNav
    }))), /*#__PURE__*/React.createElement("div", {
      className: "header-cta",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "sm",
      onClick: () => go('contact'),
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      })
    }, "Enquire")), /*#__PURE__*/React.createElement("span", {
      className: "header-menu",
      style: {
        display: 'none'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      variant: "outline",
      label: "Menu",
      onClick: () => setOpen(o => !o)
    }, /*#__PURE__*/React.createElement("i", {
      className: open ? 'ph ph-x' : 'ph ph-list'
    })))), open && /*#__PURE__*/React.createElement("div", {
      className: "mobile-menu",
      style: {
        borderTop: '1px solid var(--border-subtle)',
        padding: '1rem var(--gutter) 1.6rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.2rem'
      }
    }, D.nav.map(item => /*#__PURE__*/React.createElement("button", {
      key: item.id,
      onClick: () => go(item.id),
      style: {
        appearance: 'none',
        background: 'none',
        border: 0,
        textAlign: 'left',
        padding: '0.85rem 0',
        borderBottom: '1px solid var(--border-subtle)',
        fontFamily: 'var(--font-display)',
        fontSize: '1.4rem',
        color: page === item.id ? 'var(--accent)' : 'var(--text-primary)',
        cursor: 'pointer'
      }
    }, item.label)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '1rem'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      block: true,
      onClick: () => go('contact'),
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      })
    }, "Enquire")))));
  }
  window.SiteHeader = SiteHeader;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home.jsx
try { (() => {
// ============================================================
// SKG Website — Home
// ============================================================
(function () {
  const SKG = window.SKGShriKuberGroupDesignSystem_2a6fdb || {};
  const {
    Button,
    Eyebrow,
    Stat,
    Tag,
    Divider,
    Quote
  } = SKG;
  const {
    Container,
    SectionHeading,
    Figure,
    Reveal
  } = window;
  const D = window.SKGData;

  // ---- Hero ----
  function Hero({
    onNav,
    onProject
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "skg-on-dark",
      style: {
        position: 'relative',
        background: 'var(--tobacco-800)',
        color: 'var(--text-on-dark)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "skg-lattice--dark",
      style: {
        position: 'absolute',
        inset: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '50%',
        height: '140%',
        background: 'radial-gradient(closest-side, rgba(160,120,48,0.16), transparent 70%)'
      }
    }), /*#__PURE__*/React.createElement(Container, {
      size: "xl",
      style: {
        position: 'relative',
        paddingTop: 'clamp(3.5rem, 7vw, 6.5rem)',
        paddingBottom: 'clamp(2.5rem, 5vw, 4rem)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: '1.08fr 0.92fr',
        gap: 'clamp(2rem, 5vw, 5rem)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.6rem'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      dash: true,
      tone: "on-dark"
    }, "Develop \xB7 Build \xB7 Host"), /*#__PURE__*/React.createElement("h1", {
      className: "skg-display",
      style: {
        fontSize: 'clamp(2.8rem, 6.4vw, 5.4rem)',
        lineHeight: 0.98,
        color: 'var(--bone-100)'
      }
    }, "Built to last beyond the current\xA0cycle."), /*#__PURE__*/React.createElement("p", {
      className: "skg-body skg-body--lead",
      style: {
        maxWidth: '46ch',
        color: 'var(--text-on-dark-muted)'
      }
    }, "Shri Kuber Group is a vertically integrated real estate firm \u2014 we acquire the ground, build the structure, and operate the hospitality within it. One team, accountable from the first survey to the fifteen-year guest."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '0.85rem',
        flexWrap: 'wrap',
        marginTop: '0.4rem'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: () => onNav('projects'),
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      })
    }, "View projects"), /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      onClick: () => onNav('about')
    }, "Our approach"))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 120
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: "dark",
      ratio: "4 / 5",
      caption: "Architectural detail \xB7 dawn \xB7 stone & brass"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => onProject('the-kuber'),
      style: {
        position: 'absolute',
        left: '1rem',
        top: '1rem',
        appearance: 'none',
        border: 0,
        background: 'rgba(28,18,10,0.55)',
        backdropFilter: 'blur(4px)',
        padding: '0.5rem 0.5rem 0.5rem 0.7rem',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.7rem'
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      variant: "jade"
    }, "Now open"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '10.5px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--bone-200)'
      }
    }, "The Kuber \u2192"))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'clamp(2.5rem, 5vw, 4rem)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '1px',
        background: 'var(--border-on-dark)',
        marginBottom: '2rem'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "hero-stats",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1.5rem'
      }
    }, D.stats.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.label,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'clamp(2rem, 3.4vw, 3rem)',
        lineHeight: 0.95,
        letterSpacing: '-0.02em',
        color: 'var(--bone-100)'
      }
    }, s.value, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '0.46em',
        color: 'var(--brass-300)',
        marginLeft: '0.12em'
      }
    }, s.unit)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '10.5px',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--text-on-dark-faint)'
      }
    }, s.label)))))));
  }

  // ---- Manifesto ----
  function Manifesto() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: 'var(--section-pad-y) 0'
      }
    }, /*#__PURE__*/React.createElement(Container, {
      size: "lg"
    }, /*#__PURE__*/React.createElement("div", {
      className: "manifesto-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: '0.8fr 1.2fr',
        gap: 'clamp(2rem, 5vw, 5rem)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
      dash: true
    }, "Vertically Integrated \xB7 Long-Horizon \xB7 Place-Led")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 80
    }, /*#__PURE__*/React.createElement("p", {
      className: "skg-display-italic",
      style: {
        fontSize: 'clamp(1.5rem, 3vw, 2.3rem)',
        color: 'var(--text-primary)',
        marginBottom: '1.8rem'
      }
    }, "We are not merely builders \u2014 we are shapers of place."), /*#__PURE__*/React.createElement("p", {
      className: "skg-body",
      style: {
        maxWidth: '60ch',
        fontSize: 'var(--text-md)'
      }
    }, "From land acquisition through construction to the operation of hospitality experiences within our developments, SKG exercises considered judgment at every phase. Our projects are designed to endure, to age with grace, and to generate long-term value for all who inhabit them.")))));
  }

  // ---- Divisions ----
  function Divisions() {
    return /*#__PURE__*/React.createElement("section", {
      className: "skg-lattice",
      style: {
        background: 'var(--bone-300)',
        padding: 'var(--section-pad-y) 0',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(Container, {
      size: "xl"
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "What we do",
      title: "Three disciplines, one accountable firm.",
      intro: "Most developers hand the building to someone else and the operation to a third party. We keep all three under one roof \u2014 because the alternative produces places where no one is fully responsible.",
      introMax: "56ch"
    }), /*#__PURE__*/React.createElement("div", {
      className: "divisions-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem',
        marginTop: 'clamp(2.5rem, 4vw, 3.5rem)'
      }
    }, D.divisions.map((d, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: d.id,
      delay: i * 90
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bone-100)',
        border: '1px solid var(--border-subtle)',
        padding: 'clamp(1.6rem, 2.4vw, 2.2rem)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: `ph ${d.icon}`,
      style: {
        fontSize: '2rem',
        color: 'var(--accent)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.2em',
        color: 'var(--text-faint)'
      }
    }, d.no)), /*#__PURE__*/React.createElement("h3", {
      className: "skg-display",
      style: {
        fontSize: '1.9rem'
      }
    }, d.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: '1.05rem',
        color: 'var(--text-accent)',
        margin: 0
      }
    }, d.lead), /*#__PURE__*/React.createElement("p", {
      className: "skg-body",
      style: {
        fontSize: '0.95rem',
        margin: 0
      }
    }, d.body), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: '0.4rem 0 0',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.55rem'
      }
    }, d.points.map(p => /*#__PURE__*/React.createElement("li", {
      key: p,
      style: {
        display: 'flex',
        gap: '0.6rem',
        alignItems: 'baseline',
        fontFamily: 'var(--font-body)',
        fontSize: '0.88rem',
        color: 'var(--text-secondary)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--accent)',
        fontSize: '0.7em'
      }
    }, "\u2726"), p)))))))));
  }

  // ---- Featured project ----
  function Featured({
    onProject
  }) {
    const p = D.projects[0];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: 'var(--section-pad-y) 0'
      }
    }, /*#__PURE__*/React.createElement(Container, {
      size: "xl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "featured-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: 'clamp(2rem, 4vw, 4rem)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Figure, {
      tone: "dark",
      ratio: "16 / 11",
      caption: p.caption
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 90
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.3rem'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      dash: true
    }, "Featured \xB7 ", p.phase), /*#__PURE__*/React.createElement("h2", {
      className: "skg-display",
      style: {
        fontSize: 'clamp(2rem, 3.6vw, 3rem)'
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '0.6rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      variant: "outline"
    }, p.type), /*#__PURE__*/React.createElement(Tag, {
      variant: "neutral",
      icon: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-map-pin"
      })
    }, p.location), /*#__PURE__*/React.createElement(Tag, null, p.status)), /*#__PURE__*/React.createElement("p", {
      className: "skg-body",
      style: {
        fontSize: 'var(--text-md)'
      }
    }, p.narrative), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => onProject(p.id),
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      })
    }, "View project")))))));
  }

  // ---- Quote band ----
  function QuoteBand() {
    return /*#__PURE__*/React.createElement("section", {
      className: "skg-on-dark",
      style: {
        background: 'var(--tobacco-800)',
        color: 'var(--text-on-dark)',
        padding: 'clamp(4rem, 8vw, 7rem) 0',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "skg-lattice--dark",
      style: {
        position: 'absolute',
        inset: 0,
        opacity: 0.5
      }
    }), /*#__PURE__*/React.createElement(Container, {
      size: "md",
      style: {
        position: 'relative',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--brass-300)',
        fontSize: '1.4rem'
      }
    }, "\u2726"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontWeight: 400,
        fontSize: 'clamp(1.6rem, 3.6vw, 2.7rem)',
        lineHeight: 1.25,
        color: 'var(--bone-100)',
        margin: '1.2rem auto 1.6rem',
        maxWidth: '22ch'
      }
    }, "\"We build places that outlast the conversation about them.\""), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--text-on-dark-faint)'
      }
    }, "Rahul Kuber \xB7 Managing Director"))));
  }

  // ---- Selected projects ----
  function SelectedProjects({
    onNav,
    onProject
  }) {
    const items = D.projects.slice(0, 3);
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: 'var(--section-pad-y) 0'
      }
    }, /*#__PURE__*/React.createElement(Container, {
      size: "xl"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: '1rem',
        flexWrap: 'wrap',
        marginBottom: 'clamp(2rem, 3.5vw, 3rem)'
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Selected work",
      title: "Ground we are continuing.",
      max: "18ch"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      onClick: () => onNav('projects'),
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-up-right"
      })
    }, "All projects")), /*#__PURE__*/React.createElement("div", {
      className: "projects-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem'
      }
    }, items.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: p.id,
      delay: i * 80
    }, /*#__PURE__*/React.createElement(window.ProjectCard, {
      p: p,
      onProject: onProject
    }))))));
  }

  // ---- CTA ----
  function CtaBand({
    onNav
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: 'var(--section-pad-y-tight) 0',
        background: 'var(--bone-300)',
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(Container, {
      size: "lg"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cta-grid",
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      dash: true
    }, "Land \xB7 Capital \xB7 Partnership"), /*#__PURE__*/React.createElement("h2", {
      className: "skg-display",
      style: {
        fontSize: 'clamp(1.8rem, 3.4vw, 2.8rem)'
      }
    }, "Let's talk about your ground.")), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => onNav('contact'),
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      })
    }, "Start a conversation"))));
  }
  function Home({
    onNav,
    onProject
  }) {
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
      onNav: onNav,
      onProject: onProject
    }), /*#__PURE__*/React.createElement(Manifesto, null), /*#__PURE__*/React.createElement(Divisions, null), /*#__PURE__*/React.createElement(Featured, {
      onProject: onProject
    }), /*#__PURE__*/React.createElement(QuoteBand, null), /*#__PURE__*/React.createElement(SelectedProjects, {
      onNav: onNav,
      onProject: onProject
    }), /*#__PURE__*/React.createElement(CtaBand, {
      onNav: onNav
    }));
  }
  window.Home = Home;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/kit.jsx
try { (() => {
// ============================================================
// SKG Website — layout helpers (load after the DS bundle)
// ============================================================
const SKG = window.SKGShriKuberGroupDesignSystem_2a6fdb || {};
const {
  Eyebrow
} = SKG;
const MONOGRAM = '../../assets/logo/skg-monogram-gold.png';

// Constrained content column
function Container({
  size = 'lg',
  className = '',
  style,
  children
}) {
  const max = {
    md: 'var(--container-md)',
    lg: 'var(--container-lg)',
    xl: 'var(--container-xl)',
    prose: 'var(--container-xs)'
  }[size];
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      width: '100%',
      maxWidth: max,
      marginInline: 'auto',
      paddingInline: 'var(--gutter)',
      ...style
    }
  }, children);
}

// Section eyebrow + display heading + optional intro
function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'light',
  max = '20ch',
  introMax = '52ch'
}) {
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      display: 'flex',
      flexDirection: 'column',
      gap: '1.1rem',
      alignItems: align === 'center' ? 'center' : 'flex-start'
    }
  }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
    dash: true,
    tone: onDark ? 'on-dark' : 'accent'
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    className: "skg-display",
    style: {
      maxWidth: max,
      fontSize: 'clamp(2rem, 4.4vw, 3.4rem)',
      color: onDark ? 'var(--bone-200)' : 'var(--text-primary)'
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    className: "skg-body skg-body--lead",
    style: {
      maxWidth: introMax,
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-secondary)'
    }
  }, intro));
}

// Art-directed image slot — branded placeholder until photography drops in.
// Pass `src` to show a real image; otherwise renders the SKG treatment + caption.
function Figure({
  src,
  alt = '',
  caption,
  tone = 'dark',
  ratio = '4 / 3',
  watermark = true,
  className = '',
  style
}) {
  const onDark = tone === 'dark';
  const bg = onDark ? 'linear-gradient(150deg, var(--tobacco-700) 0%, var(--tobacco-900) 100%)' : 'linear-gradient(150deg, var(--bone-300) 0%, var(--bone-500) 100%)';
  return /*#__PURE__*/React.createElement("figure", {
    className: className,
    style: {
      position: 'relative',
      margin: 0,
      overflow: 'hidden',
      aspectRatio: ratio,
      background: bg,
      borderRadius: 'var(--radius-card)',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'var(--img-grade)'
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: onDark ? 'skg-lattice--dark' : 'skg-lattice',
    style: {
      position: 'absolute',
      inset: 0
    }
  }), watermark && /*#__PURE__*/React.createElement("img", {
    src: MONOGRAM,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '46%',
      transform: 'translate(-50%, -54%)',
      opacity: onDark ? 0.14 : 0.16,
      filter: onDark ? 'none' : 'grayscale(0.2)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: onDark ? 'radial-gradient(120% 90% at 50% 0%, transparent 50%, rgba(20,12,6,0.5) 100%)' : 'none'
    }
  })), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      left: '1rem',
      bottom: '0.9rem',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-faint)' : 'var(--tobacco-500)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-aperture",
    style: {
      fontSize: '1.1em'
    }
  }), " ", caption));
}

// Subtle, calm reveal on first view (no bounce). Falls back to visible.
function Reveal({
  children,
  delay = 0,
  as = 'div',
  className = '',
  style
}) {
  const Tag = as;
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    className: className,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : 'translateY(18px)',
      transition: `opacity var(--duration-reveal) var(--ease-out) ${delay}ms, transform var(--duration-reveal) var(--ease-out) ${delay}ms`,
      ...style
    }
  }, children);
}
Object.assign(window, {
  Container,
  SectionHeading,
  Figure,
  Reveal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/projectDetail.jsx
try { (() => {
// ============================================================
// SKG Website — Project Detail
// ============================================================
(function () {
  const SKG = window.SKGShriKuberGroupDesignSystem_2a6fdb || {};
  const {
    Button,
    Eyebrow,
    Tag,
    Divider
  } = SKG;
  const {
    Container,
    Figure,
    Reveal
  } = window;
  const D = window.SKGData;
  function ProjectDetail({
    id,
    onNav,
    onProject
  }) {
    const idx = D.projects.findIndex(p => p.id === id);
    const p = D.projects[idx] || D.projects[0];
    const next = D.projects[(idx + 1) % D.projects.length];
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Container, {
      size: "xl",
      style: {
        paddingTop: '2rem'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onNav('projects'),
      style: {
        appearance: 'none',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--text-secondary)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-arrow-left"
    }), " All projects")), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: 'clamp(1.5rem, 3vw, 2.5rem) 0 var(--section-pad-y-tight)'
      }
    }, /*#__PURE__*/React.createElement(Container, {
      size: "xl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "detail-hero",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1.1fr',
        gap: 'clamp(2rem, 4vw, 4rem)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.3rem'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      dash: true
    }, p.division, " \xB7 ", p.type), /*#__PURE__*/React.createElement("h1", {
      className: "skg-display",
      style: {
        fontSize: 'clamp(2.4rem, 5vw, 4rem)',
        lineHeight: 1
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '0.6rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      variant: "neutral",
      icon: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-map-pin"
      })
    }, p.location), /*#__PURE__*/React.createElement(Tag, {
      variant: p.status.startsWith('Now') ? 'jade' : 'outline'
    }, p.status), /*#__PURE__*/React.createElement(Tag, null, p.phase)), /*#__PURE__*/React.createElement("p", {
      className: "skg-body skg-body--lead",
      style: {
        maxWidth: '46ch'
      }
    }, p.summary), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: () => onNav('contact'),
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      })
    }, "Enquire about ", p.name))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 80
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: p.tone,
      ratio: "4 / 3",
      caption: p.caption
    }))))), /*#__PURE__*/React.createElement("section", {
      className: "skg-on-dark",
      style: {
        background: 'var(--tobacco-800)',
        color: 'var(--text-on-dark)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "skg-lattice--dark",
      style: {
        position: 'absolute',
        inset: 0,
        opacity: 0.5
      }
    }), /*#__PURE__*/React.createElement(Container, {
      size: "xl",
      style: {
        position: 'relative',
        padding: 'clamp(2.5rem, 4vw, 3.5rem) var(--gutter)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "spec-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1.5rem'
      }
    }, p.specs.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.k,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '10.5px',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--brass-300)'
      }
    }, s.k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
        color: 'var(--bone-100)'
      }
    }, s.v)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: 'var(--section-pad-y) 0'
      }
    }, /*#__PURE__*/React.createElement(Container, {
      size: "lg"
    }, /*#__PURE__*/React.createElement("div", {
      className: "narrative-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: '0.5fr 1fr',
        gap: 'clamp(1.5rem, 4vw, 4rem)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      dash: true
    }, "The brief"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.6rem'
      }
    }, /*#__PURE__*/React.createElement("p", {
      className: "skg-display-italic",
      style: {
        fontSize: 'clamp(1.4rem, 2.6vw, 2rem)'
      }
    }, p.narrative), /*#__PURE__*/React.createElement("p", {
      className: "skg-body",
      style: {
        maxWidth: '58ch'
      }
    }, "Every material here is chosen for its ability to age \u2014 not just to perform. We resist anything that must be replaced within a decade. As with all SKG work, the brief is written for the building's tenth year, not its opening week."))), /*#__PURE__*/React.createElement("div", {
      className: "detail-gallery",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem',
        marginTop: 'clamp(2.5rem, 4vw, 3.5rem)'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Figure, {
      tone: "light",
      ratio: "1 / 1",
      caption: "Materiality \xB7 limestone & timber"
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 90
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: "dark",
      ratio: "1 / 1",
      caption: "Interior atmosphere \xB7 warm grade"
    }))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: 'var(--section-pad-y-tight) 0',
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bone-300)'
      }
    }, /*#__PURE__*/React.createElement(Container, {
      size: "xl"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onProject(next.id),
      style: {
        appearance: 'none',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        width: '100%',
        textAlign: 'left',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      dash: true
    }, "Next project"), /*#__PURE__*/React.createElement("span", {
      className: "skg-display",
      style: {
        fontSize: 'clamp(1.8rem, 3.6vw, 2.8rem)',
        color: 'var(--text-primary)'
      }
    }, next.name)), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--accent)',
        fontSize: '2rem',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-arrow-right"
    }))))));
  }
  window.ProjectDetail = ProjectDetail;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/projectDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/projects.jsx
try { (() => {
// ============================================================
// SKG Website — Projects (listing) + shared ProjectCard
// ============================================================
(function () {
  const SKG = window.SKGShriKuberGroupDesignSystem_2a6fdb || {};
  const {
    Tag,
    Eyebrow,
    Button
  } = SKG;
  const {
    Container,
    SectionHeading,
    Figure,
    Reveal
  } = window;
  const D = window.SKGData;
  function ProjectCard({
    p,
    onProject
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => onProject(p.id),
      className: "project-card",
      style: {
        appearance: 'none',
        textAlign: 'left',
        cursor: 'pointer',
        padding: 0,
        background: 'var(--bone-100)',
        border: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.borderColor = 'var(--accent)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      tone: p.tone,
      ratio: "4 / 3",
      caption: null,
      watermark: true,
      style: {
        borderRadius: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1.3rem 1.4rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.7rem',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.5rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '10.5px',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, p.type), /*#__PURE__*/React.createElement(Tag, {
      variant: p.status === 'Now open' || p.status === 'Now leasing' ? 'jade' : 'outline'
    }, p.phase)), /*#__PURE__*/React.createElement("h3", {
      className: "skg-display",
      style: {
        fontSize: '1.5rem'
      }
    }, p.name), /*#__PURE__*/React.createElement("p", {
      className: "skg-body",
      style: {
        fontSize: '0.9rem',
        margin: 0,
        flex: 1
      }
    }, p.summary), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '0.3rem',
        paddingTop: '0.9rem',
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '10.5px',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text-secondary)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-map-pin",
      style: {
        color: 'var(--accent)'
      }
    }), p.location), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--accent)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-arrow-right"
    })))));
  }
  window.ProjectCard = ProjectCard;
  const FILTERS = ['All', 'Develop', 'Build', 'Host'];
  function Projects({
    onProject
  }) {
    const [filter, setFilter] = React.useState('All');
    const items = filter === 'All' ? D.projects : D.projects.filter(p => p.division === filter);
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--tobacco-800)',
        color: 'var(--text-on-dark)',
        position: 'relative',
        overflow: 'hidden'
      },
      className: "skg-on-dark"
    }, /*#__PURE__*/React.createElement("div", {
      className: "skg-lattice--dark",
      style: {
        position: 'absolute',
        inset: 0
      }
    }), /*#__PURE__*/React.createElement(Container, {
      size: "xl",
      style: {
        position: 'relative',
        padding: 'clamp(3rem, 6vw, 5rem) var(--gutter)'
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      tone: "dark",
      eyebrow: "Selected work",
      title: "Projects",
      intro: "Six sites across Gujarat and Rajasthan \u2014 developed, built and, where we host, operated by SKG.",
      introMax: "50ch"
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: 'clamp(2.5rem, 5vw, 4rem) 0 var(--section-pad-y)'
      }
    }, /*#__PURE__*/React.createElement(Container, {
      size: "xl"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap',
        marginBottom: 'clamp(2rem, 3.5vw, 3rem)'
      }
    }, FILTERS.map(f => {
      const active = filter === f;
      return /*#__PURE__*/React.createElement("button", {
        key: f,
        onClick: () => setFilter(f),
        style: {
          appearance: 'none',
          cursor: 'pointer',
          padding: '0.55rem 1.1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          borderRadius: 'var(--radius-pill)',
          border: '1px solid ' + (active ? 'var(--accent)' : 'var(--border-default)'),
          background: active ? 'var(--accent)' : 'transparent',
          color: active ? 'var(--tobacco-900)' : 'var(--text-secondary)',
          transition: 'var(--transition-color)'
        }
      }, f);
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        alignSelf: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, items.length, " ", items.length === 1 ? 'project' : 'projects')), /*#__PURE__*/React.createElement("div", {
      className: "projects-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem'
      }
    }, items.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: p.id,
      delay: i * 60
    }, /*#__PURE__*/React.createElement(ProjectCard, {
      p: p,
      onProject: onProject
    })))))));
  }
  window.Projects = Projects;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/projects.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Sparkle = __ds_scope.Sparkle;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Quote = __ds_scope.Quote;

})();
