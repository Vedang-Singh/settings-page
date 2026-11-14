import { ProfileIcon } from "../styles/icons";

type SettingsProfileCardProps = {
    name: string;
    email: string;
    icon?: React.ReactNode;
};

export default function SettingsProfileCard({ name, email, icon = <ProfileIcon /> }: SettingsProfileCardProps)
{
    return (
        <div className="settings-profile-card">
            <div className="settings-profile-card-icon">
                {icon}
            </div>
            <div className="settings-profile-card-text">
                <span className="settings-profile-card-text-1">{name}</span>
                <span className="settings-profile-card-text-2">{email}</span>
            </div>
        </div>
    )
}