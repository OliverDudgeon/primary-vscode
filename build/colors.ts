/**
 * Primary Theme Color Palette
 * Extracted from the Primary theme for Obsidian
 * © Cecilia May
 */

export const lightColors = {
  // Grayscale
  gray10: "#faf9f7",
  gray20: "#f6f5f2",
  gray30: "#eeece7",
  gray40: "#e8e6e1",
  gray50: "#e3e1db",
  gray60: "#d6d2ca",
  gray70: "#b6afa6",
  gray80: "#9a9189",
  gray90: "#7f7364",
  gray100: "#66604f",
  gray110: "#5e5848",
  gray120: "#4d4838",
  gray130: "#3a3022",
  gray140: "#2b2117",

  // Red
  red10: "#c86565",
  red20: "#c54646",
  red30: "#ae3b3b",
  red40: "#8c2525",

  // Orange
  orange10: "#d88e5f",
  orange20: "#e47939",
  orange30: "#c8652a",
  orange40: "#9d4511",

  // Yellow
  yellow10: "#e5c654",
  yellow20: "#e8c72f",
  yellow30: "#c7a511",
  yellow40: "#9d7e03",

  // Green
  green10: "#73a77c",
  green20: "#4b9764",
  green30: "#3b8151",
  green40: "#1d6338",

  // Blue
  blue10: "#6a9ab3",
  blue20: "#2f93c0",
  blue30: "#25779a",
  blue40: "#0f5875",

  // Purple
  purple10: "#b7a0ce",
  purple20: "#957bb1",
  purple30: "#715699",
  purple40: "#45367e",

  // Special Colors (for syntax)
  specialRed: "#df5a5a",
  specialOrange: "#e7823f",
  specialYellow: "#f8c52e",
  specialGreen: "#57b984",
  specialCyan: "#7cb4ce",
  specialBlue: "#63a4c6",
  specialPurple: "#876ac1",
  specialPink: "#d9667a",
};

export const darkColors = {
  // Grayscale
  gray10: "#e4d2c1",
  gray20: "#c9af96",
  gray30: "#b9a399",
  gray40: "#968575",
  gray50: "#7a6856",
  gray60: "#544333",
  gray70: "#3f3126",
  gray80: "#312822",
  gray90: "#2b251d",
  gray100: "#27241f",
  gray110: "#25231e",
  gray120: "#24221d",
  gray130: "#1e1c17",
  gray140: "#171410",

  // Red
  red10: "#f6aba9",
  red20: "#f38f8d",
  red30: "#ef7976",
  red40: "#d44941",

  // Orange
  orange10: "#e0a471",
  orange20: "#e1912e",
  orange30: "#d18128",
  orange40: "#b46c1d",

  // Yellow
  yellow10: "#ead080",
  yellow20: "#e7c344",
  yellow30: "#caaa2f",
  yellow40: "#ae9120",

  // Green
  green10: "#57ce76",
  green20: "#37c058",
  green30: "#1eb83a",
  green40: "#17ab31",

  // Blue
  blue10: "#73c2d6",
  blue20: "#59bdd8",
  blue30: "#3ca3bc",
  blue40: "#2c8ca7",

  // Purple
  purple10: "#9f93d3",
  purple20: "#877ac7",
  purple30: "#756fc2",
  purple40: "#6d66bf",

  // Special Colors (for syntax)
  specialRed: "#e45742",
  specialOrange: "#eea359",
  specialYellow: "#f9cf51",
  specialGreen: "#64c271",
  specialCyan: "#5bafb7",
  specialBlue: "#6389bf",
  specialPurple: "#8b71b9",
  specialPink: "#e06c8a",
};

export interface ThemeColors {
  // UI Background
  background: string;
  backgroundAlt: string;
  backgroundSecondary: string;

  // Foreground/Text
  foreground: string;
  foregroundMuted: string;
  foregroundFaint: string;

  // Accents
  accent: string;
  accentHover: string;

  // Borders
  border: string;
  borderHover: string;

  // Interactive
  buttonBackground: string;
  buttonForeground: string;
  buttonHover: string;

  // Status
  error: string;
  warning: string;
  success: string;
  info: string;

  // Syntax
  keyword: string;
  string: string;
  number: string;
  comment: string;
  function: string;
  variable: string;
  type: string;
  constant: string;
  operator: string;
  punctuation: string;

  // Editor
  lineHighlight: string;
  selection: string;
  findMatch: string;
  cursorColor: string;
}

export function getLightThemeColors(): ThemeColors {
  return {
    // UI Background
    background: lightColors.gray20, // Editor background
    backgroundAlt: lightColors.gray30, // Sidebar
    backgroundSecondary: lightColors.gray40, // Status bar, activity bar

    // Foreground/Text
    foreground: lightColors.gray130, // Main text - darker for better contrast
    foregroundMuted: lightColors.gray90, // Muted text - darker for readability
    foregroundFaint: lightColors.gray70, // Faint text - still visible

    // Accents - stronger colors for better visibility
    accent: lightColors.blue20, // Use blue for accents (more visible)
    accentHover: lightColors.blue30, // Darker on hover

    // Borders - more visible
    border: lightColors.gray60,
    borderHover: lightColors.gray80, // Darker on hover

    // Interactive
    buttonBackground: lightColors.gray40,
    buttonForeground: lightColors.gray130,
    buttonHover: lightColors.gray50,

    // Status
    error: lightColors.red30,
    warning: lightColors.orange30,
    success: lightColors.green30,
    info: lightColors.blue30,

    // Syntax - matching Obsidian
    keyword: lightColors.yellow30, // Keywords use yellow
    string: lightColors.yellow30, // Strings use yellow
    number: lightColors.red10, // Numbers use red
    comment: lightColors.gray80, // Comments muted
    function: lightColors.blue30, // Functions use blue
    variable: lightColors.gray130, // Variables default text
    type: lightColors.blue30, // Types use blue
    constant: lightColors.red10, // Constants use red
    operator: lightColors.gray100, // Operators subtle
    punctuation: lightColors.gray100, // Punctuation subtle

    // Editor - Use YELLOW for highlights (matching Obsidian)
    lineHighlight: lightColors.gray10,
    selection: "#d6d2ca50", // Neutral gray selection (gray60)
    findMatch: lightColors.yellow20, // Yellow base for find/word highlight
    cursorColor: lightColors.gray90, // Darker cursor
  };
}

export function getDarkThemeColors(): ThemeColors {
  return {
    // UI Background
    background: darkColors.gray100, // Editor background
    backgroundAlt: darkColors.gray110, // Sidebar
    backgroundSecondary: darkColors.gray120, // Status bar, activity bar

    // Foreground/Text
    foreground: darkColors.gray20, // Main text - bright
    foregroundMuted: darkColors.gray30, // Muted text - brighter for readability
    foregroundFaint: darkColors.gray40, // Faint text - still readable

    // Accents - stronger colors for better visibility
    accent: darkColors.blue20, // Use blue for accents (more visible)
    accentHover: darkColors.blue30, // Brighter on hover

    // Borders - more visible
    border: darkColors.gray80,
    borderHover: darkColors.gray60, // Lighter on hover

    // Interactive
    buttonBackground: darkColors.gray120,
    buttonForeground: darkColors.gray20,
    buttonHover: darkColors.gray110,

    // Status
    error: darkColors.red30,
    warning: darkColors.orange30,
    success: darkColors.green30,
    info: darkColors.blue30,

    // Syntax - matching Obsidian
    keyword: darkColors.yellow30, // Keywords use yellow
    string: darkColors.yellow30, // Strings use yellow
    number: darkColors.red10, // Numbers use red
    comment: darkColors.gray50, // Comments muted
    function: darkColors.blue30, // Functions use blue
    variable: darkColors.gray20, // Variables default text
    type: darkColors.blue30, // Types use blue
    constant: darkColors.red10, // Constants use red
    operator: darkColors.gray40, // Operators subtle
    punctuation: darkColors.gray40, // Punctuation subtle

    // Editor - Use YELLOW for highlights (matching Obsidian)
    lineHighlight: darkColors.gray90,
    selection: "#54433350", // Neutral gray selection (gray60)
    findMatch: darkColors.yellow20, // Yellow base for find/word highlight
    cursorColor: darkColors.gray40, // Brighter cursor
  };
}
