# Fonts

Drop the **Apfel Grotezk** font files here. The homepage hero title
(`@font-face` in `src/css/home.css`) expects:

- `ApfelGrotezk-Mittel.woff2` (preferred)
- `ApfelGrotezk-Mittel.woff` (fallback)

Until these files are present, the hero title falls back to a system
grotesque stack. No code change is needed once you add them — just match
the file names above (or update the `src:` paths in `src/css/home.css`).
