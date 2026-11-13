import { type ThemeType } from "./ThemesTypes";

export const shadowColor = {
    forLightTheme: "rgba(0, 0, 0, 0.1)",
    forDarkTheme: "rgb(173 173 173 / 15%)"
}

export const CURRENT_THEME_ID = "--current-theme-id";
export const DEFAULT_THEME_ID = "default-light";

// Preloaded Themes
export const PreloadedThemes = [
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
            "--c-shadow": shadowColor.forLightTheme,
        },
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
            "--c-shadow": shadowColor.forLightTheme,
        },
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
            "--c-shadow": shadowColor.forLightTheme,

        },
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
            "--c-shadow": shadowColor.forDarkTheme,
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
            "--c-shadow": shadowColor.forDarkTheme,
        },
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
            "--c-shadow": shadowColor.forDarkTheme,
        },
    },
] as const satisfies readonly ThemeType[]; // necessary or else 'excludePreloadedThemes' will not show ids as TS hints