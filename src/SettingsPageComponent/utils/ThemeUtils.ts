import { CURRENT_THEME_ID, DEFAULT_THEME_ID, PreloadedThemes } from "../types/ThemesConst";
import type { ThemeType } from "../types/ThemesTypes";

export const root = document.documentElement.style;

export function setCssProperties(theme: ThemeType)
{
    Object.entries(theme.colors).forEach(([key, value]) =>
    {
        root.setProperty(key, value);
    });

    root.setProperty(CURRENT_THEME_ID, theme.id);
}

export function getAllThemeTypes(themes: ThemeType[])
{
    return [...new Set(themes.map(t => t.type))]
}

export function applyTheme(themeId: string, customThemes: ThemeType[] = [])
{
    const allThemes = [...PreloadedThemes, ...customThemes];
    const theme = allThemes.find(t => t.id === themeId);
    if (theme)
    {
        setCssProperties(theme);
        return theme;
    }
    return undefined;
}

// '??' treats empty string as true, therefore use '||'
export const thisOrDefaultThemeId = (themeId: string | null | undefined) => themeId || DEFAULT_THEME_ID;