import type { SettingsPageItemType } from "../types/SettingsPageTypes";

type SettingsPageItemProps = {
    options: SettingsPageItemType;
};

export default function SettingsPageItem({
    options: { id, title, description, icon }
}: SettingsPageItemProps)
{
    return (
        <div id={id} className="settings-page-item clickable">
            <span className="settings-page-item-icon">
                {icon}
            </span>
            <span className="settings-page-item-text">
                <span className="settings-page-item-text-t">{title}</span>
                <span className="settings-page-item-text-d">{description}</span>
            </span>
        </div>
    );
}