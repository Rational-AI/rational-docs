# 04 — Proposta di scrittura e implementazione

Questo documento traduce il piano (doc 03) in modifiche concrete al repo. La sezione A descrive come si scrive, la sezione B cosa si cambia nel codice e nella configurazione.

---

## A. Proposta di scrittura

### A1. Il flusso di una pagina

1. **Brief, 2 righe nella PR**: audience, tipo, cosa saprà fare il lettore alla fine.
2. **Bozza dal template giusto** (A2), eventualmente con Claude, che legge `CLAUDE.md` e `STYLE.md`.
3. **Verifica sul prodotto**: ogni step va eseguito davvero, gli screenshot vengono dalla UI attuale e i valori di default sono quelli reali.
4. **Passaggio di Vale** in locale e in CI.
5. **Revisione con la checklist** (doc 02, §7) da parte di una persona diversa dall'autore.
6. **Merge**, e voce di release note se la pagina accompagna una feature.

### A2. Template

Proposta: metterli in `templates/` alla radice del repo, fuori da `website/docs` così non vengono pubblicati.

**How-to** (`templates/how-to.mdx`)
```mdx
---
title: <Verbo + oggetto, sentence case>
description: <Una frase: cosa ottieni>
type: how-to
audience: [builder]        # user | builder | admin | developer
---

<1–2 frasi: cosa fa questa pagina e perché ti serve.>

## Before you begin
- Role: <ruolo/permesso richiesto>
- <cosa deve già esistere, con link>

## <Verbo + oggetto>
1. Go to **Settings** → **<Area>** and select **New**.
2. Enter a **Name**.
3. Select **Save**.

<Risultato atteso: cosa vedi quando ha funzionato. Screenshot se serve.>

## Troubleshooting
**<Sintomo, come lo vede l'utente>** — <causa>. <soluzione>.

## Next steps
- [<Pagina successiva logica>](...)
- [<Concept collegato>](...)
```

**Concept** (`templates/concept.mdx`): definizione in una frase, poi "Why it matters in Rational AI", "How it works" (con un diagramma se serve), "Related settings" (link alla reference) e "Learn more". Non contiene step.

**Reference** (`templates/reference.mdx`): una frase introduttiva, poi una tabella per gruppo con le colonne *Setting · What it does · Values · Default*. Niente prosa narrativa.

**Troubleshooting entry** (`templates/troubleshooting.mdx`): titolo = il sintomo, con le parole dell'utente o il messaggio d'errore letterale. Poi le sezioni *Cause*, *Fix* (step) e *Still stuck?* (contatto o raccolta log).

**Connettore / canale** (`templates/connector.mdx`): sul modello di Dust, con le sezioni *Who can set it up · Permissions requested · What gets synced and how often · Limits · Set up (steps) · Troubleshooting*.

**Release note** (`templates/release-note.mdx`):
```mdx
---
title: <Mese Anno> — <versione>
date: 2026-11-24
type: reference
---

## New
### <Nome feature>
<1–2 frasi su cosa puoi fare ora.>
**How to access:** **Settings** → **…** · Available to: <ruoli/piani> · [Guide](...)

## Improved
- …

## Fixed
- …

## Deprecated
- <Cosa, da quando, alternativa>
```

### A3. Riscrittura delle pagine esistenti

Le 114 pagine non vanno riscritte da zero. Il lavoro si divide in tre livelli:

| Livello | Cosa | Pagine | Come |
|---|---|---|---|
| **Meccanico** | terminologia, percorsi UI, ortografia US, casing dei titoli, riempitivi, callout | tutte | script + Vale, 1 PR per tipo di regola, revisione per diff |
| **Strutturale** | aggiungere `type:`, prerequisiti, Next steps; dividere le pagine che mescolano tipi | le circa 30 con più traffico | a mano o con Claude, sul template |
| **Riscrittura** | pagine con muri di testo (es. `roles-and-users`), concept troppo da manuale (es. `RAG`), pagine `cr/*` | circa 15 | a mano, una PR per pagina |

### A4. Prima pagina pilota

Il modo più rapido per validare la style guide è applicarla per intero a **una** pagina e farla approvare dal team: `operational-guides/roles-and-users.mdx`. È lunga, ha muri di testo e un link vuoto `[role](#)`, ed è una pagina admin, quindi va anche nella nuova sezione Administration. Se il risultato convince, il resto segue lo stesso schema.

---

## B. Implementazione tecnica

### B1. Fase 0 — fondamenta (≈ 1 settimana)

**File nuovi alla radice del repo**
- `STYLE.md`: contenuto del doc 02, §2–§7.
- `CLAUDE.md`: istruzioni brevi per chi scrive con Claude (testo pronto in B6).
- `templates/*.mdx`: i template di A2.
- `.vale.ini` + `styles/Rational/`: regole di linting (B2).

**Pulizia** (solo cancellazioni, nessun URL pubblico cambia)
- `website/add.png`, `website/settings`, `website/ai-model-registry`: file vuoti.
- `website/blog/`: post di esempio di Docusaurus, e il blog è disabilitato.
- `website/docs/sidebars.ts`: copia obsoleta.
- `website/docs/concepts/_Workflows and processing rules.mdx`: duplicato.
- `website/docs/_get-started/`, `website/docs/_quick-start.mdx`: stub da 10 parole. Il quickstart vero è `get-started.mdx`.
- `website/docs/tutorial-basics/features-list`: outline interno, senza estensione.
- Correggere le descrizioni in `operational-guides/_category_.json` e `concepts/_category_.json`.

### B2. Vale (linter di stile)

```ini
# .vale.ini
StylesPath = styles
MinAlertLevel = suggestion
Packages = Google

[*.{md,mdx}]
BasedOnStyles = Vale, Google, Rational
Google.Headings = YES          # sentence case
Google.We = NO                 # "we" ammesso per l'azienda
```

Regole `Rational` personalizzate in `styles/Rational/`:
- `Terms.yml` (substitution): Finetuning → fine-tuning, RationalBI → Rational BI, organisation → organization, behaviour → behavior, on-premise → on-premises, click on → select, log in → sign in.
- `Fillers.yml` (existence): simply, just, easy, easily, powerful, seamless, leverage, please.
- `UIPath.yml` (existence, regex): `\*\*[^*]+ → [^*]+\*\*`, cioè il percorso in un unico grassetto.
- `Callouts.yml` (existence): `<Admonition`, `icon="`, `title="[A-Z ]{6,}"`.
- `Directional.yml`: above, below, right-hand, left-hand.
- `Vocab/Rational/accept.txt`: Rational, touchpoint, Graphify, Telegram, ecc.

**CI**: un job `vale` in GitHub Actions (`errata-ai/vale-action`) che commenta le PR sui soli file cambiati. Nella fase 0 non blocca. Dalla fase 1, una volta fatto il passaggio meccanico, diventa bloccante.

### B3. Fase 1 — passaggio meccanico

Un PR per regola, così la revisione è semplice:
1. `sed` su terminologia e ortografia (lista in `Terms.yml`), con controllo a mano del diff.
2. Percorsi UI: `**Settings → X → Y**` diventa `**Settings** → **X** → **Y**` (38 occorrenze).
3. Callout: codemod da `<Admonition type="info" icon="📖" title="THE FOUR PIECES">…</Admonition>` a `:::note[Four pieces]…:::` sulle 85 pagine, togliendo anche l'import. Da fare con uno script Node che converte ogni `type` (info → note, warning → warning, danger → danger) e il titolo in sentence case.
4. Casing dei titoli: lista dei titoli in Title Case generata da Vale, corretti a mano (sono pochi).
5. Front matter: aggiungere `type:` e `audience:` a tutte le pagine. Script iniziale per cartella (`concepts/` → concept, `cr/settings/` → reference, `operational-guides/` → how-to), poi revisione a mano.

### B4. Fase 2 — funzionalità del sito

| Funzione | Come | Costo |
|---|---|---|
| **Nuova sidebar per audience** | riscrivere `website/sidebars.ts` secondo il doc 03 §2; i file non si spostano | 0,5 g |
| **Last updated** | `showLastUpdateTime: true` nelle opzioni `docs` di `docusaurus.config.ts`, nativo (serve `fetch-depth: 0` nel checkout di deploy) | 10 min |
| **llms.txt + llms-full.txt** | plugin `docusaurus-plugin-llms` (v0.6.2, peer `@docusaurus/core ^3`, compatibile con il nostro 3.9.2) | 1 h |
| **Versione `.md` di ogni pagina + "Copy page"** | lo stesso plugin genera i file markdown; il pulsante è un piccolo componente swizzled in `DocItem/Footer` o `DocItem/Content` che copia il `.md` | 0,5 g |
| **Widget di feedback 👍/👎** | componente in `DocItem/Footer`. Il sito non ha analytics, quindi va scelto dove mandare i voti: (a) Plausible/Umami self-hosted, coerente con il posizionamento privacy, oppure (b) link "Suggest a change" che apre una issue GitHub precompilata. Consiglio di partire da (b), che costa zero | (b) 1 h · (a) 0,5 g |
| **Release notes** | cartella `website/docs/release-notes/`, una pagina per release, generated-index ordinato per data. Il feed RSS non è nativo per i docs: lo si aggiunge riattivando il plugin blog solo per le release notes (`routeBasePath: 'release-notes'`), che dà RSS e Atom gratis | 0,5 g |
| **Troubleshooting hub** | cartella `website/docs/troubleshooting/` con generated-index | 1 h + contenuti |
| **Redirect** | `plugin-client-redirects`, già installato, solo per i file che si spostano davvero | — |

### B5. Fase 4 — API reference

- Plugin `docusaurus-plugin-openapi-docs` + `docusaurus-theme-openapi-docs` (v5.2.0). Richiedono **Docusaurus ≥ 3.10**, quindi prima va aggiornato da 3.9.2. È un aggiornamento minore, da fare in una PR separata.
- **Prerequisito**: uno spec OpenAPI del backend (decisione aperta n. 5 del doc 03). Va pubblicato anche come `/openapi.yaml`, come fa Langdock.
- La reference va divisa per capability (Agents, Knowledge, Touchpoints, BI, Fine-tuning, Deployments, Registry, Marketplace, API keys), con una pagina "API overview" scritta a mano che documenta l'URL base cloud e quello on-prem, con un warning sull'errore di prefisso più frequente.

### B6. Bozza di `CLAUDE.md`

```markdown
# Rational docs — instructions for Claude

- Site: Docusaurus 3 in `website/`. Docs in `website/docs/`. Sidebar is hand-written in `website/sidebars.ts`; add every new page there.
- Follow `STYLE.md` exactly. Start every new page from `templates/<type>.mdx` and set `type:` and `audience:` in front matter.
- Verify UI labels against the product or screenshots; never invent buttons, defaults, limits or error messages. If unsure, leave `TODO(verify): …` and say so in the PR.
- Use `:::note` / `:::tip` / `:::warning` / `:::danger` callouts only; no `<Admonition>`, no emoji, no ALL-CAPS titles.
- Terms: see STYLE.md §5. US English.
- Never move a file without adding a redirect in `docusaurus.config.ts`.
- Every feature PR adds an entry to `website/docs/release-notes/`.
- Run `vale website/docs` before committing.
```

### B7. Stima complessiva

| Fase | Persone e giorni | Note |
|---|---|---|
| 0 Fondamenta | 3–4 g | gran parte la può fare Claude in una sessione |
| 1 Coerenza | 4–5 g | per lo più script + revisione dei diff |
| 2 Struttura e sito | 5–6 g | sidebar, plugin, release notes, troubleshooting |
| 3 Contenuti enterprise | 8–10 g | servono input da engineering (sicurezza, SSO, errori, limiti) |
| 4 Crescita | 10+ g | dipende dallo spec OpenAPI |

**Primo passo consigliato:** la fase 0 più la pagina pilota (A4) in un'unica PR. Questo rende la style guide concreta prima di applicarla a 114 pagine.
