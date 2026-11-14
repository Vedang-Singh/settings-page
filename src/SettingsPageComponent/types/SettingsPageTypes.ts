export type SettingsPageItemType = {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
};

export type SettingsPageProfileCardType = {
  email: string;
  name: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
};

export type SettingsPageSearchBarType = {
  placeholder: string;
}

export type SettingsPageOptions = {
  hideProfileCard?: boolean,
  hideSearchBar?: boolean,
}

export const PROFILE_ID = "__profile_01";
// export const SEARCH_ID = "__search_01";