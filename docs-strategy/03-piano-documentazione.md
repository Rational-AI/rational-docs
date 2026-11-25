# 03 — Piano strutturato della documentazione

Obiettivo: in circa 8 settimane portare docs.rational.is al livello di Langdock e Glean per struttura, e superarli su on-prem, sicurezza e qualità della scrittura, senza cambiare piattaforma.

## 1. Principi

1. **Restiamo su Docusaurus.** Le funzioni che oggi differenziano Mintlify e Fern (llms.txt, versioni `.md`, reference da OpenAPI, data di ultimo aggiornamento, feedback) si ottengono con plugin o pochi componenti (vedi doc 04). Una migrazione costerebbe settimane senza dare nulla in più a chi legge.
2. **Gli URL non si rompono.** La nuova struttura si fa nella sidebar (`website/sidebars.ts`), non spostando file. Quando un file va comunque spostato si aggiunge un redirect con `plugin-client-redirects`, già installato.
3. **Un tipo per pagina** (tutorial, how-to, reference, concept), dichiarato nel front matter.
4. **Il primo livello si divide per audience, il secondo per area di prodotto.** È quello che fanno Langdock e Glean, e risolve il gap G9.
5. **La documentazione fa parte della definizione di "fatto" di ogni feature.** Il processo esiste già: le PR #94–#99 lo dimostrano. Va aggiunta solo la voce di release note.

## 2. Nuova architettura dell'informazione

```
docs.rational.is
├── Get started                        ← home: "scegli il tuo percorso"
│   ├── What is Rational AI            (concept, 1 pagina: i 4 building block + diagramma)
│   ├── Quickstart: your first assistant      (oggi get-started.mdx, da tenere)
│   ├── Quickstart: install and secure (admin) (NUOVO)
│   ├── Quickstart: build your first agent    (NUOVO, esempio fabbrica di fasteners)
│   └── Quickstart: call the API (developer)  (NUOVO)
│
├── Use Rational AI                    ← utenti e builder: how-to per area di prodotto
│   ├── Chat & touchpoints      (chat-experience, configure-touchpoints, touchpoint-*, approve-tool-calls, test-touchpoint-changes)
│   ├── Knowledge               (create-knowledge … embed-knowledge, configure-rag, graphify)
│   ├── Data sources & connectors (integrate-data, configure-sources, configure-connectors)
│   ├── Agents                  (create-an-agent, agent-*)
│   ├── Workflows               (create-workflow, create-processing-rule, workflow-rules)
│   ├── Channels                (manage-channels, connect-telegram, connect-email, conversations, conversation-processing)
│   ├── Rational BI             (rational-bi + i futuri how-to sulle dashboard)
│   ├── Rational Gen            (gen-images, gen-documents, social-studio, configure-gen)
│   └── Models & fine-tuning    (ai-model-registry-features, model-deployments, fine-tune-a-model)
│
├── Administration & security          ← admin e IT, la sicurezza per prima
│   ├── Install & operate       (install-and-update, run-models-on-premise, tunnel, backup-and-restore, license)
│   ├── Identity & access       (roles-and-users, NUOVO: single sign-on (SAML/OIDC), NUOVO: user provisioning (SCIM) — se supportati)
│   ├── Governance              (governance, govern-ai-applications, human-oversight)
│   ├── Data & compliance       (data-retention, audit-trail, erase-personal-data, generated-image-provenance)
│   ├── Security & architecture (NUOVO: architecture & data flows, NUOVO: what leaves your network)
│   └── Rollout playbook        (NUOVO, P2)
│
├── Developers                         ← codice prima di tutto
│   ├── API overview & auth     (api-access + base URL cloud vs on-prem, sul modello Langdock)
│   ├── API reference           (NUOVO, generata da OpenAPI: una per capability)
│   ├── Extensions & Marketplace (marketplace, build/develop/manage-extensions, extension-updates, manage-tools, agent-skills)
│   ├── MCP                     (external-graphify-mcp + server MCP esposti)
│   └── Deploy open-source models (api/deploy-open-source-models)
│
├── Reference                          ← consultazione, niente narrazione
│   ├── Control Room screens    (le pagine cr/* di oggi: "mappe" di ogni sezione della UI)
│   ├── Settings reference      (cr/settings/*)
│   ├── Limits & quotas         (NUOVO)
│   ├── Error messages          (NUOVO, con i messaggi letterali)
│   └── Glossary                (i 29 concepts, organizzati per tema)
│
├── Troubleshooting & FAQ              (NUOVO: hub + una domanda per pagina, sintomo → causa → soluzione)
└── Release notes                      (NUOVO: una voce per release, con tag e "How to access")
```

**Cosa cambia per chi legge.** Con 6+2 voci di primo livello ognuno trova subito il suo percorso. Oggi le sezioni sono "Control Room / Operational guides / Concepts", e un admin che cerca SSO non sa dove guardare.

**Cosa cambia nel repo.** Quasi solo `sidebars.ts`. I file restano in `operational-guides/`, `cr/` e `concepts/`, e gli URL non cambiano. Le pagine nuove vanno in cartelle nuove (`admin/`, `developers/`, `troubleshooting/`, `release-notes/`).

### Le pagine `cr/*`: decisione

Oggi le pagine `cr/*` mescolano tre cose: una mappa della sezione, una spiegazione e dei video. Nel piano diventano **Reference → Control Room screens**, una pagina per sezione della UI che dice cosa c'è e dove porta. Le spiegazioni lunghe vanno nei concept collegati. Va valutato pagina per pagina in fase 2, senza riscriverle tutte.

## 3. Pagine nuove da scrivere, in ordine di priorità

| Pri | Pagina | Tipo | Audience | Modello | Stima |
|---|---|---|---|---|---|
| P0 | Release notes (struttura + ultime 6 release ricostruite dalle PR #94–#99) | reference | tutti | Glean, Mistral | 1 g |
| P0 | Troubleshooting hub + 10 FAQ prese dalle 10 sezioni "Troubleshoot" esistenti | how-to | tutti | Dust, Glean | 2 g |
| P0 | Security & architecture: componenti, flussi dei dati, cosa esce dalla rete (cloud vs on-prem) | concept + reference | admin/CISO | Glean, OpenAI your-data | 3 g, **serve l'engineering** |
| P1 | Identity e sign-in: identity provider per tenant, federazione con Entra/Okta | how-to | admin | Langdock, Mistral | 2 g, **da validare con engineering il percorso di federazione** |
| P1 | Quickstart admin: install and secure | tutorial | admin | Mistral (tempo stimato, step, verifica) | 1 g |
| P1 | Quickstart builder: first agent (fabbrica di fasteners) | tutorial | builder | Diataxis | 1 g |
| P1 | API overview: auth, base URL cloud vs on-prem, errori comuni | reference | dev | Langdock | 1 g |
| P1 | Error messages + Limits & quotas | reference | admin/dev | Anthropic | 2 g, **serve l'engineering** |
| P2 | API reference generata (per capability) | reference | dev | Langdock | 3–5 g, dipende dallo spec OpenAPI |
| P2 | Galleria use case per reparto (sales, operations, HR, IT, finance), ognuno con connettori richiesti e input/output | how-to | builder | Glean templates | 3 g |
| P2 | Rollout playbook | how-to | admin | Langdock | 2 g |
| P2 | Pagine connettore uniformate al template (chi, permessi, sync, limiti, troubleshooting) | reference | admin | Dust | 0,5 g per connettore |

## 4. Decisioni aperte (servono dal team)

1. **Inglese US o UK.** Oggi prevale l'UK ("organisation" 19 contro 6). Consiglio l'**US**: è la convenzione di Google e Microsoft, dei pacchetti Vale pronti e di tutti i competitor analizzati. Il cambio è meccanico e riguarda circa 60 occorrenze.
2. **Il nome "Knowledge".** La UI dice "a Knowledge", la prosa alterna "Knowledge base" e "knowledge base". Va scelto un termine e fissato nella tabella della terminologia.
3. **Italiano sì o no.** Il locale `it` è stato rimosso perché non era tradotto. Consiglio di **non tradurre** finché la versione inglese non è stabile (fine della fase 2). Dopo, eventualmente, solo Get started e Administration, e con traduzione assistita e revisione. Langdock mantiene EN/DE, ma con un team dedicato.
4. **SSO e SCIM.** Dal codice: identity provider configurato per tenant lato piattaforma, nessuno SCIM, nessuna UI per IdP esterni. Va confermato con engineering cosa dire pubblicamente e se la federazione con Entra, Okta o Google è supportata ufficialmente.
5. **Spec OpenAPI.** Esiste o va generato dal backend? Da questo dipende G17.

## 5. Roadmap

Aggiornata il 24/11/2026. Lo studio del codice di `rational-ai` ha mostrato che molte pagine descrivevano male i moduli, quindi è stata aggiunta una fase dedicata all'accuratezza.

| Fase | Stato | Output | Gap chiusi |
|---|---|---|---|
| **0 · Fondamenta** | ✅ PR #100 | `STYLE.md`, `CLAUDE.md`, template, Vale in CI, pulizia di file inutili, duplicati e stub | G1, G6, G7 |
| **1 · Coerenza** | ✅ PR #102 | Terminologia, inglese US, percorsi UI, callout nativi, titoli, riempitivi e AI slop; `type:` e `audience:` nel front matter; Vale bloccante | G2–G5, G8 |
| **2 · Struttura** | ✅ PR #103 | Sidebar per pubblico, i moduli in Get started, troubleshooting hub (le release notes mensili sono state tolte il 25/11: per ora il team non le pubblica), `llms.txt` e `.md`, data di aggiornamento; correzione di introduzioni e prerequisiti verificate sul codice; zero em dash; regola "studia il codice prima di scrivere" | G9–G11, G15, G16 |
| **3 · Accuratezza** | in corso | Corpo delle pagine verificato sul codice, home e footer allineati alla sidebar (footer chiaro, a quattro colonne), pagine mancanti per funzioni rilasciate (presentazioni di Apps, Gen e Marketplace; guide per Teams, Slack, WhatsApp; client MCP; estensione per browser) | parte di G19 |
| **4 · Contenuti enterprise** | da fare, serve engineering | Sicurezza e architettura, identità e accesso, quickstart per ruolo, errori e limiti. Prima va deciso cosa si può dire pubblicamente su identità e API | G12–G14, G18 |
| **5 · Crescita** | da fare | API reference generata (serve uno spec OpenAPI), galleria di casi d'uso, playbook di rollout, pagine dei connettori uniformi, decisione sull'italiano | G17, G19–G22 |
| **6 · Screenshot** | da fare | (1) Analisi di dove uno screenshot aiuta davvero a capire, pagina per pagina, e solo lì. (2) Cattura con zoom sulla parte rilevante (un menu = ritaglio del menu, non la schermata intera); se la UI ha campi vuoti o elementi rotti si sistemano temporaneamente prima dello scatto e poi si ripristinano; cattura eseguita da agenti su Haiku 5.5. (3) Inserimento nelle pagine e consegna dell'elenco delle pagine per una revisione una a una. (4) La PR finale include immagini prima/dopo delle sezioni cambiate col nostro lavoro (sidebar, home, footer, pagine riscritte) | — |

## 6. Metriche (da misurare ogni mese)

| Metrica | Come | Target a 3 mesi |
|---|---|---|
| Errori Vale | CI | 0 errori, warning in calo |
| Pagine con `type:` e template rispettato | script su front matter | 100% |
| Pagine aggiornate negli ultimi 6 mesi | `showLastUpdateTime` + git | ≥ 80% |
| Feedback positivo | widget 👍/👎 (doc 04) | ≥ 75% su pagine con più di 20 voti |
| Ricerche senza risultati | log della ricerca locale (da valutare: il plugin attuale non li espone, vedi doc 04) | lista mensile da coprire |
| Ticket di supporto con un link alla doc | support | trend in crescita |
| Latenza della doc | ogni release ha la sua release note entro 2 giorni | 100% |
