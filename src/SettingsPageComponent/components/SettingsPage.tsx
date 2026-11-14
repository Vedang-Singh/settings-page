import { useEffect, useState } from "react";
import "../styles/SettingsPage.css";
import "../styles/LargeScreens.css";
import { containerVariants, itemVariants } from "../styles/animations";
import { motion, type Variants } from "motion/react";
import SettingsPageItem from "./SettingsPageItem";
import SettingsProfileCard from "./SettingsProfileCard";
import SettingsSearchBar from "./SettingsSearchBar";
import { PROFILE_ID, type SettingsPageItemType, type SettingsPageOptions, type SettingsPageProfileCardType, type SettingsPageSearchBarType } from "../types/SettingsPageTypes";
import { BackArrowIcon } from "../styles/icons";

type SettingsPageProps = {
  items: SettingsPageItemType[];
  profileCard: SettingsPageProfileCardType;
  searchBar?: SettingsPageSearchBarType;
  options?: SettingsPageOptions
};

export default function SettingsPage({ items, profileCard, searchBar, options }: SettingsPageProps)
{
  // add the profile card as item, cannot change items therefore create new allItems
  const allItems = items.some(i => i.id === PROFILE_ID)
    ? items // already contains profile_id
    : [
      ...items,
      {
        id: PROFILE_ID,
        title: "Profile",
        description: "Manage your profile information",
        icon: <></>,
        content: profileCard.content,
      },
    ];


  // search
  const [searchQuery, setSearchQuery] = useState("");

  const settingsItems = searchQuery.trim()
    ? allItems.filter(i =>
      i.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : allItems;


  // responsiveness
  const min_width = "800px";

  const [isDesktop, setIsDesktop] = useState(() =>
    window.matchMedia(`(min-width: ${min_width})`).matches
  );

  useEffect(() =>
  {
    const mediaQuery = window.matchMedia(`(min-width: ${min_width})`);
    const handleChange = (event: MediaQueryListEvent) => setIsDesktop(event.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [min_width]);


  // main
  const [selectedPageId, setSelectedPageId] = useState<string | null>(null);
  const selectedPage = settingsItems.find((page) => page.id === selectedPageId) ?? null;

  return (
    <div className="settings-page">

      <nav className="settings-nav" data-is-item-selected={!!selectedPage}>
        <h1 className="settings-h1">Settings</h1>

        {/* Search Bar */}
        {!options?.hideSearchBar && <div>
          <SettingsSearchBar placeholder={searchBar?.placeholder} onChange={setSearchQuery} />
        </div>}

        {/* Profile Card */}
        <div
          onClick={() => setSelectedPageId(PROFILE_ID)} className="clickable setting-pf-ctnr">
          {options?.hideProfileCard ?
            <>&nbsp;</> :
            <SettingsProfileCard icon={profileCard.icon} email={profileCard.email} name={profileCard.name} />}
        </div>

        {/* Other items */}
        <motion.div
          className="settings-page-items"
          variants={containerVariants}
          initial="hidden"

          // this is needed as the animations will not work on mobile
          // i.e. the animation will only work once in mobile devices
          // this is ok for desktop devices but for mobile, animations shall
          // trigger everytime when comming back from subpage
          animate={isDesktop || !selectedPage ? "show" : "hidden"}>

          {settingsItems.filter(item => item.id !== PROFILE_ID).map(item =>
          (
            <motion.div
              key={item.id}
              variants={itemVariants as unknown as Variants}
              onClick={() => setSelectedPageId(item.id)} >
              {
                <SettingsPageItem options={item} active={selectedPageId==item.id} />
              }
            </motion.div>
          ))}

        </motion.div>
      </nav>

      <motion.section

        // the key below is used to reset animation as now react will re mount on key change
        // this will cause the motion's initial animation to run 
        // even when returning from any sub page
        // key={selectedPageId ?? "settings-list"}
        key={selectedPageId ?? "settings-list"}

        className="settings-page-subpage"
        variants={containerVariants}
        initial="hidden"
        animate="show">

        {selectedPage ? (
          <motion.div variants={itemVariants as unknown as Variants}>
            <div
              className="settings-page-subpage-back clickable"
              onClick={() => setSelectedPageId(null)}>
              <BackArrowIcon />
              <span>Back</span>
            </div>
            <h1 className="settings-h1">{selectedPage.title}</h1>
            <div>{selectedPage.content}</div>
          </motion.div>
        ) :
          isDesktop && (
            <h1 className="settings-h1">Select a Category From the Left</h1>
          )}
      </motion.section>

    </div>
  );
}