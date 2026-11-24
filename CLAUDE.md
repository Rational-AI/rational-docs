# Rational docs — instructions for Claude

- Site: Docusaurus 3 in `website/`. Pages live in `website/docs/`. The sidebar is hand-written in `website/sidebars.ts`: add every new page there.
- Follow `STYLE.md` exactly. Start every new page from `templates/<type>.mdx` and set `type:` (tutorial | how-to | reference | concept) and `audience:` in the front matter.
- Check UI labels, defaults, limits and error messages against the product source in `~/repos/rational-ai` or against screenshots. Never invent them. If you can't verify something, write `TODO(verify): …` and say so in the PR.
- Callouts: use `:::note`, `:::tip`, `:::warning` or `:::danger` only. No `<Admonition>`, no emoji, no ALL-CAPS titles.
- Terms: STYLE.md §5. Use US English.
- Never move or rename a file without adding a redirect (`@docusaurus/plugin-client-redirects` in `website/docusaurus.config.ts`).
- Run `vale website/docs/<changed files>` before committing, and `yarn --cwd website build` when links or the sidebar change.
- AI-slop check: before committing a new or rewritten page, run the `no-ai-slop` skill in **detect** mode on it and fix every flagged line (STYLE.md §4, "AI slop"). Vale catches the vocabulary; the skill catches colon reveals, synonym cycling, recap endings and filler that only a reader notices. Don't invent facts to replace slop: if no concrete fact is available, delete the sentence.
- Release notes are monthly, in `website/release-notes/YYYY-MM-DD-month-year.mdx` (from `templates/release-note.mdx`). When a PR documents a user-visible change, add it to the current month's entry with a **How to access** line and a link to the guide. Leave out features that are disabled or unreleased.
- A guide's **Troubleshooting** section is a `| Symptom | What to check |` table. When you add one, list its symptoms in `website/docs/troubleshooting/index.mdx`.
- Planning docs (gap analysis, roadmap) are in `docs-strategy/`. They are not published.
