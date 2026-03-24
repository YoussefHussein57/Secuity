function getDomPath(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return "";
  const stack = [];

  while (el.parentNode) {
    let sibCount = 0;
    let sibIndex = 0;

    for (let i = 0; i < el.parentNode.childNodes.length; i++) {
      const sib = el.parentNode.childNodes[i];
      if (sib.nodeType === Node.ELEMENT_NODE && sib.nodeName === el.nodeName) {
        if (sib === el) sibIndex = sibCount;
        sibCount++;
      }
    }

    const nodeName = el.nodeName.toLowerCase();
    if (el.id) {
      stack.unshift(`${nodeName}#${el.id}`);
      break;
    } else if (sibCount > 1) {
      stack.unshift(`${nodeName}:nth-of-type(${sibIndex + 1})`);
    } else {
      stack.unshift(nodeName);
    }

    el = el.parentNode;
  }

  return stack.join(" > ");
}

function getSelectorHint(el) {
  if (el.id) return `#${el.id}`;
  const classes = [...el.classList].slice(0, 3).join(".");
  return classes ? `${el.tagName.toLowerCase()}.${classes}` : el.tagName.toLowerCase();
}

function getTextSnippet(el) {
  const text = (el.innerText || el.textContent || "").replace(/\s+/g, " ").trim();
  return text.slice(0, 200);
}

function isVisible(el, style, rect) {
  return (
    style.display !== "none" &&
    style.visibility !== "hidden" &&
    style.opacity !== "0" &&
    rect.width > 0 &&
    rect.height > 0
  );
}

function extractComputedStyles(el) {
  const s = window.getComputedStyle(el);

  return {
    display: s.display,
    visibility: s.visibility,
    opacity: s.opacity,
    overflow: s.overflow,
    overflowX: s.overflowX,
    overflowY: s.overflowY,
    pointerEvents: s.pointerEvents,

    width: s.width,
    height: s.height,
    minWidth: s.minWidth,
    minHeight: s.minHeight,
    maxWidth: s.maxWidth,
    maxHeight: s.maxHeight,
    boxSizing: s.boxSizing,

    marginTop: s.marginTop,
    marginRight: s.marginRight,
    marginBottom: s.marginBottom,
    marginLeft: s.marginLeft,

    paddingTop: s.paddingTop,
    paddingRight: s.paddingRight,
    paddingBottom: s.paddingBottom,
    paddingLeft: s.paddingLeft,

    gap: s.gap,
    rowGap: s.rowGap,
    columnGap: s.columnGap,

    position: s.position,
    top: s.top,
    right: s.right,
    bottom: s.bottom,
    left: s.left,
    zIndex: s.zIndex,

    flexDirection: s.flexDirection,
    flexWrap: s.flexWrap,
    justifyContent: s.justifyContent,
    alignItems: s.alignItems,
    alignContent: s.alignContent,
    flexGrow: s.flexGrow,
    flexShrink: s.flexShrink,
    flexBasis: s.flexBasis,
    order: s.order,

    gridTemplateColumns: s.gridTemplateColumns,
    gridTemplateRows: s.gridTemplateRows,
    gridColumn: s.gridColumn,
    gridRow: s.gridRow,
    placeItems: s.placeItems,

    fontFamily: s.fontFamily,
    fontSize: s.fontSize,
    fontWeight: s.fontWeight,
    fontStyle: s.fontStyle,
    lineHeight: s.lineHeight,
    letterSpacing: s.letterSpacing,
    textAlign: s.textAlign,
    textTransform: s.textTransform,
    textDecoration: s.textDecoration,
    whiteSpace: s.whiteSpace,
    wordBreak: s.wordBreak,
    color: s.color,

    backgroundColor: s.backgroundColor,
    backgroundImage: s.backgroundImage,
    backgroundSize: s.backgroundSize,
    backgroundPosition: s.backgroundPosition,
    backgroundRepeat: s.backgroundRepeat,
    backgroundClip: s.backgroundClip,

    borderTop: s.borderTop,
    borderRight: s.borderRight,
    borderBottom: s.borderBottom,
    borderLeft: s.borderLeft,
    borderRadius: s.borderRadius,
    outline: s.outline,
    boxShadow: s.boxShadow,

    filter: s.filter,
    backdropFilter: s.backdropFilter,
    transform: s.transform,
    transition: s.transition,
    animation: s.animation
  };
}

function extractPseudoStyles(el, pseudo) {
  const s = window.getComputedStyle(el, pseudo);
  if (!s) return null;

  return {
    content: s.content,
    display: s.display,
    width: s.width,
    height: s.height,
    color: s.color,
    backgroundColor: s.backgroundColor,
    fontSize: s.fontSize,
    position: s.position,
    top: s.top,
    right: s.right,
    bottom: s.bottom,
    left: s.left,
    borderRadius: s.borderRadius,
    boxShadow: s.boxShadow
  };
}

function extractElement(el) {
  const rect = el.getBoundingClientRect();
  const style = window.getComputedStyle(el);

  return {
    tag: el.tagName.toLowerCase(),
    id: el.id || null,
    classes: [...el.classList],
    role: el.getAttribute("role"),
    selector: getSelectorHint(el),
    domPath: getDomPath(el),
    text: getTextSnippet(el),
    visible: isVisible(el, style, rect),
    bounds: {
      x: rect.x,
      y: rect.y,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.width,
      height: rect.height
    },
    styles: extractComputedStyles(el),
    pseudo: {
      before: extractPseudoStyles(el, "::before"),
      after: extractPseudoStyles(el, "::after")
    }
  };
}

function getSections(root = document) {
  const semantic = [...root.querySelectorAll("header, nav, main, section, aside, footer")];

  const largeDivs = [...root.querySelectorAll("div")].filter((el) => {
    const rect = el.getBoundingClientRect();
    const s = window.getComputedStyle(el);
    return (
      s.display !== "none" &&
      s.visibility !== "hidden" &&
      rect.width > 320 &&
      rect.height > 120
    );
  });

  const seen = new Set();
  const results = [];

  [...semantic, ...largeDivs].forEach((el) => {
    if (!seen.has(el)) {
      seen.add(el);
      results.push(el);
    }
  });

  return results;
}

function getMeaningfulDescendants(section) {
  const blacklist = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "META", "LINK"]);

  return [...section.querySelectorAll("*")].filter((el) => {
    if (blacklist.has(el.tagName)) return false;

    const rect = el.getBoundingClientRect();
    const s = window.getComputedStyle(el);

    if (s.display === "none" || s.visibility === "hidden") return false;
    if (rect.width === 0 || rect.height === 0) return false;

    const importantTags = new Set([
      "H1", "H2", "H3", "H4", "H5", "H6",
      "P", "SPAN", "A", "BUTTON", "IMG",
      "UL", "OL", "LI", "ARTICLE", "INPUT",
      "TEXTAREA", "SELECT", "LABEL"
    ]);

    return importantTags.has(el.tagName) || el.children.length === 0;
  });
}

function runStyleAudit(targetSelector = null) {
  const root = targetSelector ? document.querySelector(targetSelector) : document;
  if (!root) {
    return {
      error: `Target selector not found: ${targetSelector}`
    };
  }

  const sections = getSections(root).map((section, index) => {
    const rect = section.getBoundingClientRect();
    const children = getMeaningfulDescendants(section).map(extractElement);

    return {
      sectionId: `section-${index + 1}`,
      tag: section.tagName.toLowerCase(),
      selector: getSelectorHint(section),
      domPath: getDomPath(section),
      label: getTextSnippet(section) || getSelectorHint(section),
      bounds: {
        x: rect.x,
        y: rect.y,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.width,
        height: rect.height
      },
      styles: extractComputedStyles(section),
      elements: children
    };
  });

  return {
    page: {
      url: window.location.href,
      title: document.title,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    },
    sections
  };
}