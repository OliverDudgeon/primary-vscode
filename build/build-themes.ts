/**
 * Build script for Primary Theme
 * Generates theme JSON files from color definitions
 */

import * as fs from "fs";
import * as path from "path";
import { getLightThemeColors, getDarkThemeColors, ThemeColors } from "./colors";

interface VSCodeTheme {
  name: string;
  type: "light" | "dark";
  colors: Record<string, string>;
  tokenColors: Array<{
    name?: string;
    scope: string | string[];
    settings: {
      foreground?: string;
      background?: string;
      fontStyle?: string;
    };
  }>;
}

function generateTheme(
  colors: ThemeColors,
  type: "light" | "dark",
  name: string
): VSCodeTheme {
  return {
    name,
    type,
    colors: {
      // Base colors
      focusBorder: colors.accent,
      foreground: colors.foreground,
      "widget.shadow": type === "light" ? "#00000010" : "#00000030",
      "selection.background": colors.selection,
      descriptionForeground: colors.foregroundMuted,
      errorForeground: colors.error,

      // Text colors
      "textLink.foreground": colors.info,
      "textLink.activeForeground": colors.info,
      "textPreformat.foreground": colors.constant,

      // Button
      "button.background": colors.buttonBackground,
      "button.foreground": colors.buttonForeground,
      "button.hoverBackground": colors.buttonHover,
      "button.secondaryBackground": colors.backgroundAlt,
      "button.secondaryForeground": colors.foreground,
      "button.secondaryHoverBackground": colors.buttonHover,

      // Dropdown
      "dropdown.background": colors.backgroundAlt,
      "dropdown.border": colors.border,
      "dropdown.foreground": colors.foreground,

      // Input
      "input.background": colors.backgroundAlt,
      "input.border": colors.border,
      "input.foreground": colors.foreground,
      "input.placeholderForeground": colors.foregroundFaint,
      "inputOption.activeBorder": colors.accent,
      "inputValidation.errorBackground": colors.error,
      "inputValidation.errorBorder": colors.error,
      "inputValidation.infoBackground": colors.info,
      "inputValidation.infoBorder": colors.info,
      "inputValidation.warningBackground": colors.warning,
      "inputValidation.warningBorder": colors.warning,

      // Scrollbar
      "scrollbar.shadow": type === "light" ? "#00000020" : "#00000040",
      "scrollbarSlider.background": colors.border + "80",
      "scrollbarSlider.hoverBackground": colors.borderHover + "80",
      "scrollbarSlider.activeBackground": colors.borderHover + "A0",

      // Badge
      "badge.background": colors.accent,
      "badge.foreground":
        type === "light" ? colors.background : colors.foreground,

      // Progress bar
      "progressBar.background": colors.accent,

      // Lists and trees
      "list.activeSelectionBackground": colors.accent + "40",
      "list.activeSelectionForeground": colors.foreground,
      "list.dropBackground": colors.accent + "20",
      "list.focusBackground": colors.accent + "30",
      "list.focusForeground": colors.foreground,
      "list.highlightForeground": colors.info,
      "list.hoverBackground": colors.backgroundAlt,
      "list.hoverForeground": colors.foreground,
      "list.inactiveSelectionBackground": colors.accent + "20",
      "list.inactiveSelectionForeground": colors.foreground,
      "list.warningForeground": colors.warning,
      "list.errorForeground": colors.error,

      // Activity Bar
      "activityBar.background": colors.backgroundSecondary,
      "activityBar.foreground": colors.foreground,
      "activityBar.inactiveForeground": colors.foregroundFaint,
      "activityBar.border": colors.border,
      "activityBarBadge.background": colors.accent,
      "activityBarBadge.foreground":
        type === "light" ? colors.background : colors.foreground,

      // Side Bar
      "sideBar.background": colors.backgroundAlt,
      "sideBar.foreground": colors.foregroundMuted,
      "sideBar.border": colors.border,
      "sideBarTitle.foreground": colors.foreground,
      "sideBarSectionHeader.background": colors.backgroundSecondary,
      "sideBarSectionHeader.foreground": colors.foreground,

      // Editor
      "editor.background": colors.background,
      "editor.foreground": colors.foreground,
      "editorLineNumber.foreground": colors.foregroundFaint,
      "editorLineNumber.activeForeground": colors.foregroundMuted,
      "editorCursor.foreground": colors.cursorColor,
      "editor.selectionBackground": colors.selection,
      "editor.inactiveSelectionBackground": colors.selection + "80",
      "editor.selectionHighlightBackground": colors.findMatch + "20", // Subtle yellow for selected word occurrences
      "editor.wordHighlightBackground": colors.findMatch + "20", // Subtle yellow for word highlight
      "editor.wordHighlightStrongBackground": colors.findMatch + "30", // Slightly stronger yellow
      "editor.findMatchBackground": colors.findMatch + "40", // Yellow for active find match
      "editor.findMatchHighlightBackground": colors.findMatch + "25", // Subtle for other matches
      "editor.findRangeHighlightBackground": colors.findMatch + "15", // Very subtle for find range
      "editor.hoverHighlightBackground": colors.findMatch + "15", // Very subtle for hover
      "editor.lineHighlightBackground": colors.lineHighlight,
      "editor.lineHighlightBorder": colors.lineHighlight,
      "editorLink.activeForeground": colors.info,
      "editor.rangeHighlightBackground": colors.selection,

      // Editor Widget
      "editorWidget.background": colors.backgroundAlt,
      "editorWidget.border": colors.border,
      "editorSuggestWidget.background": colors.backgroundAlt,
      "editorSuggestWidget.border": colors.border,
      "editorSuggestWidget.foreground": colors.foreground,
      "editorSuggestWidget.highlightForeground": colors.info,
      "editorSuggestWidget.selectedBackground": colors.accent + "30",

      // Editor Gutter
      "editorGutter.background": colors.background,
      "editorGutter.modifiedBackground": colors.info,
      "editorGutter.addedBackground": colors.success,
      "editorGutter.deletedBackground": colors.error,

      // Diff Editor
      "diffEditor.insertedTextBackground": colors.success + "20",
      "diffEditor.removedTextBackground": colors.error + "20",

      // Editor Overview Ruler
      "editorOverviewRuler.border": colors.border,
      "editorOverviewRuler.modifiedForeground": colors.info,
      "editorOverviewRuler.addedForeground": colors.success,
      "editorOverviewRuler.deletedForeground": colors.error,
      "editorOverviewRuler.errorForeground": colors.error,
      "editorOverviewRuler.warningForeground": colors.warning,
      "editorOverviewRuler.infoForeground": colors.info,
      "editorOverviewRuler.bracketMatchForeground": colors.accent,

      // Editor Brackets
      "editorBracketMatch.background": colors.findMatch + "30",
      "editorBracketMatch.border": colors.accent,

      // Peek View
      "peekView.border": colors.accent,
      "peekViewEditor.background": colors.backgroundAlt,
      "peekViewEditor.matchHighlightBackground": colors.findMatch,
      "peekViewResult.background": colors.backgroundSecondary,
      "peekViewResult.matchHighlightBackground": colors.findMatch,
      "peekViewResult.selectionBackground": colors.accent + "40",
      "peekViewTitle.background": colors.backgroundSecondary,
      "peekViewTitleDescription.foreground": colors.foregroundMuted,
      "peekViewTitleLabel.foreground": colors.foreground,

      // Merge Conflicts
      "merge.currentHeaderBackground": colors.info + "40",
      "merge.incomingHeaderBackground": colors.success + "40",
      "merge.currentContentBackground": colors.info + "20",
      "merge.incomingContentBackground": colors.success + "20",

      // Panel
      "panel.background": colors.backgroundAlt,
      "panel.border": colors.border,
      "panelTitle.activeBorder": colors.accent,
      "panelTitle.activeForeground": colors.foreground,
      "panelTitle.inactiveForeground": colors.foregroundMuted,

      // Status Bar
      "statusBar.background": colors.backgroundSecondary,
      "statusBar.foreground": colors.foregroundMuted,
      "statusBar.border": colors.border,
      "statusBar.debuggingBackground": colors.warning,
      "statusBar.debuggingForeground":
        type === "light" ? colors.background : colors.foreground,
      "statusBar.noFolderBackground": colors.backgroundSecondary,
      "statusBarItem.activeBackground": colors.accent + "40",
      "statusBarItem.hoverBackground": colors.accent + "20",

      // Title Bar
      "titleBar.activeBackground": colors.backgroundSecondary,
      "titleBar.activeForeground": colors.foreground,
      "titleBar.inactiveBackground": colors.backgroundSecondary,
      "titleBar.inactiveForeground": colors.foregroundFaint,
      "titleBar.border": colors.border,

      // Menu Bar
      "menubar.selectionForeground": colors.foreground,
      "menubar.selectionBackground": colors.accent + "30",
      "menu.foreground": colors.foreground,
      "menu.background": colors.backgroundAlt,
      "menu.selectionForeground": colors.foreground,
      "menu.selectionBackground": colors.accent + "30",
      "menu.separatorBackground": colors.border,

      // Notification
      "notificationCenter.border": colors.border,
      "notificationCenterHeader.foreground": colors.foreground,
      "notificationCenterHeader.background": colors.backgroundSecondary,
      "notificationToast.border": colors.border,
      "notifications.foreground": colors.foreground,
      "notifications.background": colors.backgroundAlt,
      "notifications.border": colors.border,
      "notificationLink.foreground": colors.info,

      // Extensions
      "extensionButton.prominentBackground": colors.accent,
      "extensionButton.prominentForeground":
        type === "light" ? colors.background : colors.foreground,
      "extensionButton.prominentHoverBackground": colors.accentHover,

      // Quick Picker
      "pickerGroup.border": colors.border,
      "pickerGroup.foreground": colors.accent,

      // Integrated Terminal
      "terminal.foreground": colors.foreground,
      "terminal.ansiBlack":
        type === "light" ? colors.backgroundSecondary : colors.background,
      "terminal.ansiRed": colors.error,
      "terminal.ansiGreen": colors.success,
      "terminal.ansiYellow": colors.warning,
      "terminal.ansiBlue": colors.info,
      "terminal.ansiMagenta": colors.constant,
      "terminal.ansiCyan": colors.function,
      "terminal.ansiWhite": colors.foreground,
      "terminal.ansiBrightBlack": colors.foregroundFaint,
      "terminal.ansiBrightRed": colors.error,
      "terminal.ansiBrightGreen": colors.success,
      "terminal.ansiBrightYellow": colors.warning,
      "terminal.ansiBrightBlue": colors.info,
      "terminal.ansiBrightMagenta": colors.constant,
      "terminal.ansiBrightCyan": colors.function,
      "terminal.ansiBrightWhite": colors.foreground,

      // Debug
      "debugToolBar.background": colors.backgroundAlt,
      "debugToolBar.border": colors.border,

      // Welcome Page
      "welcomePage.buttonBackground": colors.backgroundAlt,
      "welcomePage.buttonHoverBackground": colors.buttonHover,

      // Git
      "gitDecoration.modifiedResourceForeground": colors.info,
      "gitDecoration.deletedResourceForeground": colors.error,
      "gitDecoration.untrackedResourceForeground": colors.success,
      "gitDecoration.ignoredResourceForeground": colors.foregroundFaint,
      "gitDecoration.conflictingResourceForeground": colors.warning,

      // Settings Editor
      "settings.headerForeground": colors.foreground,
      "settings.modifiedItemIndicator": colors.info,

      // Breadcrumbs
      "breadcrumb.foreground": colors.foregroundMuted,
      "breadcrumb.background": colors.background,
      "breadcrumb.focusForeground": colors.foreground,
      "breadcrumb.activeSelectionForeground": colors.foreground,
      "breadcrumbPicker.background": colors.backgroundAlt,

      // Tabs
      "tab.activeBackground": colors.background,
      "tab.activeForeground": colors.foreground,
      "tab.activeBorder": colors.accent,
      "tab.activeBorderTop": colors.accent,
      "tab.inactiveBackground": colors.backgroundAlt,
      "tab.inactiveForeground": colors.foregroundMuted,
      "tab.border": colors.border,
      "tab.hoverBackground": colors.buttonHover,
      "tab.hoverForeground": colors.foreground,

      // Editor Group
      "editorGroup.border": colors.border,
      "editorGroupHeader.noTabsBackground": colors.backgroundAlt,
      "editorGroupHeader.tabsBackground": colors.backgroundAlt,
      "editorGroupHeader.tabsBorder": colors.border,
      "editorGroup.dropBackground": colors.accent + "20",

      // Symbol Icons (for outline, breadcrumbs, etc.)
      "symbolIcon.arrayForeground": colors.foreground,
      "symbolIcon.booleanForeground": colors.constant,
      "symbolIcon.classForeground": colors.type,
      "symbolIcon.colorForeground": colors.constant,
      "symbolIcon.constantForeground": colors.constant,
      "symbolIcon.constructorForeground": colors.function,
      "symbolIcon.enumeratorForeground": colors.type,
      "symbolIcon.enumeratorMemberForeground": colors.constant,
      "symbolIcon.eventForeground": colors.warning,
      "symbolIcon.fieldForeground": colors.variable,
      "symbolIcon.fileForeground": colors.foreground,
      "symbolIcon.folderForeground": colors.foreground,
      "symbolIcon.functionForeground": colors.function,
      "symbolIcon.interfaceForeground": colors.type,
      "symbolIcon.keyForeground": colors.constant,
      "symbolIcon.keywordForeground": colors.keyword,
      "symbolIcon.methodForeground": colors.function,
      "symbolIcon.moduleForeground": colors.type,
      "symbolIcon.namespaceForeground": colors.type,
      "symbolIcon.nullForeground": colors.constant,
      "symbolIcon.numberForeground": colors.number,
      "symbolIcon.objectForeground": colors.variable,
      "symbolIcon.operatorForeground": colors.operator,
      "symbolIcon.packageForeground": colors.type,
      "symbolIcon.propertyForeground": colors.variable,
      "symbolIcon.referenceForeground": colors.info,
      "symbolIcon.snippetForeground": colors.string,
      "symbolIcon.stringForeground": colors.string,
      "symbolIcon.structForeground": colors.type,
      "symbolIcon.textForeground": colors.foreground,
      "symbolIcon.typeParameterForeground": colors.type,
      "symbolIcon.unitForeground": colors.constant,
      "symbolIcon.variableForeground": colors.variable,

      // Chart colors (for extensions)
      "charts.foreground": colors.foreground,
      "charts.lines": colors.border,
      "charts.red": colors.error,
      "charts.blue": colors.info,
      "charts.yellow": colors.warning,
      "charts.orange": colors.warning,
      "charts.green": colors.success,
      "charts.purple": colors.constant,
    },
    tokenColors: [
      {
        name: "Comment",
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: colors.comment,
          fontStyle: "italic",
        },
      },
      {
        name: "String",
        scope: ["string", "string.quoted", "string.template"],
        settings: {
          foreground: colors.string,
        },
      },
      {
        name: "Number",
        scope: ["constant.numeric"],
        settings: {
          foreground: colors.number,
        },
      },
      {
        name: "Built-in constant",
        scope: ["constant.language", "constant.character", "constant.other"],
        settings: {
          foreground: colors.constant,
        },
      },
      {
        name: "User-defined constant",
        scope: ["variable.other.constant"],
        settings: {
          foreground: colors.constant,
        },
      },
      {
        name: "Variable",
        scope: ["variable", "variable.other"],
        settings: {
          foreground: colors.variable,
        },
      },
      {
        name: "Keyword",
        scope: ["keyword", "keyword.control", "keyword.operator.new"],
        settings: {
          foreground: colors.keyword,
        },
      },
      {
        name: "Storage",
        scope: ["storage", "storage.type", "storage.modifier"],
        settings: {
          foreground: colors.keyword,
        },
      },
      {
        name: "Operator",
        scope: ["keyword.operator"],
        settings: {
          foreground: colors.operator,
        },
      },
      {
        name: "Punctuation",
        scope: [
          "punctuation",
          "punctuation.separator",
          "punctuation.terminator",
        ],
        settings: {
          foreground: colors.punctuation,
        },
      },
      {
        name: "Function",
        scope: [
          "entity.name.function",
          "support.function",
          "meta.function-call",
        ],
        settings: {
          foreground: colors.function,
        },
      },
      {
        name: "Class",
        scope: [
          "entity.name.class",
          "entity.name.type",
          "support.class",
          "support.type",
        ],
        settings: {
          foreground: colors.type,
        },
      },
      {
        name: "Type",
        scope: [
          "entity.name.type",
          "entity.other.inherited-class",
          "support.type",
        ],
        settings: {
          foreground: colors.type,
        },
      },
      {
        name: "Tag",
        scope: ["entity.name.tag", "meta.tag"],
        settings: {
          foreground: colors.constant,
        },
      },
      {
        name: "Attribute",
        scope: ["entity.other.attribute-name"],
        settings: {
          foreground: colors.function,
        },
      },
      {
        name: "Property",
        scope: ["variable.other.property", "support.type.property-name"],
        settings: {
          foreground: colors.variable,
        },
      },
      {
        name: "Import/Export",
        scope: [
          "keyword.control.import",
          "keyword.control.export",
          "keyword.control.from",
        ],
        settings: {
          foreground: colors.keyword,
        },
      },
      {
        name: "Module/Package",
        scope: ["entity.name.namespace", "entity.name.module"],
        settings: {
          foreground: colors.type,
        },
      },
      {
        name: "Invalid",
        scope: ["invalid", "invalid.illegal"],
        settings: {
          foreground: colors.error,
        },
      },
      {
        name: "Markdown - Heading",
        scope: ["markup.heading", "entity.name.section"],
        settings: {
          foreground: colors.function,
          fontStyle: "bold",
        },
      },
      {
        name: "Markdown - Bold",
        scope: ["markup.bold"],
        settings: {
          fontStyle: "bold",
        },
      },
      {
        name: "Markdown - Italic",
        scope: ["markup.italic"],
        settings: {
          fontStyle: "italic",
        },
      },
      {
        name: "Markdown - Link",
        scope: ["markup.underline.link", "string.other.link"],
        settings: {
          foreground: colors.info,
        },
      },
      {
        name: "Markdown - Code",
        scope: ["markup.inline.raw", "markup.fenced_code"],
        settings: {
          foreground: colors.constant,
        },
      },
      {
        name: "JSON - Key",
        scope: [
          "support.type.property-name.json",
          "string.json support.type.property-name.json",
        ],
        settings: {
          foreground: colors.function,
        },
      },
      {
        name: "CSS - Property",
        scope: ["support.type.property-name.css"],
        settings: {
          foreground: colors.variable,
        },
      },
      {
        name: "CSS - Class/ID",
        scope: [
          "entity.other.attribute-name.class.css",
          "entity.other.attribute-name.id.css",
        ],
        settings: {
          foreground: colors.function,
        },
      },
    ],
  };
}

function main() {
  const themesDir = path.join(__dirname, "..", "themes");

  // Create themes directory if it doesn't exist
  if (!fs.existsSync(themesDir)) {
    fs.mkdirSync(themesDir, { recursive: true });
  }

  // Generate light theme
  const lightColors = getLightThemeColors();
  const lightTheme = generateTheme(lightColors, "light", "Primary Light");
  fs.writeFileSync(
    path.join(themesDir, "primary-light.json"),
    JSON.stringify(lightTheme, null, 2)
  );
  console.log("✓ Generated primary-light.json");

  // Generate dark theme
  const darkColors = getDarkThemeColors();
  const darkTheme = generateTheme(darkColors, "dark", "Primary Dark");
  fs.writeFileSync(
    path.join(themesDir, "primary-dark.json"),
    JSON.stringify(darkTheme, null, 2)
  );
  console.log("✓ Generated primary-dark.json");
}

main();
