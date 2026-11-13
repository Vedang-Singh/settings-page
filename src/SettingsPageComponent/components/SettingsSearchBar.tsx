import { SearchIcon } from "../styles/icons";

type SettingsSearchBarProps = {
    placeholder?: string;
    onChange?: (value: string) => void;
};

export default function SettingsSearchBar({ placeholder = "Search...", onChange }: SettingsSearchBarProps)
{
    return (
        <div className="settings-search-bar">
            <SearchIcon />
            <input
                onChange={onChange ? (e) => onChange(e.target.value) : undefined}
                type="search" placeholder={placeholder}
                className="settings-search" />
        </div>
    )
}