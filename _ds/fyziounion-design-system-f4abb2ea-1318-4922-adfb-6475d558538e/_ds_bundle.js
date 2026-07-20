/* @ds-bundle: {"format":3,"namespace":"FyzioUnionDesignSystem_f4abb2","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"ProgressRing","sourcePath":"components/data-display/ProgressRing.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Segmented","sourcePath":"components/forms/Segmented.jsx"},{"name":"Icon","sourcePath":"components/icon/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/icon/Icon.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"ce83dd89adfb","components/buttons/IconButton.jsx":"a7e96d75fb80","components/data-display/Avatar.jsx":"006338012cc7","components/data-display/Badge.jsx":"71348e3799fe","components/data-display/ProgressRing.jsx":"04eb6c566a4f","components/data-display/Tag.jsx":"ceb468c1356d","components/forms/Field.jsx":"bc8c0941b336","components/forms/Segmented.jsx":"d330c1786ae5","components/icon/Icon.jsx":"ee7cccec62e4","components/navigation/BottomNav.jsx":"bc5ed9c744ae","components/navigation/Tabs.jsx":"41403498ebb6","components/surfaces/Card.jsx":"41a6baa383ef","ui_kits/pacient/app.jsx":"b90b5322819b","ui_kits/terapeut/app.jsx":"2f49e552434c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FyzioUnionDesignSystem_f4abb2 = window.FyzioUnionDesignSystem_f4abb2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data-display/Avatar.jsx
try { (() => {
// Avatar — initials chip. Accent-tinted by default; navy/solid variants
// for the sidebar profile row.

const TONES = {
  tint: {
    background: "var(--accent-tint)",
    color: "var(--accent-text)"
  },
  navy: {
    background: "var(--fz-navy)",
    color: "#fff"
  },
  solid: {
    background: "var(--accent)",
    color: "#fff"
  }
};
function Avatar({
  initials,
  size = 38,
  tone = "tint",
  style
}) {
  const t = TONES[tone] || TONES.tint;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      flex: "none",
      borderRadius: "50%",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: Math.round(size * 0.34),
      letterSpacing: "0.02em",
      ...t,
      ...style
    }
  }, initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ProgressRing.jsx
try { (() => {
// ProgressRing — circular progress (daily completion, program progress).
// Center slot renders any content (count, check, percentage).

function ProgressRing({
  value = 0,
  size = 56,
  sw = 6,
  color = "var(--accent)",
  track = "var(--ring-track)",
  children,
  style
}) {
  const r = (size - sw) / 2;
  const c = 2 * Math.PI * r;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: track,
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: c * (1 - Math.max(0, Math.min(1, value))),
    style: {
      transition: "stroke-dashoffset .6s cubic-bezier(.4,0,.2,1)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, children));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
// Tag — compact metric chip (Série 0/2, Výdrž 30 s). A bold label +
// value pair; tones tint it for accent / done states.

const TONES = {
  default: {
    bg: "var(--chip)",
    fg: "var(--ink)",
    lab: "var(--ink-soft)"
  },
  accent: {
    bg: "var(--accent-tint)",
    fg: "var(--accent-text)",
    lab: "var(--accent)"
  },
  done: {
    bg: "var(--ok-tint)",
    fg: "var(--ok-text)",
    lab: "var(--ok)"
  }
};
function Tag({
  label,
  value,
  children,
  tone = "default",
  style
}) {
  const c = TONES[tone] || TONES.default;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      background: c.bg,
      borderRadius: 9,
      padding: "5px 10px",
      fontSize: 12.5,
      fontWeight: 500,
      color: c.fg,
      whiteSpace: "nowrap",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: c.lab
    }
  }, label), value, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Segmented.jsx
try { (() => {
// Segmented — pill toggle (timeframe filters, view switches).
// Inactive sits on the chip fill; the active option lifts to white.

function Segmented({
  options,
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      background: "var(--chip)",
      borderRadius: 13,
      padding: 4,
      gap: 2,
      ...style
    }
  }, options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    const active = opt.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: opt.value,
      type: "button",
      onClick: () => onChange && onChange(opt.value),
      style: {
        flex: 1,
        border: "none",
        cursor: "pointer",
        fontFamily: "inherit",
        borderRadius: 10,
        padding: "8px 10px",
        fontSize: 13.5,
        fontWeight: active ? 650 : 500,
        color: active ? "var(--ink)" : "var(--muted)",
        background: active ? "var(--surface)" : "transparent",
        boxShadow: active ? "0 1px 4px rgba(30,40,70,0.10)" : "none",
        transition: "all .18s var(--ease)"
      }
    }, opt.label);
  }));
}
Object.assign(__ds_scope, { Segmented });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Segmented.jsx", error: String((e && e.message) || e) }); }

// components/icon/Icon.jsx
try { (() => {
// Icon — FyzioUnion's line-icon set.
// 24×24 grid, 1.8 default stroke weight, round caps & joins.
// Ported from the patient app's icon set and extended with the
// glyphs the therapist web app uses. Stroke inherits `stroke`.

const PATHS = {
  // ── navigation / chrome ───────────────────────────────
  home: /*#__PURE__*/React.createElement("path", {
    d: "M3 10.5 12 4l9 6.5M5.5 9.5V19a1 1 0 0 0 1 1H10v-5h4v5h3.5a1 1 0 0 0 1-1V9.5"
  }),
  chart: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M5 20V11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 20V5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 20v-6"
  })),
  gear: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3 1a7 7 0 0 0-2-1.2l-.3-2.5h-4l-.3 2.5a7 7 0 0 0-2 1.2l-2.3-1-2 3.4 2 1.5A7 7 0 0 0 5 12a7 7 0 0 0 .1 1.2l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 2 1.2l.3 2.5h4l.3-2.5a7 7 0 0 0 2-1.2l2.3 1 2-3.4-2-1.5A7 7 0 0 0 19 12Z"
  })),
  users: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8.5",
    r: "3.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 19c0-3.2 2.7-5.5 6-5.5s6 2.3 6 5.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 5.2a3.4 3.4 0 0 1 0 6.6M21 19c0-2.6-1.6-4.6-4-5.2"
  })),
  fileText: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 20V4a.5.5 0 0 1 .5-.5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 3.5V8H18M9 12.5h6M9 16h4"
  })),
  dumbbell: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M6.5 9v6M3.5 10.5v3M17.5 9v6M20.5 10.5v3M6.5 12h11"
  })),
  layers: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "m12 3 8 4.5-8 4.5-8-4.5L12 3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m4 12 8 4.5 8-4.5M4 16.5 12 21l8-4.5"
  })),
  // ── chevrons / arrows ─────────────────────────────────
  chevL: /*#__PURE__*/React.createElement("path", {
    d: "M15 5 8 12l7 7"
  }),
  chevR: /*#__PURE__*/React.createElement("path", {
    d: "m9 5 7 7-7 7"
  }),
  chevronDown: /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }),
  chevronUp: /*#__PURE__*/React.createElement("path", {
    d: "m6 15 6-6 6 6"
  }),
  arrowR: /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }),
  // ── actions ───────────────────────────────────────────
  plus: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M12 6v12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 12h12"
  })),
  check: /*#__PURE__*/React.createElement("path", {
    d: "m5 12.5 4.5 4.5L19 7"
  }),
  checkCircle: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m8 12 2.5 2.5L16 9"
  })),
  x: /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }),
  search: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "6.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3.6-3.6"
  })),
  edit: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M5 19h14M15.5 4.5l4 4-9.5 9.5H6v-4l9.5-9.5Z"
  })),
  trash: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M5 7h14M9.5 7V5h5v2M7 7l1 13h8l1-13"
  })),
  copy: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "8",
    width: "12",
    height: "12",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 8V5.5A1.5 1.5 0 0 0 14.5 4H5.5A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8"
  })),
  filter: /*#__PURE__*/React.createElement("path", {
    d: "M4 6h16M7 12h10M10 18h4"
  }),
  refresh: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M20 11a8 8 0 1 0-.5 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 4v5h-5"
  })),
  expand: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M8 4H4v4M16 4h4v4M8 20H4v-4M16 20h4v-4"
  })),
  dots: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "5",
    r: "1.4",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.4",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "19",
    r: "1.4",
    fill: "currentColor",
    stroke: "none"
  })),
  // ── feedback / status ─────────────────────────────────
  bell: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 19a2 2 0 0 0 4 0"
  })),
  clock: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7.5V12l3 1.8"
  })),
  timer: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 13V8.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 2.5h5"
  })),
  info: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11v5M12 7.8v.2"
  })),
  shield: /*#__PURE__*/React.createElement("path", {
    d: "M12 3.5 19 6v6c0 4.5-3 7-7 8.5C8 19 5 16.5 5 12V6l7-2.5Z"
  }),
  activity: /*#__PURE__*/React.createElement("path", {
    d: "M3 12h4l2.5-7 5 14 2.5-7h4"
  }),
  award: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 13.5 7.5 21l4.5-2.5L16.5 21 15 13.5"
  })),
  flame: /*#__PURE__*/React.createElement("path", {
    d: "M12 3s5 4 5 9a5 5 0 0 1-10 0c0-1.6.7-3 1.5-4 .2 1 1 1.8 1.8 1.8C11 9.8 10 7 12 3Z"
  }),
  moon: /*#__PURE__*/React.createElement("path", {
    d: "M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5Z"
  }),
  calendar: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "5.5",
    width: "16",
    height: "15",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 10h16M8.5 3.5v4M15.5 3.5v4"
  })),
  clipboard: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "4.5",
    width: "14",
    height: "16",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 4.5h6v3H9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 12h7M8.5 16h5"
  })),
  heart: /*#__PURE__*/React.createElement("path", {
    d: "M12 20s-7-4.6-9.2-9C1.3 8 2.6 5 5.6 5 7.6 5 9 6.3 12 9c3-2.7 4.4-4 6.4-4 3 0 4.3 3 2.8 6-2.2 4.4-9.2 9-9.2 9Z"
  }),
  star: /*#__PURE__*/React.createElement("path", {
    d: "M12 3.5l2.6 5.6 6 .7-4.4 4.1 1.2 6L12 17.4 6.6 19.9l1.2-6L3.4 9.8l6-.7L12 3.5Z"
  }),
  // ── media / player ────────────────────────────────────
  play: /*#__PURE__*/React.createElement("path", {
    d: "M8 5.5v13l11-6.5-11-6.5Z",
    fill: "currentColor",
    stroke: "none"
  }),
  pause: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "7",
    y: "6",
    width: "3.2",
    height: "12",
    rx: "1",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13.8",
    y: "6",
    width: "3.2",
    height: "12",
    rx: "1",
    fill: "currentColor",
    stroke: "none"
  })),
  sound: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M4 9.5v5h3l5 4V5.5l-5 4H4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 9a4 4 0 0 1 0 6"
  })),
  bolt: /*#__PURE__*/React.createElement("path", {
    d: "M13 3 5 13h5l-1 8 8-10h-5l1-8Z"
  }),
  spark: /*#__PURE__*/React.createElement("path", {
    d: "M12 4l1.6 4.9L18.5 10l-4.9 1.6L12 16l-1.6-4.4L5.5 10l4.9-1.1L12 4Z"
  }),
  // ── account / auth ────────────────────────────────────
  user: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8.5",
    r: "3.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 20c0-3.5 3-6 7-6s7 2.5 7 6"
  })),
  logout: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M14 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 15l3-3-3-3M9 12h10"
  })),
  mail: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "3.5",
    y: "5.5",
    width: "17",
    height: "13",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m4 7 8 6 8-6"
  })),
  lock: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "11",
    width: "14",
    height: "9",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11V8a4 4 0 0 1 8 0v3"
  })),
  eye: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })),
  eyeOff: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l16 16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 5.9A9.6 9.6 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a16 16 0 0 1-2.4 3.1M6.2 7.7A16 16 0 0 0 2.5 12S6 18.5 12 18.5a9 9 0 0 0 2.8-.44"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.9 9.9a3 3 0 0 0 4.2 4.2"
  }))
};
function Icon({
  name,
  size = 22,
  stroke = "currentColor",
  fill = "none",
  sw = 1.8,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: stroke,
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    className: className,
    "aria-hidden": "true"
  }, PATHS[name] || null);
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
// Button — FyzioUnion's primary action control.
// Covers the therapist web button scale (sm/md) and the patient
// app's full-width CTA (lg). Variants map to the brand's button roles.

const VARIANTS = {
  primary: {
    background: "var(--accent)",
    color: "#fff",
    border: "1px solid transparent"
  },
  ghost: {
    background: "var(--surface)",
    color: "var(--ink)",
    border: "1px solid var(--border-2)",
    boxShadow: "var(--sh-1)"
  },
  quiet: {
    background: "transparent",
    color: "var(--ink-soft)",
    border: "1px solid transparent"
  },
  soft: {
    background: "var(--accent-tint)",
    color: "var(--accent-text)",
    border: "1px solid var(--accent-tint-2)"
  },
  danger: {
    background: "var(--danger-tint)",
    color: "var(--danger-text)",
    border: "1px solid transparent"
  }
};
const SIZES = {
  sm: {
    height: 32,
    padding: "0 11px",
    fontSize: 13,
    borderRadius: "var(--r-md)",
    gap: 7,
    icon: 15
  },
  md: {
    height: 38,
    padding: "0 15px",
    fontSize: 13.5,
    borderRadius: "var(--r-md)",
    gap: 8,
    icon: 16
  },
  lg: {
    height: "auto",
    padding: "15px 18px",
    fontSize: 16.5,
    borderRadius: "var(--r-lg)",
    gap: 8,
    icon: 19
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  fullWidth = false,
  disabled = false,
  onClick,
  style,
  type = "button"
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const iconStroke = variant === "primary" ? "#fff" : "currentColor";
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    disabled: disabled,
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      borderRadius: s.borderRadius,
      fontFamily: "inherit",
      fontWeight: 600,
      fontSize: s.fontSize,
      whiteSpace: "nowrap",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background .14s var(--ease), border-color .14s, color .14s, box-shadow .14s, transform .12s",
      opacity: disabled ? 0.55 : 1,
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.985)";
    },
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon,
    stroke: iconStroke
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon,
    stroke: iconStroke
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
// IconButton — square / circular icon-only control.
// Used for toolbar actions, modal close (circle), and kebab menus.

const VARIANTS = {
  quiet: {
    background: "transparent",
    color: "var(--muted)",
    border: "none",
    radius: "var(--r-md)"
  },
  ghost: {
    background: "var(--surface)",
    color: "var(--ink-soft)",
    border: "1px solid var(--border-2)",
    radius: "var(--r-md)",
    boxShadow: "var(--sh-1)"
  },
  soft: {
    background: "var(--accent-tint)",
    color: "var(--accent-text)",
    border: "1px solid var(--accent-tint-2)",
    radius: "var(--r-md)"
  },
  circle: {
    background: "var(--surface)",
    color: "var(--muted)",
    border: "1px solid var(--border)",
    radius: "50%"
  }
};
function IconButton({
  name,
  label,
  variant = "quiet",
  size = 36,
  iconSize,
  onClick,
  active = false,
  style
}) {
  const v = VARIANTS[variant] || VARIANTS.quiet;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    onClick: onClick,
    style: {
      width: size,
      height: size,
      padding: 0,
      flex: "none",
      display: "grid",
      placeItems: "center",
      cursor: "pointer",
      borderRadius: v.radius,
      border: v.border,
      background: active ? "var(--accent-tint)" : v.background,
      color: active ? "var(--accent)" : v.color,
      boxShadow: v.boxShadow || "none",
      transition: "background .14s, color .14s, border-color .14s",
      ...style
    },
    onMouseEnter: e => {
      if (variant === "quiet" || variant === "circle") e.currentTarget.style.background = "var(--raise)";
    },
    onMouseLeave: e => {
      if (!active && (variant === "quiet" || variant === "circle")) e.currentTarget.style.background = v.background;
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: iconSize || Math.round(size * 0.46),
    stroke: "currentColor"
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
// Badge — small status pill (patient state, program status, counts).

const TONES = {
  neutral: {
    background: "var(--raise-2)",
    color: "var(--ink-soft)"
  },
  active: {
    background: "var(--ok-tint)",
    color: "var(--ok-text)"
  },
  done: {
    background: "var(--ok)",
    color: "#fff"
  },
  warn: {
    background: "var(--warn-tint)",
    color: "var(--warn-text)"
  },
  danger: {
    background: "var(--danger-tint)",
    color: "var(--danger-text)"
  },
  accent: {
    background: "var(--accent-tint)",
    color: "var(--accent-text)"
  }
};
function Badge({
  children,
  tone = "neutral",
  dot = false,
  icon,
  style
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 24,
      padding: "0 9px",
      borderRadius: 7,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.01em",
      whiteSpace: "nowrap",
      ...t,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor"
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12,
    stroke: "currentColor",
    sw: 2.2
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
// Field — labelled text input with optional leading/trailing icon.
// Focus ring uses the accent; rests on the neutral field fill.

function Field({
  label,
  icon,
  trailing,
  value,
  onChange,
  placeholder,
  type = "text",
  hint,
  disabled = false,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 12.5,
      fontWeight: 600,
      color: "var(--muted)",
      marginBottom: 7,
      letterSpacing: "0.01em"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: 44,
      padding: "0 14px",
      borderRadius: "var(--r-md)",
      background: focus ? "var(--surface)" : "var(--field)",
      border: `1px solid ${focus ? "var(--accent)" : "var(--border-2)"}`,
      boxShadow: focus ? "0 0 0 4px var(--accent-shadow)" : "none",
      opacity: disabled ? 0.6 : 1,
      transition: "border-color .14s, box-shadow .14s, background .14s"
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    stroke: focus ? "var(--accent)" : "var(--faint)"
  }), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "none",
      fontFamily: "inherit",
      fontSize: 14.5,
      color: "var(--ink)"
    }
  }), trailing), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 12,
      color: "var(--faint)",
      marginTop: 6
    }
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
// BottomNav — the patient app's tab bar. Fixed set of three
// destinations; active item turns accent.

const DEFAULT_ITEMS = [{
  id: "home",
  label: "Domov",
  icon: "home"
}, {
  id: "progress",
  label: "Pokrok",
  icon: "chart"
}, {
  id: "settings",
  label: "Nastavenia",
  icon: "gear"
}];
function BottomNav({
  tab,
  onTab,
  items = DEFAULT_ITEMS,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      display: "flex",
      alignItems: "flex-start",
      background: "#fff",
      borderTop: "1px solid var(--line)",
      padding: "10px 12px 26px",
      ...style
    }
  }, items.map(it => {
    const active = tab === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      onClick: () => onTab && onTab(it.id),
      style: {
        flex: 1,
        border: "none",
        background: "none",
        cursor: "pointer",
        fontFamily: "inherit",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        padding: "2px 0",
        color: active ? "var(--accent)" : "var(--nav-idle)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 24,
      sw: active ? 2.1 : 1.8,
      stroke: "currentColor"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        fontWeight: active ? 650 : 500
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
// Tabs — underline tab bar (program editor, detail sections).
// Active tab is inked with an accent underline; optional count pill.

function Tabs({
  items,
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1px solid var(--border)",
      ...style
    }
  }, items.map(it => {
    const tab = typeof it === "string" ? {
      id: it,
      label: it
    } : it;
    const active = tab.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      type: "button",
      onClick: () => onChange && onChange(tab.id),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 4px",
        marginRight: 18,
        marginBottom: -1,
        border: "none",
        background: "none",
        cursor: "pointer",
        fontFamily: "inherit",
        fontWeight: 600,
        fontSize: 14,
        color: active ? "var(--ink)" : "var(--muted)",
        borderBottom: `2px solid ${active ? "var(--accent)" : "transparent"}`,
        transition: "color .14s"
      }
    }, tab.label, tab.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        background: "var(--field)",
        border: "1px solid var(--border)",
        borderRadius: 6,
        padding: "1px 7px",
        fontSize: 11.5,
        fontWeight: 600,
        color: "var(--muted)"
      }
    }, tab.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
// Card — the brand's surface container. `surface` is the default white
// card; `hero` is the deep-navy gradient card (daily training, reminders);
// `tint` is the soft accent card.

const VARIANTS = {
  surface: {
    background: "var(--surface)",
    color: "var(--ink)",
    border: "1px solid var(--border)",
    boxShadow: "var(--sh-card-app)"
  },
  hero: {
    background: "linear-gradient(150deg, var(--fz-navy) 0%, var(--fz-navy-deep) 100%)",
    color: "#fff",
    border: "none",
    boxShadow: "var(--sh-hero)"
  },
  tint: {
    background: "var(--accent-tint)",
    color: "var(--accent-ink, var(--ink))",
    border: "1px solid var(--accent-tint-2)",
    boxShadow: "none"
  },
  ok: {
    background: "var(--ok-tint)",
    color: "var(--ok-text)",
    border: "1px solid var(--ok-line)",
    boxShadow: "none"
  }
};
function Card({
  children,
  variant = "surface",
  radius = 20,
  pad = 18,
  onClick,
  style
}) {
  const v = VARIANTS[variant] || VARIANTS.surface;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      borderRadius: radius,
      padding: pad,
      cursor: onClick ? "pointer" : "default",
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pacient/app.jsx
try { (() => {
// ui_kits/pacient/app.jsx — FyzioUnion patient app, Home screen recreation.
// Composes design-system primitives (Card, ProgressRing, BottomNav, Tag,
// Badge, Icon) inside an iPhone shell. Exported to window: FyzioPatientApp.
// Bundle primitives are bound lazily so this file is safe whether the
// bundle loads before it (UI-kit index.html) or alongside it (template).
let Icon, Card, ProgressRing, BottomNav, Tag, Badge;
function bindDS() {
  ({
    Icon,
    Card,
    ProgressRing,
    BottomNav,
    Tag,
    Badge
  } = window.FyzioUnionDesignSystem_f4abb2);
}
if (window.FyzioUnionDesignSystem_f4abb2) bindDS();

// ── Content (trimmed from the real app's data model) ─────────
const PROGRAM = {
  name: "Zlomenina zápästia",
  phase: "Fáza 1",
  week: "3. týždeň z 8"
};
const DAYS = [{
  key: "d03",
  dow: "St",
  num: 3,
  status: "done"
}, {
  key: "d04",
  dow: "Št",
  num: 4,
  status: "done"
}, {
  key: "d05",
  dow: "Pi",
  num: 5,
  status: "done"
}, {
  key: "d06",
  dow: "So",
  num: 6,
  status: "rest"
}, {
  key: "d07",
  dow: "Ne",
  num: 7,
  status: "rest"
}, {
  key: "d08",
  dow: "Po",
  num: 8,
  status: "today"
}, {
  key: "d09",
  dow: "Ut",
  num: 9,
  status: "exercise"
}, {
  key: "d10",
  dow: "St",
  num: 10,
  status: "rest"
}, {
  key: "d11",
  dow: "Št",
  num: 11,
  status: "exercise"
}];
const EXERCISES = [{
  id: "e1",
  name: "Ohýbanie a vystieranie zápästia",
  variation: "S oporou o stôl",
  hint: "Pomaly ohýbajte zápästie hore a dole.",
  sets: 2,
  metric: "30 s"
}, {
  id: "e2",
  name: "Pohyb zápästia do strán",
  variation: "Bez pomôcok",
  hint: "Nakláňajte ruku jemne vľavo a vpravo.",
  sets: 2,
  metric: "30 s"
}, {
  id: "e3",
  name: "Otáčanie predlaktia",
  variation: "So záťažou 1,5 kg",
  hint: "Otáčajte dlaň hore a dole, lakeť pri tele.",
  sets: 3,
  metric: "20 s"
}, {
  id: "e4",
  name: "Zatváranie a otváranie dlane",
  variation: "S mäkkou loptičkou",
  hint: "Pomaly zovrite päsť a opäť vystrite prsty.",
  sets: 2,
  metric: "12×"
}];

// series progress fill colors (mirrors the real app)
const srBg = (n, sets) => {
  if (n >= sets) return "var(--ok)";
  if (n === 0) return "#fff";
  const t = (n - 1) / Math.max(sets - 1, 1);
  return `color-mix(in oklch, var(--accent) ${Math.round(20 + t * 80)}%, white)`;
};
const srIcon = (n, sets) => {
  if (n === 0) return "var(--faint)";
  if (n >= sets) return "#fff";
  const t = (n - 1) / Math.max(sets - 1, 1);
  return t < 0.35 ? "var(--accent)" : "#fff";
};

// ── Striped exercise-video placeholder ───────────────────────
function VideoThumb({
  w,
  label = "cvik"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: w,
      alignSelf: "stretch",
      flexShrink: 0,
      borderRadius: 14,
      overflow: "hidden",
      background: "#eef1f6",
      backgroundImage: "repeating-linear-gradient(135deg, rgba(120,132,165,0.10) 0 8px, transparent 8px 16px)",
      border: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 12px rgba(40,60,120,0.10)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 15,
    stroke: "var(--accent)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: 0.4,
      color: "#9aa1b6",
      textTransform: "uppercase"
    }
  }, label)));
}

// ── Day selector (minimal pill row) ──────────────────────────
function DaySelector({
  days,
  selected,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      overflowX: "auto",
      padding: "2px 18px 4px",
      scrollbarWidth: "none"
    }
  }, days.map(d => {
    const sel = d.key === selected;
    const isToday = d.status === "today";
    return /*#__PURE__*/React.createElement("button", {
      key: d.key,
      onClick: () => onSelect(d.key),
      style: {
        border: "none",
        cursor: "pointer",
        fontFamily: "inherit",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        padding: "8px 12px",
        borderRadius: 12,
        minWidth: 46,
        background: sel ? "var(--accent)" : "transparent",
        color: sel ? "#fff" : isToday ? "var(--accent)" : "var(--muted)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        fontWeight: 600,
        opacity: sel ? 0.85 : 1
      }
    }, isToday ? "Dnes" : d.dow), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        fontWeight: 700
      }
    }, d.num), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: sel ? "rgba(255,255,255,0.8)" : d.status === "done" ? "var(--ok)" : d.status === "rest" ? "var(--line)" : "var(--accent)"
      }
    }));
  }));
}

// ── Exercise card ────────────────────────────────────────────
function ExerciseCard({
  ex,
  seriesDone,
  onAdd
}) {
  const done = seriesDone >= ex.sets;
  const partial = seriesDone > 0 && !done;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 20,
      padding: 15,
      border: done ? "1.5px solid var(--ok-line)" : "1px solid var(--line)",
      boxShadow: "var(--sh-card-app)",
      display: "flex",
      gap: 13,
      alignItems: "stretch",
      minHeight: 124
    }
  }, /*#__PURE__*/React.createElement(VideoThumb, {
    w: 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 720,
      color: "var(--ink)",
      letterSpacing: -0.3,
      lineHeight: 1.2,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, ex.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--muted)",
      fontWeight: 500,
      marginTop: 2,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, ex.variation), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: "auto",
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      borderRadius: 10,
      padding: "8px 14px",
      fontSize: 15,
      fontWeight: 740,
      background: done ? "var(--ok-tint)" : partial ? srBg(seriesDone, ex.sets) : "var(--chip)",
      color: done ? "var(--ok-text)" : partial ? srIcon(seriesDone, ex.sets) : "var(--ink)"
    }
  }, done ? `${ex.sets}/${ex.sets}` : `${seriesDone}/${ex.sets}`), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      borderRadius: 10,
      padding: "8px 14px",
      fontSize: 15,
      fontWeight: 740,
      background: "var(--chip)",
      color: "var(--ink)"
    }
  }, ex.metric))), /*#__PURE__*/React.createElement("button", {
    onClick: onAdd,
    "aria-label": "Pripo\u010D\xEDta\u0165 s\xE9riu",
    style: {
      alignSelf: "center",
      flexShrink: 0,
      width: 46,
      height: 46,
      borderRadius: 14,
      cursor: "pointer",
      padding: 0,
      border: seriesDone === 0 ? "1.5px solid var(--line)" : "none",
      background: srBg(seriesDone, ex.sets),
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 22,
    stroke: srIcon(seriesDone, ex.sets),
    sw: 2.4
  })));
}

// ── Home screen ──────────────────────────────────────────────
function HomeScreen() {
  const [day, setDay] = React.useState("d08");
  const [series, setSeries] = React.useState({
    e1: 2
  });
  const [pain, setPain] = React.useState(null);
  const add = ex => setSeries(s => {
    const cur = s[ex.id] || 0;
    return {
      ...s,
      [ex.id]: cur >= ex.sets ? 0 : cur + 1
    };
  });
  const doneCount = EXERCISES.filter(e => (series[e.id] || 0) >= e.sets).length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 50,
      flexShrink: 0,
      background: "var(--bg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 14px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 750,
      color: "var(--ink)",
      letterSpacing: -0.4,
      lineHeight: 1.1
    }
  }, PROGRAM.name), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: "50%",
      background: "var(--chip)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronDown",
    size: 17,
    stroke: "var(--muted)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--muted)",
      marginTop: 4,
      fontWeight: 500
    }
  }, PROGRAM.phase, " \xB7 ", PROGRAM.week)), /*#__PURE__*/React.createElement(ProgressRing, {
    value: doneCount / EXERCISES.length,
    size: 52,
    sw: 5
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 750,
      color: "var(--ink)"
    }
  }, doneCount, "/", EXERCISES.length))), /*#__PURE__*/React.createElement(DaySelector, {
    days: DAYS,
    selected: day,
    onSelect: setDay
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px 8px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPain(pain == null ? 3 : null),
    style: {
      width: "100%",
      background: "#fff",
      borderRadius: 16,
      border: "1px solid var(--line)",
      boxShadow: "var(--sh-card-app)",
      cursor: "pointer",
      fontFamily: "inherit",
      textAlign: "left",
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "13px 15px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 11,
      flexShrink: 0,
      background: pain != null ? "var(--accent)" : "var(--accent-tint)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, pain != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 760,
      color: "#fff"
    }
  }, pain) : /*#__PURE__*/React.createElement(Icon, {
    name: "activity",
    size: 19,
    stroke: "var(--accent)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 16,
      fontWeight: 700,
      color: "var(--ink)"
    }
  }, "Ak\xFA m\xE1te dnes boles\u0165?"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevR",
    size: 19,
    stroke: "var(--muted)"
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "hero",
    radius: 22,
    pad: 18,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 14,
      flexShrink: 0,
      background: "rgba(255,255,255,0.14)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clipboard",
    size: 24,
    stroke: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 650,
      color: "rgba(255,255,255,0.62)",
      letterSpacing: 0.3,
      textTransform: "uppercase"
    }
  }, "Hodnotiaci n\xE1stroj"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16.5,
      fontWeight: 700,
      marginTop: 2
    }
  }, "Index centr\xE1lnej senzitiz\xE1cie (CSI) \xB7 ~5 min\xFAt")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevR",
    size: 20,
    stroke: "rgba(255,255,255,0.9)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 720,
      color: "var(--ink)"
    }
  }, "Dne\u0161n\xFD pl\xE1n"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: doneCount === EXERCISES.length ? "var(--ok)" : "var(--muted)"
    }
  }, doneCount === EXERCISES.length ? "Všetko hotové" : `${doneCount} z ${EXERCISES.length} cvikov`)), EXERCISES.map(ex => /*#__PURE__*/React.createElement(ExerciseCard, {
    key: ex.id,
    ex: ex,
    seriesDone: series[ex.id] || 0,
    onAdd: () => add(ex)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8
    }
  }))));
}

// ── iPhone shell ─────────────────────────────────────────────
function IOSDevice({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 800,
      background: "#fff",
      borderRadius: 52,
      border: "11px solid #11151f",
      boxShadow: "0 30px 70px rgba(20,28,55,0.35)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 50,
      zIndex: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 30px 0 34px",
      fontFamily: "var(--font-app)",
      fontWeight: 600,
      fontSize: 15,
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: 13,
      transform: "translateX(-50%)",
      width: 110,
      height: 30,
      background: "#11151f",
      borderRadius: 16
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "activity",
    size: 15,
    stroke: "var(--ink)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "\uDBC1\uDE47"))), children);
}
function FyzioPatientApp() {
  const [ready, setReady] = React.useState(!!window.FyzioUnionDesignSystem_f4abb2);
  React.useEffect(() => {
    if (ready) return;
    const id = setInterval(() => {
      if (window.FyzioUnionDesignSystem_f4abb2) {
        bindDS();
        setReady(true);
        clearInterval(id);
      }
    }, 40);
    return () => clearInterval(id);
  }, [ready]);
  const [tab, setTab] = React.useState("home");
  if (!ready) return null;
  bindDS();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 28,
      fontFamily: "var(--font-app)"
    }
  }, /*#__PURE__*/React.createElement(IOSDevice, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0
    }
  }, tab === "home" && /*#__PURE__*/React.createElement(HomeScreen, null), tab !== "home" && /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      color: "var(--muted)",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: tab === "progress" ? "chart" : "gear",
    size: 40,
    stroke: "var(--faint)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, tab === "progress" ? "Pokrok" : "Nastavenia"))), /*#__PURE__*/React.createElement(BottomNav, {
    tab: tab,
    onTab: setTab
  }))));
}
Object.assign(window, {
  FyzioPatientApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pacient/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/terapeut/app.jsx
try { (() => {
// ui_kits/terapeut/app.jsx — FyzioUnion therapist web SaaS, Patients view.
// Dark-navy sidebar shell + patient list, composed from design-system
// primitives. Exported to window: FyzioTherapistApp.
// Bundle primitives are bound lazily so this file is safe whether the
// bundle loads before it (UI-kit index.html) or alongside it (template).
let Icon, Avatar, Badge, Button, IconButton;
function bindDS() {
  ({
    Icon,
    Avatar,
    Badge,
    Button,
    IconButton
  } = window.FyzioUnionDesignSystem_f4abb2);
}
if (window.FyzioUnionDesignSystem_f4abb2) bindDS();
const NAV = [{
  id: "patients",
  label: "Pacienti",
  icon: "users"
}, {
  id: "programs",
  label: "Programy",
  icon: "fileText"
}, {
  id: "exercises",
  label: "Cviky",
  icon: "dumbbell"
}, {
  id: "assessments",
  label: "Hodnotiace nástroje",
  icon: "clipboard"
}];
const PATIENTS = [{
  initials: "DH",
  name: "Daniel Hayes",
  email: "d.hayes@email.sk",
  code: "K4B8XR",
  program: null,
  status: "neutral",
  statusLabel: "Nezačaté",
  time: "pred 7 minútami",
  adh: null
}, {
  initials: "ML",
  name: "Mara Lindqvist",
  email: "m.lindqvist@email.sk",
  code: "L3TP9M",
  program: "Lateral ankle sprain",
  status: "active",
  statusLabel: "Aktívny",
  time: "pred 3 dňami",
  adh: 0.82
}, {
  initials: "TR",
  name: "Tomáš Rivera",
  email: "t.rivera@email.sk",
  code: "B56NXQ",
  program: "Rotator cuff repair",
  status: "active",
  statusLabel: "Aktívny",
  time: "pred 2 týždňami",
  adh: 0.64
}, {
  initials: "LK",
  name: "Lucia Kováčová",
  email: "lucia.kovacova@email.sk",
  code: "FYZ7K2",
  program: "Zlomenina zápästia",
  status: "active",
  statusLabel: "Aktívny",
  time: "dnes",
  adh: 0.91
}, {
  initials: "AN",
  name: "Aiko Nakamura",
  email: "a.nakamura@email.sk",
  code: "Y2KA1T",
  program: "Mobilita ramena",
  status: "done",
  statusLabel: "Dokončené",
  time: "pred mesiacom",
  adh: 1
}, {
  initials: "PH",
  name: "Peter Horváth",
  email: "p.horvath@email.sk",
  code: "Q9M2V8",
  program: "Bolesť dolnej časti chrbta",
  status: "active",
  statusLabel: "Aktívny",
  time: "pred 5 dňami",
  adh: 0.47
}];
function Sidebar({
  active,
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 252,
      flexShrink: 0,
      height: "100vh",
      background: "linear-gradient(180deg, var(--fz-navy) 0%, var(--fz-navy-deep) 160%)",
      display: "flex",
      flexDirection: "column",
      padding: "18px 14px 16px",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 38,
      margin: "0 6px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      background: "#fff",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "spark",
    size: 18,
    stroke: "var(--accent)",
    fill: "var(--accent)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 19,
      letterSpacing: "-0.02em"
    }
  }, "Fyzio")), /*#__PURE__*/React.createElement(IconButton, {
    name: "layers",
    label: "Zbali\u0165",
    variant: "quiet",
    size: 30,
    style: {
      color: "rgba(255,255,255,0.7)"
    }
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      height: 42,
      padding: "0 13px",
      borderRadius: "var(--r-md)",
      border: "none",
      cursor: "pointer",
      fontFamily: "inherit",
      background: "#fff",
      color: "var(--fz-navy)",
      fontWeight: 700,
      fontSize: 14,
      marginBottom: 16,
      boxShadow: "0 4px 14px rgba(0,0,0,0.18)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 18,
    stroke: "var(--fz-navy)",
    sw: 2.2
  }), " Vytvori\u0165 pacienta"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, NAV.map(n => {
    const on = n.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNav(n.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        height: 40,
        padding: "0 12px",
        width: "100%",
        borderRadius: "var(--r-md)",
        border: "none",
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: 14,
        fontWeight: on ? 650 : 500,
        textAlign: "left",
        background: on ? "rgba(255,255,255,0.13)" : "transparent",
        color: on ? "#fff" : "rgba(255,255,255,0.72)",
        transition: "background .14s, color .14s"
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = "rgba(255,255,255,0.07)";
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = "transparent";
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 20,
      stroke: on ? "#fff" : "rgba(255,255,255,0.7)"
    }), " ", n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      height: 38,
      padding: "0 12px",
      width: "100%",
      borderRadius: "var(--r-md)",
      border: "none",
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: 14,
      fontWeight: 500,
      color: "rgba(255,255,255,0.72)",
      background: "transparent",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 20,
    stroke: "rgba(255,255,255,0.7)"
  }), " Sp\xE4tn\xE1 v\xE4zba"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 9px 2px",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "EP",
    size: 32,
    tone: "solid"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13.5,
      whiteSpace: "nowrap"
    }
  }, "Dr. Elena Pendrak"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "rgba(255,255,255,0.55)"
    }
  }, "Fyzioterapeut"))));
}
function PatientRow({
  p
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "16px 20px",
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--r-lg)",
      boxShadow: "var(--sh-1)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: p.initials,
    size: 42
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16,
      color: "var(--ink)",
      letterSpacing: "-0.01em"
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.08em",
      color: "var(--faint)",
      background: "var(--field)",
      border: "1px solid var(--border)",
      borderRadius: 6,
      padding: "2px 7px"
    }
  }, p.code)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--muted)",
      marginTop: 3
    }
  }, p.email), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 7
    }
  }, p.program ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 13,
      fontWeight: 600,
      color: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "fileText",
    size: 14,
    stroke: "var(--accent)"
  }), " ", p.program) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--faint)"
    }
  }, "Bez programu"))), p.adh != null && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--faint)",
      marginBottom: 6
    }
  }, "Doch\xE1dzka"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 6,
      borderRadius: 999,
      background: "var(--raise-2)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      height: "100%",
      width: `${p.adh * 100}%`,
      borderRadius: 999,
      background: "var(--accent)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--ink-soft)",
      fontVariantNumeric: "tabular-nums"
    }
  }, Math.round(p.adh * 100), "%"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 8,
      flexShrink: 0,
      width: 130
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.status,
    dot: p.status !== "neutral"
  }, p.statusLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--faint)"
    }
  }, p.time)), /*#__PURE__*/React.createElement(IconButton, {
    name: "dots",
    label: "Mo\u017Enosti",
    variant: "quiet"
  }));
}
function PatientsScreen() {
  const [q, setQ] = React.useState("");
  const list = PATIENTS.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: "100vh",
      overflowY: "auto",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px 40px 18px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 30,
      fontWeight: 700,
      letterSpacing: "-0.025em",
      color: "var(--accent-deep)",
      margin: 0
    }
  }, "Pacienti")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: "0 auto",
      padding: "0 40px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 40,
      padding: "0 13px",
      flex: 1,
      borderRadius: "var(--r-md)",
      border: "1px solid var(--border-2)",
      background: "var(--surface)",
      boxShadow: "var(--sh-1)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    stroke: "var(--faint)"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "H\u013Eada\u0165 pacientov",
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "none",
      fontFamily: "inherit",
      fontSize: 14,
      color: "var(--ink)"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: "chevronDown",
    icon: "filter"
  }, "Stav"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "plus"
  }, "Vytvori\u0165 pacienta")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: "0 auto",
      padding: "20px 40px 60px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, list.map(p => /*#__PURE__*/React.createElement(PatientRow, {
    key: p.code,
    p: p
  }))));
}
function FyzioTherapistApp() {
  const [ready, setReady] = React.useState(!!window.FyzioUnionDesignSystem_f4abb2);
  React.useEffect(() => {
    if (ready) return;
    const id = setInterval(() => {
      if (window.FyzioUnionDesignSystem_f4abb2) {
        bindDS();
        setReady(true);
        clearInterval(id);
      }
    }, 40);
    return () => clearInterval(id);
  }, [ready]);
  const [nav, setNav] = React.useState("patients");
  if (!ready) return null;
  bindDS();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100vh",
      fontFamily: "var(--font-body)",
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: nav,
    onNav: setNav
  }), /*#__PURE__*/React.createElement(PatientsScreen, null));
}
Object.assign(window, {
  FyzioTherapistApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/terapeut/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Segmented = __ds_scope.Segmented;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

})();
