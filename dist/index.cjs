var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/SettingsPageComponent/index.ts
var index_exports = {};
__export(index_exports, {
  CURRENT_THEME_ID: () => CURRENT_THEME_ID,
  DEFAULT_THEME_ID: () => DEFAULT_THEME_ID,
  PreloadedThemes: () => PreloadedThemes,
  SettingsPage: () => SettingsPage,
  SettingsProfileCard: () => SettingsProfileCard,
  SettingsSearchBar: () => SettingsSearchBar,
  SettingsThemesPage: () => SettingsThemesPage,
  applyTheme: () => applyTheme,
  setCssProperties: () => setCssProperties,
  thisOrDefaultThemeId: () => thisOrDefaultThemeId
});
module.exports = __toCommonJS(index_exports);

// src/SettingsPageComponent/components/SettingsPage.tsx
var import_react = require("react");

// #style-inject:#style-inject
function styleInject(css, { insertAt } = {}) {
  if (!css || typeof document === "undefined") return;
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// src/SettingsPageComponent/styles/SettingsPage.css
styleInject(":root {\n  --c1: #071b2b;\n  --c2: #dbe3e9;\n  --c3: #b9e4e8;\n  --c4: #eeeeee;\n  --ca: #fff;\n  --c1-text: #071b2b;\n  --c-shadow: rgba(0, 0, 0, 0.1);\n}\nbody {\n  background: var(--c4);\n  color: var(--c1-text);\n}\n@media (prefers-color-scheme: dark) {\n}\n.settings-h1 {\n  font-weight: normal;\n  font-size: 3rem;\n  margin: 30px 0 20px 0;\n}\n.settings-page,\n.settings-page * {\n  transition: all 0.1s ease-in-out;\n  -webkit-tap-highlight-color: transparent;\n}\n.settings-page {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  gap: 1rem;\n  height: 100vh;\n  overflow: hidden;\n}\n.settings-page-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  box-shadow: 0px 2px var(--c-shadow);\n  border: 1px solid var(--c3);\n  background: var(--ca);\n  border-radius: 8px;\n  padding: 22px 12px;\n  max-width: 450px;\n}\n.settings-page-items {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  height: 60%;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.settings-page-item-text {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\nspan.settings-page-item-text-t {\n  font-size: 1.3rem;\n}\nspan.settings-page-item-text-d {\n  opacity: 0.8;\n  font-size: 0.9rem;\n}\nspan.settings-page-item-icon {\n  background: var(--c3);\n  color: var(--c1);\n  border-radius: 150px;\n  height: 60px;\n  width: 60px;\n  min-width: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.settings-profile-card {\n  display: flex;\n  background: var(--c1);\n  color: var(--c4);\n  padding: 24px 18px;\n  border-radius: 20px;\n  box-shadow: 1px 2px 3px 3px var(--c-shadow);\n  gap: 1rem;\n  margin: 16px 0;\n  max-width: 450px;\n}\n.settings-profile-card-text {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.4rem;\n}\n.settings-profile-card-icon {\n  height: 60px;\n  width: 60px;\n  background: var(--c3);\n  color: var(--c1);\n  border-radius: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nspan.settings-profile-card-text-2 {\n  opacity: 0.8;\n}\n.settings-search-bar {\n  display: flex;\n  padding: 12px;\n  gap: 0.7rem;\n  background: var(--ca);\n  border-radius: 150px;\n  border: 1px solid var(--c3);\n  box-shadow: 0px 2px 0px var(--c-shadow);\n  padding-left: 20px;\n  max-width: 450px;\n}\n.settings-search-bar input {\n  width: 100%;\n  color: var(--c1-text);\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 1rem;\n}\n.settings-page-subpage-back {\n  display: flex;\n  gap: 0.4rem;\n  align-items: center;\n  justify-content: flex-start;\n}\n.settings-themes {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.settings-themes-group h2 {\n  margin: 0 0 0.75rem;\n  font-size: 1.1rem;\n}\n.settings-themes-list {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.settings-theme {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 0.8rem;\n  border: 1px solid var(--c3);\n  border-radius: 8px;\n  background: var(--ca);\n  text-align: center;\n  width: 100px;\n  height: 80px;\n  min-width: 110px;\n}\n.settings-theme[data-selected=true] {\n  outline: 2px solid var(--c1);\n  outline-offset: 2px;\n}\n.settings-theme-palette {\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  border: 1px solid var(--c3);\n  border-radius: 6px;\n  height: 100%;\n}\n.settings-theme-color {\n  width: 100%;\n  display: block;\n}\n.settings-h2 {\n  font-weight: normal;\n}\n.clickable {\n  cursor: pointer;\n  transition: 0.1s;\n}\n.clickable:hover {\n  scale: 1.008;\n}\n.clickable:active {\n  scale: 0.98;\n}\n.settings-nav {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  gap: 0.8rem;\n  align-items: center;\n}\n.settings-nav[data-is-item-selected=true] {\n  display: none;\n}\nsection.settings-page-subpage {\n  margin-top: 30px;\n}\n.settings-nav > * {\n  width: 100%;\n  max-width: 450px;\n}\n");

// src/SettingsPageComponent/styles/LargeScreens.css
styleInject("@media (min-width: 800px) {\n  .settings-nav {\n    padding: 10px 20px;\n    background: var(--c2);\n    gap: 0rem;\n    margin: 0px;\n  }\n  .settings-nav[data-is-item-selected=true] {\n    display: flex;\n  }\n  .settings-page {\n    gap: 2rem;\n    padding: 0;\n    display: grid;\n    justify-content: start;\n    grid-auto-flow: column;\n  }\n  .settings-page-item-text-d {\n    display: none;\n  }\n  .settings-page-items {\n    gap: 0;\n    margin-top: 30px;\n  }\n  .settings-page-item {\n    padding: 10px;\n    gap: 0;\n    box-shadow: none;\n    background: transparent;\n    border: none;\n  }\n  .settings-page-item:hover {\n    background: var(--ca);\n  }\n  span.settings-page-item-text-t {\n    font-size: 1.1rem;\n  }\n  span.settings-page-item-icon {\n    background: transparent;\n  }\n  .setting-pf-ctnr {\n    position: absolute;\n    bottom: 30px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 92%;\n  }\n  .settings-h1 {\n    text-align: center;\n    font-size: 2rem;\n    margin-top: 50px;\n    margin-bottom: 30px;\n  }\n  .settings-search-bar {\n    box-shadow: none;\n    border-radius: 10px;\n  }\n  .settings-page-subpage {\n    width: 100%;\n    padding-top: 40px;\n  }\n  .settings-page-subpage .settings-h1 {\n    text-align: left !important;\n    font-size: 2.5rem;\n  }\n  .settings-profile-card {\n    box-shadow: none;\n    border-radius: 10px;\n  }\n}\n");

// src/SettingsPageComponent/styles/animations.ts
var import_motion = require("motion");
var containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: (0, import_motion.stagger)(0.08)
    }
  }
};
var itemVariants = {
  hidden: {
    opacity: 0,
    y: 18
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// src/SettingsPageComponent/components/SettingsPage.tsx
var import_react2 = require("motion/react");

// src/SettingsPageComponent/components/SettingsPageItem.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function SettingsPageItem({
  options: { id, title, description, icon }
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { id, className: "settings-page-item clickable", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "settings-page-item-icon", children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "settings-page-item-text", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "settings-page-item-text-t", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "settings-page-item-text-d", children: description })
    ] })
  ] });
}

// src/SettingsPageComponent/components/SettingsProfileCard.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function SettingsProfileCard({ name, email, icon }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "settings-profile-card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "settings-profile-card-icon", children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "settings-profile-card-text", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "settings-profile-card-text-1", children: name }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "settings-profile-card-text-2", children: email })
    ] })
  ] });
}

// src/SettingsPageComponent/styles/icons.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var BackArrowIcon = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m12 19-7-7 7-7" }),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M19 12H5" })
] });
var SearchIcon = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m21 21-4.3-4.3" })
] });

// src/SettingsPageComponent/components/SettingsSearchBar.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function SettingsSearchBar({ placeholder = "Search...", onChange }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "settings-search-bar", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SearchIcon, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "input",
      {
        onChange: onChange ? (e) => onChange(e.target.value) : void 0,
        type: "search",
        placeholder,
        className: "settings-search"
      }
    )
  ] });
}

// src/SettingsPageComponent/types/SettingsPageTypes.ts
var PROFILE_ID = "__profile_01";

// src/SettingsPageComponent/components/SettingsPage.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function SettingsPage({ items, profileCard, searchBar, options }) {
  const allItems = items.some((i) => i.id === PROFILE_ID) ? items : [
    ...items,
    {
      id: PROFILE_ID,
      title: "Profile",
      description: "Manage your profile information",
      icon: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, {}),
      content: profileCard.content
    }
  ];
  const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
  const settingsItems = searchQuery.trim() ? allItems.filter(
    (i) => i.title.toLowerCase().includes(searchQuery.toLowerCase()) || i.description.toLowerCase().includes(searchQuery.toLowerCase())
  ) : allItems;
  const min_width = "800px";
  const [isDesktop, setIsDesktop] = (0, import_react.useState)(
    () => window.matchMedia(`(min-width: ${min_width})`).matches
  );
  (0, import_react.useEffect)(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${min_width})`);
    const handleChange = (event) => setIsDesktop(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [min_width]);
  const [selectedPageId, setSelectedPageId] = (0, import_react.useState)(null);
  const selectedPage = settingsItems.find((page) => page.id === selectedPageId) ?? null;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "settings-page", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("nav", { className: "settings-nav", "data-is-item-selected": !!selectedPage, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { className: "settings-h1", children: "Settings" }),
      !options?.hideSearchBar && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SettingsSearchBar, { placeholder: searchBar?.placeholder, onChange: setSearchQuery }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "div",
        {
          onClick: () => setSelectedPageId(PROFILE_ID),
          className: "clickable setting-pf-ctnr",
          children: options?.hideProfileCard ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: "\xA0" }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SettingsProfileCard, { icon: profileCard.icon, email: profileCard.email, name: profileCard.name })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        import_react2.motion.div,
        {
          className: "settings-page-items",
          variants: containerVariants,
          initial: "hidden",
          animate: isDesktop || !selectedPage ? "show" : "hidden",
          children: settingsItems.filter((item) => item.id !== PROFILE_ID).map((item) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_react2.motion.div,
            {
              variants: itemVariants,
              onClick: () => setSelectedPageId(item.id),
              children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SettingsPageItem, { options: item })
            },
            item.id
          ))
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      import_react2.motion.section,
      {
        className: "settings-page-subpage",
        variants: containerVariants,
        initial: "hidden",
        animate: "show",
        children: selectedPage ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react2.motion.div, { variants: itemVariants, children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
            "div",
            {
              className: "settings-page-subpage-back clickable",
              onClick: () => setSelectedPageId(null),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(BackArrowIcon, {}),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "Back" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { className: "settings-h1", children: selectedPage.title }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: selectedPage.content })
        ] }) : isDesktop && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { className: "settings-h1", children: "Select a Category From the Left" })
      },
      selectedPageId ?? "settings-list"
    )
  ] });
}

// src/SettingsPageComponent/components/SettingsThemesPage.tsx
var import_react3 = require("react");

// src/SettingsPageComponent/types/ThemesConst.ts
var shadowColor = {
  forLightTheme: "rgba(0, 0, 0, 0.1)",
  forDarkTheme: "rgb(173 173 173 / 15%)"
};
var CURRENT_THEME_ID = "--current-theme-id";
var DEFAULT_THEME_ID = "default-light";
var PreloadedThemes = [
  {
    id: DEFAULT_THEME_ID,
    name: "Default",
    type: "light",
    colors: {
      "--c1": "#071B2B",
      "--c2": "#dbe3e9",
      "--c3": "#B9E4E8",
      "--c4": "#EEEEEE",
      "--ca": "#fff",
      "--c1-text": "#071B2B",
      "--c-shadow": shadowColor.forLightTheme
    }
  },
  {
    id: "pink-light",
    name: "Pink",
    type: "light",
    colors: {
      "--c1": "#4E1049",
      "--c2": "#fad6fd",
      "--c3": "#FFAADF",
      "--c4": "#FFE8FA",
      "--ca": "#fff",
      "--c1-text": "#4E1049",
      "--c-shadow": shadowColor.forLightTheme
    }
  },
  {
    id: "blue-light",
    name: "Blue",
    type: "light",
    colors: {
      "--c1": "#452d7e",
      "--c2": "#e9e9ff",
      "--c3": "#ceb5ea",
      "--c4": "#f2f8ff",
      "--ca": "#ffffff",
      "--c1-text": "#1d0f3e",
      "--c-shadow": shadowColor.forLightTheme
    }
  },
  {
    id: "dark-black",
    name: "Dark Black",
    type: "dark",
    colors: {
      "--c1": "#c8c8c8",
      "--c2": "#000000",
      "--c3": "#505050",
      "--c4": "#1b1b1b",
      "--ca": "#2c2c2c",
      "--c1-text": "#ebebeb",
      "--c-shadow": shadowColor.forDarkTheme
    }
  },
  {
    id: "cyan-dark",
    name: "Dark Cyan",
    type: "dark",
    colors: {
      "--c1": "#8cc7b8",
      "--c2": "#051416",
      "--c3": "#213233",
      "--c4": "#191e28",
      "--ca": "#36415A",
      "--c1-text": "#ddd",
      "--c-shadow": shadowColor.forDarkTheme
    }
  },
  {
    id: "red-dark",
    name: "Dark Red",
    type: "dark",
    colors: {
      "--c1": "#ff8383",
      "--c2": "#000",
      "--c3": "#5e2424",
      "--c4": "#1b1212",
      "--ca": "#301f1f",
      "--c1-text": "#ddd",
      "--c-shadow": shadowColor.forDarkTheme
    }
  }
];

// src/SettingsPageComponent/utils/ThemeUtils.ts
var root = document.documentElement.style;
function setCssProperties(theme) {
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.setProperty(key, value);
  });
  root.setProperty(CURRENT_THEME_ID, theme.id);
}
function getAllThemeTypes(themes) {
  return [...new Set(themes.map((t) => t.type))];
}
function applyTheme(themeId, customThemes = []) {
  const allThemes = [...PreloadedThemes, ...customThemes];
  const theme = allThemes.find((t) => t.id === themeId);
  if (theme) {
    setCssProperties(theme);
    return theme;
  }
  return void 0;
}
var thisOrDefaultThemeId = (themeId) => themeId || DEFAULT_THEME_ID;

// src/SettingsPageComponent/components/SettingsThemesPage.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function SettingsThemesPage({ excludePreloadedThemes = [], hideAllPreloadedThemes, themes = [], onThemeChange, activeThemeId }) {
  const themesData = hideAllPreloadedThemes ? [...PreloadedThemes.filter((t) => t.id == DEFAULT_THEME_ID), ...themes] : (
    // hide all themes other than default one
    [...PreloadedThemes, ...themes]
  );
  const [selectedTheme, setSelectedTheme] = (0, import_react3.useState)(
    () => thisOrDefaultThemeId(root.getPropertyValue(CURRENT_THEME_ID))
  );
  const currentSelectedId = activeThemeId ?? selectedTheme;
  function handleThemeApplyClick(theme) {
    setCssProperties(theme);
    setSelectedTheme(theme.id);
    if (onThemeChange) onThemeChange(theme);
  }
  if (themesData.length <= 0)
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "settings-themes", children: "No Themes Available" });
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "settings-themes", children: getAllThemeTypes(themesData).map((type) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "settings-themes-group", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { className: "settings-h2", children: type === "light" ? "Light themes" : "Dark themes" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "settings-themes-list", children: themesData.filter((theme) => theme.type === type).filter((theme) => !excludePreloadedThemes.includes(theme.id)).map((theme) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "div",
      {
        "data-selected": currentSelectedId === theme.id,
        className: "settings-theme clickable",
        onClick: () => handleThemeApplyClick(theme),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "settings-theme-palette", children: Object.values(theme.colors).map((color, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "span",
            {
              className: "settings-theme-color",
              style: { backgroundColor: color }
            },
            i
          )) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "settings-theme-name", children: theme.name })
        ]
      },
      theme.id
    )) })
  ] }, type)) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CURRENT_THEME_ID,
  DEFAULT_THEME_ID,
  PreloadedThemes,
  SettingsPage,
  SettingsProfileCard,
  SettingsSearchBar,
  SettingsThemesPage,
  applyTheme,
  setCssProperties,
  thisOrDefaultThemeId
});
