import { RiBrushLine, RiDatabase2Line, RiShieldLine, RiUserLine } from "@remixicon/react";
import { applyTheme, thisOrDefaultThemeId, SettingsThemesPage, SettingsPage } from "./SettingsPageComponent";

applyTheme(thisOrDefaultThemeId(localStorage.getItem("app_theme")));

export default function App()
{
  const items = [
    {
      id: "theme",
      title: "Appearance & Theme",
      description: "Select light or dark theme.",
      icon: <RiBrushLine />,
      content: <SettingsThemesPage onThemeChange={t => localStorage.setItem("app_theme", t.id)} />
    },
    {
      id: "account",
      title: "Account & Security",
      description: "Change password, two factor authentication",
      icon: <RiShieldLine />,
      content: <p>Account & Security settings goes here...</p>,
    },
    {
      id: "data",
      title: "Data & Storage",
      description: "Export data, import data, clear cache, storage usage",
      icon: <RiDatabase2Line />,
      content: <p>Data & Storage settings goes here...</p>,
    },
  ]

  const profileCard = {
    email: "user@example.com",
    name: "Vedang Singh",
    icon: <RiUserLine />,
    content: <p>Profile related settings goes here...</p>,
  }

  return (
    <SettingsPage items={items} profileCard={profileCard} />
  )
}