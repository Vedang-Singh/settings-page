type ThemeColors = {
  "--c1": string;
  "--c2": string;
  "--c3": string;
  "--c4": string;
  "--ca": string;
  "--c1-text": string;
  "--c-shadow": string;
};

export type ThemeType = {
  id: string;
  name: string;
  type: "light" | "dark";
  colors: ThemeColors;
};
