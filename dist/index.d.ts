import * as react from 'react';

type SettingsPageItemType = {
    id: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
    content: React.ReactNode;
};
type SettingsPageProfileCardType = {
    email: string;
    name: string;
    icon?: React.ReactNode;
    content: React.ReactNode;
};
type SettingsPageSearchBarType = {
    placeholder: string;
};
type SettingsPageOptions = {
    hideProfileCard?: boolean;
    hideSearchBar?: boolean;
};
declare const PROFILE_ID = "__profile_01";

type SettingsPageProps = {
    items: SettingsPageItemType[];
    profileCard: SettingsPageProfileCardType;
    searchBar?: SettingsPageSearchBarType;
    options?: SettingsPageOptions;
};
declare function SettingsPage({ items, profileCard, searchBar, options }: SettingsPageProps): react.JSX.Element;

type ThemeColors = {
    "--c1": string;
    "--c2": string;
    "--c3": string;
    "--c4": string;
    "--ca": string;
    "--c1-text": string;
    "--c-shadow": string;
};
type ThemeType = {
    id: string;
    name: string;
    type: "light" | "dark";
    colors: ThemeColors;
};

declare const CURRENT_THEME_ID = "--current-theme-id";
declare const DEFAULT_THEME_ID = "default-light";
declare const PreloadedThemes: readonly [{
    readonly id: "default-light";
    readonly name: "Default";
    readonly type: "light";
    readonly colors: {
        readonly "--c1": "#071B2B";
        readonly "--c2": "#dbe3e9";
        readonly "--c3": "#B9E4E8";
        readonly "--c4": "#EEEEEE";
        readonly "--ca": "#fff";
        readonly "--c1-text": "#071B2B";
        readonly "--c-shadow": string;
    };
}, {
    readonly id: "pink-light";
    readonly name: "Pink";
    readonly type: "light";
    readonly colors: {
        readonly "--c1": "#4E1049";
        readonly "--c2": "#fad6fd";
        readonly "--c3": "#FFAADF";
        readonly "--c4": "#FFE8FA";
        readonly "--ca": "#fff";
        readonly "--c1-text": "#4E1049";
        readonly "--c-shadow": string;
    };
}, {
    readonly id: "blue-light";
    readonly name: "Blue";
    readonly type: "light";
    readonly colors: {
        readonly "--c1": "#452d7e";
        readonly "--c2": "#e9e9ff";
        readonly "--c3": "#ceb5ea";
        readonly "--c4": "#f2f8ff";
        readonly "--ca": "#ffffff";
        readonly "--c1-text": "#1d0f3e";
        readonly "--c-shadow": string;
    };
}, {
    readonly id: "dark-black";
    readonly name: "Dark Black";
    readonly type: "dark";
    readonly colors: {
        readonly "--c1": "#c8c8c8";
        readonly "--c2": "#000000";
        readonly "--c3": "#505050";
        readonly "--c4": "#1b1b1b";
        readonly "--ca": "#2c2c2c";
        readonly "--c1-text": "#ebebeb";
        readonly "--c-shadow": string;
    };
}, {
    readonly id: "cyan-dark";
    readonly name: "Dark Cyan";
    readonly type: "dark";
    readonly colors: {
        readonly "--c1": "#8cc7b8";
        readonly "--c2": "#051416";
        readonly "--c3": "#213233";
        readonly "--c4": "#191e28";
        readonly "--ca": "#36415A";
        readonly "--c1-text": "#ddd";
        readonly "--c-shadow": string;
    };
}, {
    readonly id: "red-dark";
    readonly name: "Dark Red";
    readonly type: "dark";
    readonly colors: {
        readonly "--c1": "#ff8383";
        readonly "--c2": "#000";
        readonly "--c3": "#5e2424";
        readonly "--c4": "#1b1212";
        readonly "--ca": "#301f1f";
        readonly "--c1-text": "#ddd";
        readonly "--c-shadow": string;
    };
}];

type PreloadedThemesIds = (typeof PreloadedThemes)[number]["id"];
type SettingsThemesPageProps = {
    excludePreloadedThemes?: PreloadedThemesIds[];
    themes?: ThemeType[];
    hideAllPreloadedThemes?: boolean;
    onThemeChange?: (newTheme: ThemeType) => void;
    activeThemeId?: string;
};
declare function SettingsThemesPage({ excludePreloadedThemes, hideAllPreloadedThemes, themes, onThemeChange, activeThemeId }: SettingsThemesPageProps): react.JSX.Element;

type SettingsProfileCardProps = {
    name: string;
    email: string;
    icon?: React.ReactNode;
};
declare function SettingsProfileCard({ name, email, icon }: SettingsProfileCardProps): react.JSX.Element;

type SettingsSearchBarProps = {
    placeholder?: string;
    onChange?: (value: string) => void;
};
declare function SettingsSearchBar({ placeholder, onChange }: SettingsSearchBarProps): react.JSX.Element;

declare function setCssProperties(theme: ThemeType): void;
declare function applyTheme(themeId: string, customThemes?: ThemeType[]): ThemeType | {
    readonly id: "default-light";
    readonly name: "Default";
    readonly type: "light";
    readonly colors: {
        readonly "--c1": "#071B2B";
        readonly "--c2": "#dbe3e9";
        readonly "--c3": "#B9E4E8";
        readonly "--c4": "#EEEEEE";
        readonly "--ca": "#fff";
        readonly "--c1-text": "#071B2B";
        readonly "--c-shadow": string;
    };
} | {
    readonly id: "pink-light";
    readonly name: "Pink";
    readonly type: "light";
    readonly colors: {
        readonly "--c1": "#4E1049";
        readonly "--c2": "#fad6fd";
        readonly "--c3": "#FFAADF";
        readonly "--c4": "#FFE8FA";
        readonly "--ca": "#fff";
        readonly "--c1-text": "#4E1049";
        readonly "--c-shadow": string;
    };
} | {
    readonly id: "blue-light";
    readonly name: "Blue";
    readonly type: "light";
    readonly colors: {
        readonly "--c1": "#452d7e";
        readonly "--c2": "#e9e9ff";
        readonly "--c3": "#ceb5ea";
        readonly "--c4": "#f2f8ff";
        readonly "--ca": "#ffffff";
        readonly "--c1-text": "#1d0f3e";
        readonly "--c-shadow": string;
    };
} | {
    readonly id: "dark-black";
    readonly name: "Dark Black";
    readonly type: "dark";
    readonly colors: {
        readonly "--c1": "#c8c8c8";
        readonly "--c2": "#000000";
        readonly "--c3": "#505050";
        readonly "--c4": "#1b1b1b";
        readonly "--ca": "#2c2c2c";
        readonly "--c1-text": "#ebebeb";
        readonly "--c-shadow": string;
    };
} | {
    readonly id: "cyan-dark";
    readonly name: "Dark Cyan";
    readonly type: "dark";
    readonly colors: {
        readonly "--c1": "#8cc7b8";
        readonly "--c2": "#051416";
        readonly "--c3": "#213233";
        readonly "--c4": "#191e28";
        readonly "--ca": "#36415A";
        readonly "--c1-text": "#ddd";
        readonly "--c-shadow": string;
    };
} | {
    readonly id: "red-dark";
    readonly name: "Dark Red";
    readonly type: "dark";
    readonly colors: {
        readonly "--c1": "#ff8383";
        readonly "--c2": "#000";
        readonly "--c3": "#5e2424";
        readonly "--c4": "#1b1212";
        readonly "--ca": "#301f1f";
        readonly "--c1-text": "#ddd";
        readonly "--c-shadow": string;
    };
} | undefined;
declare const thisOrDefaultThemeId: (themeId: string | null | undefined) => string;

export { CURRENT_THEME_ID, DEFAULT_THEME_ID, PROFILE_ID, PreloadedThemes, SettingsPage, SettingsProfileCard, SettingsSearchBar, SettingsThemesPage, applyTheme, setCssProperties, thisOrDefaultThemeId };
export type { SettingsPageItemType, SettingsPageOptions, SettingsPageProfileCardType, SettingsPageSearchBarType, ThemeType };
