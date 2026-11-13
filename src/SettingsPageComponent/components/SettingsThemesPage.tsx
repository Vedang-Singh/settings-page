import { useState } from "react";
import { type ThemeType } from "../types/ThemesTypes";
import { CURRENT_THEME_ID, DEFAULT_THEME_ID, PreloadedThemes, } from "../types/ThemesConst";
import { root, setCssProperties, getAllThemeTypes, thisOrDefaultThemeId } from "../utils/ThemeUtils";

type PreloadedThemesIds = (typeof PreloadedThemes)[number]["id"];

type SettingsThemesPageProps = {

    // can only contain array of 'PreloadedThemes.id' or []
    excludePreloadedThemes?: PreloadedThemesIds[],

    themes?: ThemeType[],
    hideAllPreloadedThemes?: boolean,
    onThemeChange?: (newTheme: ThemeType) => void;

    // optionally can supply own active state
    activeThemeId?: string;
}

export default function SettingsThemesPage(
    { excludePreloadedThemes = [], hideAllPreloadedThemes, themes = [], onThemeChange, activeThemeId }: SettingsThemesPageProps)
{
    const themesData = hideAllPreloadedThemes ?
        [...PreloadedThemes.filter(t => t.id == DEFAULT_THEME_ID), ...themes] : // hide all themes other than default one
        [...PreloadedThemes, ...themes];

    // lazy init to prevent running in every re renders
    const [selectedTheme, setSelectedTheme] = useState(() =>
        thisOrDefaultThemeId(root.getPropertyValue(CURRENT_THEME_ID))
    );

    // why using both activeThemeId (extrernal state) and selectedTheme (internal state)
    // the theming will work even if activeThemeId is not supplied (i.e. will use internal state)
    // activeThemeId is useful only when the theme changes outside this Component
    // e.g. when firebase multi-device sync is used or via dark theme button on nav bar
    const currentSelectedId = activeThemeId ?? selectedTheme;

    function handleThemeApplyClick(theme: ThemeType)
    {
        setCssProperties(theme);
        setSelectedTheme(theme.id);
        if (onThemeChange) onThemeChange(theme);
    }

    if (themesData.length <= 0)
        return <div className="settings-themes">No Themes Available</div>;

    return (
        <div className="settings-themes">
            {getAllThemeTypes(themesData).map((type) => (

                <section className="settings-themes-group" key={type}>

                    <h2 className="settings-h2">{type === "light" ? "Light themes" : "Dark themes"}</h2>

                    <div className="settings-themes-list">

                        {themesData
                            .filter(theme => theme.type === type)
                            .filter(theme => !excludePreloadedThemes.includes(theme.id as PreloadedThemesIds))
                            .map((theme) => (
                                <div
                                    data-selected={currentSelectedId === theme.id}
                                    className="settings-theme clickable"
                                    key={theme.id}
                                    onClick={() => handleThemeApplyClick(theme)}>

                                    <span className="settings-theme-palette">

                                        {Object.values(theme.colors).map((color, i) => (
                                            <span
                                                className="settings-theme-color"
                                                key={i}
                                                style={{ backgroundColor: color }}
                                            />
                                        ))}

                                    </span>
                                    <span className="settings-theme-name">{theme.name}</span>
                                </div>
                            ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
