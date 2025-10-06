# Primary Theme for VS Code

A warm, earthy color theme for Visual Studio Code, inspired by the popular [Primary theme for Obsidian](https://github.com/primary-theme/obsidian).

## Features

- **Two variants**: Light and Dark themes
- **Carefully crafted color palette**: Warm, earthy tones that are easy on the eyes
- **Consistent design**: Based on the beloved Primary theme for Obsidian
- **Modern syntax highlighting**: Optimized for readability and focus
- **Comprehensive UI theming**: Every element thoughtfully styled

## Installation

### From VS Code Marketplace

1. Open **Extensions** sidebar panel in VS Code (`Cmd+Shift+X` on macOS, `Ctrl+Shift+X` on Windows/Linux)
2. Search for `Primary Theme`
3. Click **Install**
4. Click **Reload** to apply the theme
5. Go to `File > Preferences > Color Theme` (or `Code > Preferences > Color Theme` on macOS)
6. Select **Primary Light** or **Primary Dark**

### From VSIX file

1. Download the latest `.vsix` file from the [releases page](https://github.com/primary-theme/primary-theme/releases)
2. Open VS Code
3. Go to Extensions (`Cmd+Shift+X` or `Ctrl+Shift+X`)
4. Click on `...` at the top of the Extensions panel
5. Select **Install from VSIX...**
6. Choose the downloaded `.vsix` file

## Color Palette

### Light Theme

The light theme features a warm, creamy background with earthy browns and subtle accent colors:

- Background: Warm off-white (`#f6f5f2`)
- Foreground: Deep brown (`#3a3022`)
- Accent: Warm gray (`#7f7364`)
- Keywords: Golden yellow (`#c7a511`)
- Strings: Warm yellow (`#c7a511`)
- Functions: Teal blue (`#25779a`)
- Constants: Muted red (`#ae3b3b`)
- Comments: Soft gray (`#9a9189`)

### Dark Theme

The dark theme offers a rich, comfortable dark background with warm undertones:

- Background: Deep warm gray (`#27241f`)
- Foreground: Warm beige (`#c9af96`)
- Accent: Medium brown (`#3f3126`)
- Keywords: Golden yellow (`#caaa2f`)
- Strings: Warm yellow (`#caaa2f`)
- Functions: Bright cyan (`#3ca3bc`)
- Constants: Coral red (`#ef7976`)
- Comments: Muted brown (`#7a6856`)

## Screenshots

### Light Theme

![Primary Light Theme](assets/screenshot-light.png)

### Dark Theme

![Primary Dark Theme](assets/screenshot-dark.png)

## Development

This theme is built using modern TypeScript tooling for maintainability and consistency.

### Building from source

```bash
# Install dependencies
pnpm install

# Generate theme files
pnpm build

# Package extension
pnpm package
```

### Project Structure

```
vscode/
├── build/
│   ├── colors.ts          # Color palette definitions
│   └── build-themes.ts    # Theme generation script
├── themes/
│   ├── primary-light.json # Generated light theme
│   └── primary-dark.json  # Generated dark theme
├── package.json
├── tsconfig.json
└── README.md
```

## Credits

- **Original Design**: [Cecilia May](https://github.com/ceciliamay)
- **Obsidian Theme**: [Primary for Obsidian](https://github.com/primary-theme/obsidian)

## License

MIT License - see [LICENSE](LICENSE) for details

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Feedback

If you have suggestions or find issues, please open an issue on [GitHub](https://github.com/primary-theme/primary-theme/issues).

## More Themes

Looking for the Obsidian version? Check out [Primary for Obsidian](https://github.com/primary-theme/obsidian)!

---

**Enjoy coding with Primary! ✨**
