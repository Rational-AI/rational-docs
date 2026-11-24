# 01 — Analisi dei competitor e gap

Le pagine sono state lette il 24/11/2026. Ogni affermazione sui competitor viene da una pagina letta direttamente, e gli URL sono nella sezione Fonti. Le affermazioni di Google, Microsoft, Diataxis, Mintlify e Langdock (IA e admin) sono state verificate da tre revisori indipendenti, con esito 3-0. Quando qualcosa "non è stato osservato" vuol dire solo che non era nel testo estratto della pagina, non che non esista.

## 1. Benchmark sintetico

| | OpenAI (ChatGPT + API) | Anthropic (Claude) | Langdock | Cohere | Mistral | Dust | Glean | **Rational oggi** |
|---|---|---|---|---|---|---|---|---|
| Piattaforma | custom | custom | Mintlify | Fern | custom (Next.js) | Mintlify-like | custom | Docusaurus 3 |
| Divisione per audience | utente / admin / dev (su 3 siti) | dev (platform) / utente+admin (Help Center) | **Using / Admin / Developer** (155/121/141 pagine) | per prodotto e obiettivo ("Which should I use?") | prodotto + **Admin** separato | admin dentro la doc utente | **User / Admin / Security / Connectors / Troubleshooting / Release notes** | per tipo di pagina (Control Room / Guide / Concetti) |
| Quickstart | per prodotto | 1 pagina, 9 linguaggi | 1 pagina + video | 6 quickstart per task | per prodotto e **ruolo**, con tempo stimato | breve | **User vs Admin**, prerequisiti + 5 step | 1 (get-started, buono) |
| Template di pagina | step H2 numerati, tabelle decisionali | descrizione di una riga, Steps, tab di codice, Next steps | sommario di una riga, step, screenshot, callout, FAQ in fondo | tab per target di deploy | **tempo, prerequisiti, step, verifica, What's next** | step, connettori molto strutturati | prerequisiti, step, Next steps, **data di aggiornamento + feedback** | intro, prerequisiti, step numerati (buono ma non formalizzato) |
| Changelog | settimanale, filtri per prodotto | per data, separato per prodotto | sul sito marketing, RSS | 68 voci, **senza date** | datato, **tag**, avvisi di sicurezza | nella doc, più volte a settimana | versionato, **"How to access"**, RSS, Coming soon | **assente** |
| Troubleshooting / FAQ | FAQ per area | **errori con payload letterali**, pagina troubleshooting | 1 domanda = 1 pagina | FAQ + errori | glossario errori, Known limitations | 30 FAQ + troubleshooting agenti | **hub dedicato** | sezioni dentro 10 guide, nessun hub |
| Sicurezza / dati | retention per endpoint (tabella), ZDR, EKM | ZDR/HIPAA con liste "cosa non copre" | SAML/SCIM, IP, sessioni | sezione trust per Model Vault | ZDR con "come verificarlo", avvisi numerati | link al sito marketing | **tab Security & Architecture** + Trust Portal | Compliance & records (5 pagine, buone), nessuna pagina architettura/flussi dati |
| SSO / SCIM | Help Center | Help Center (Okta, Entra) | **primo passo del setup admin** | — | quickstart SSO | provisioning | per IdP | citato in 5 pagine, **nessuna guida** |
| On-prem / deploy privato | — | via cloud partner | URL base cloud vs dedicato + warning | sequenza breve, hardware "su ingaggio" | self-deploy (vLLM ecc.), niente guida on-prem completa | — | — | install-and-update, backup, tunnel (**qui siamo avanti**) |
| API reference | generata | generata, errori, rate limit | **una reference per capability** (16 API), openapi.yaml pubblico | generata, v1/v2 | generata | developer platform | — | 2 guide, **nessuna reference** |
| Pensata per LLM | `.md` per ogni pagina, llms.txt, Copy page, Ask AI, Docs agent | `.md`, llms.txt, **server MCP della doc** | llms.txt per sezione e lingua | `.md`, MCP, Ask AI, Copy page | llms.txt annotato | llms.txt | — | **niente** |
| Feedback / freschezza | non osservato | widget nel Help Center | — | "Was this helpful", Edit page | — | — | **data di aggiornamento + feedback** | niente |
| Lingue | EN | EN + 12 | EN + DE | EN | EN | EN | EN | EN (IT rimosso) |
| Galleria use case / template | Use cases | Cookbook | template di agenti, prompt library | Cookbooks | — | per reparto | template con requisiti e input/output | esempio ricorrente (fabbrica di fasteners) ma nessuna galleria |

## 2. Cosa fanno bene i migliori, da copiare

1. **Divisione per audience fin dalla home.** Langdock (Using / Admin / Developer) e Glean (scelta del percorso "User Quickstart" o "Admin Setup") lo fanno meglio di tutti. OpenAI e Anthropic dividono gli stessi contenuti su più siti, e dalle loro debolezze si capisce che costa: SSO finisce in tre posti diversi.
2. **Admin come area a sé, con la sicurezza per prima.** Il workspace setup di Langdock parte da SAML/SCIM, poi passa a ruoli, modelli e accessi. Mistral ha quickstart admin con un tempo stimato.
3. **Una reference per ogni capability**, governance inclusa. Langdock ha API separate per audit log, governance, billing e user management, e mette a confronto in una sola pagina l'URL base del cloud e quello dedicato, con un warning sull'errore più frequente. Questo modello si applica pari pari al nostro on-prem.
4. **Pagine di errore e limiti con i messaggi letterali.** Anthropic distingue tre tipi di 429 diversi e dice come riconoscerli.
5. **"Cosa copre / cosa non copre"** nelle pagine di data retention, sia in Anthropic sia in Mistral. Mistral aggiunge anche come verificare che una funzione sia attiva.
6. **Pagine dei connettori molto strutturate**, come fa Dust: chi può configurarli, scope e permessi, frequenza di sync, limiti, sintomo e soluzione.
7. **Release notes utilizzabili.** Glean dà a ogni voce una riga "How to access" e un link alla doc. Mistral usa tag come SECURITY e DEPRECATED. Glean e Langdock hanno un feed RSS.
8. **Contenuti pensati per gli LLM.** È ormai la norma tra i migliori: `llms.txt`, una versione `.md` di ogni pagina, il pulsante Copy page. I più avanzati hanno un server MCP della documentazione (Anthropic, Cohere) o "Ask AI".
9. **Segnali di fiducia su ogni pagina.** Glean mostra "Last updated" e "Was this page helpful?", Cohere "Edit this page".
10. **Un tipo per pagina.** Diataxis e Mintlify dicono di decidere prima di scrivere se la pagina è un tutorial, un how-to, una reference o una spiegazione. Le pagine che mescolano i tipi vanno divise.

## 3. Debolezze comuni dei competitor: dove possiamo superarli

- **Contenuti dispersi su più siti** (OpenAI, Anthropic). Noi abbiamo un solo sito, e conviene tenerlo così.
- **On-prem e deploy privato documentati poco.** Cohere dice "hardware su ingaggio". Mistral non ha una guida on-prem completa. Noi abbiamo già install, update, backup e tunnel. È il nostro vantaggio differenziante e va reso evidente.
- **Pochi screenshot** (OpenAI, Dust, Glean). Noi ne abbiamo su 37 pagine, più i video e un esempio ricorrente (il team di agenti della fabbrica di fasteners). Pochi competitor hanno qualcosa del genere.
- **Pagine troppo lunghe** (Anthropic: la pagina sul prompt caching è di circa 155k caratteri) e **casing dei titoli incoerente** (OpenAI, Cohere, Langdock).
- **Changelog senza date** (Cohere) o fuori dalla documentazione (Langdock).

## 4. Gap di Rational, in ordine di priorità

### P0: fondamenta (bloccano tutto il resto)

| # | Gap | Evidenza nel repo | Riferimento |
|---|---|---|---|
| G1 | Nessuna style guide, nessun template, nessun linter, nessun CLAUDE.md | nessun file del genere nel repo | Google, Microsoft, Mintlify |
| G2 | Terminologia incoerente | Finetuning (20) / fine-tuning (27) / Fine-tuning (7); Control Room (42) / AI Control Room (10); Knowledge base (49) / knowledge base (33); RationalBI / Rational BI; touchpoint / Touchpoint | — |
| G3 | Ortografia UK e US mescolate | organisation 19 / organization 6; behaviour 27 / behavior 4; organise 14 / organize 10 | — |
| G4 | Formattazione dei percorsi UI incoerente | `**Settings → X**` (38) / `**Settings** → **X**` (96) | Google ui-elements |
| G5 | Callout incoerenti e "urlati" | `<Admonition>` JSX su 85 pagine con emoji e titoli IN MAIUSCOLO, `:::` su 3 | Google notices |
| G6 | File spazzatura, duplicati, stub | `website/add.png`, `website/settings`, `website/ai-model-registry` vuoti; `concepts/_Workflows and processing rules.mdx` duplicato; 5 stub in `_get-started/` e `_quick-start.mdx`; template di blog Docusaurus; `docs/sidebars.ts` obsoleto | — |
| G7 | Descrizioni di categoria sbagliate | Operational guides: *"This guide shows you, step by step, you'll learn how to…"* (frase rotta); Concepts e Control Room hanno la stessa descrizione | — |
| G8 | Parole riempitive | simply (19), just (31), easy (6), powerful (3) | Google tone |

### P1: struttura e contenuti mancanti

| # | Gap | Chi lo fa bene |
|---|---|---|
| G9 | **Informazioni organizzate per tipo di pagina, non per audience.** Chi amministra, chi costruisce e chi usa leggono le stesse tre sezioni | Langdock, Glean |
| G10 | **Release notes assenti.** Le PR di prodotto (#94–#99) aggiornano la doc, ma nessuno può vedere "cosa è cambiato" | Glean, Mistral |
| G11 | **Nessun hub di troubleshooting o FAQ.** Il troubleshooting è sparso in 10 guide | Glean, Dust, Anthropic (errori) |
| G12 | **Nessuna guida SSO/identity**, pur essendo citata in 5 pagine. Dal codice risulta che l'identity provider si configura per tenant lato piattaforma, senza una UI per IdP esterni né SCIM. La pagina va scritta su questo, con engineering | Langdock, Mistral, Anthropic |
| G13 | **Nessuna pagina su architettura, sicurezza e flussi dei dati.** Per un prodotto on-prem e "sovereign AI" è la pagina che i CISO cercano per prima | Glean (Security & Architecture), OpenAI (your-data) |
| G14 | **Nessun quickstart per ruolo** (admin installa, builder crea un agente, sviluppatore chiama l'API) | Mistral, Glean |
| G15 | **Contenuti non leggibili dagli LLM**: niente llms.txt, niente `.md`, niente Copy page | Langdock, OpenAI, Anthropic, Cohere |
| G16 | **Nessun segnale di freschezza o feedback** sulle pagine | Glean, Cohere |

### P2: crescita

| # | Gap | Chi lo fa bene |
|---|---|---|
| G17 | API reference generata da OpenAPI, una per capability (Agents, Knowledge, Touchpoints, BI, Fine-tuning, Deployments, Registry, Marketplace, API keys) | Langdock |
| G18 | Pagine di limiti, quote ed errori con i messaggi letterali | Anthropic, OpenAI |
| G19 | Galleria di use case e template per reparto, con connettori richiesti e input/output | Glean, Dust, Langdock |
| G20 | Playbook di adozione e rollout per gli admin | Langdock |
| G21 | Tutorial end-to-end: oggi c'è solo get-started, ma l'esempio della fabbrica di fasteners è già pronto per diventarlo | Diataxis |
| G22 | Italiano: decisione da prendere (vedi il piano) | Langdock EN/DE |

## 5. Punti di forza da preservare

- **Seconda persona** ("you" circa 2.460 volte, "we" circa 23), titoli orientati al task ("Connect the bot"), struttura con prerequisiti e step numerati, etichette UI in grassetto. Coincide già con la linea di Google e Microsoft.
- **`get-started.mdx`** è un buon quickstart: dice perché, prerequisiti, 4 step e cosa fare dopo.
- **Screenshot con alt text descrittivo, video ed esempio ricorrente** del team di agenti. Sono asset che i competitor non hanno.
- **Docs-as-code già funzionante**: ogni PR di prodotto aggiorna la doc, e ci sono commitlint e deploy su GitHub Pages.
- **Copertura di installazione, backup, tunnel e licenza** superiore a quella di Cohere e Mistral.

## Fonti

- Langdock: https://docs.langdock.com/llms.txt · https://docs.langdock.com/en/admin/workspace/workspace-setup · https://docs.langdock.com/en/developer/overview/api-introduction · https://docs.langdock.com/en/admin/ai-adoption-and-rollout/getting-started/onboarding-guide · https://docs.langdock.com/en/using-langdock/guides/agents/agent-creation · https://www.langdock.com/changelog
- OpenAI: https://learn.chatgpt.com/docs · https://learn.chatgpt.com/llms.txt · https://learn.chatgpt.com/docs/enterprise/admin-setup · https://learn.chatgpt.com/docs/whats-new · https://developers.openai.com/api/docs/guides/your-data · https://developers.openai.com/api/docs/quickstart
- Anthropic: https://platform.claude.com/docs/en/home · https://platform.claude.com/llms.txt · https://platform.claude.com/docs/en/api/errors · https://platform.claude.com/docs/en/api/rate-limits · https://platform.claude.com/docs/en/manage-claude/api-and-data-retention · https://support.claude.com/en/articles/13133195-set-up-single-sign-on-sso
- Cohere: https://docs.cohere.com/docs/welcome · https://docs.cohere.com/docs/private-deployment-overview · https://docs.cohere.com/changelog · https://docs.cohere.com/v1/llms.txt
- Mistral: https://docs.mistral.ai/ · https://docs.mistral.ai/admin · https://docs.mistral.ai/getting-started/quickstarts/admin/configure-sso · https://docs.mistral.ai/resources/changelogs · https://docs.mistral.ai/admin/monitor-comply/zero-data-retention
- Dust: https://docs.dust.tt/llms.txt · https://docs.dust.tt/docs/user-documentation/admins/connections-management/notion · https://docs.dust.tt/docs/changelog
- Glean: https://docs.glean.com/ · https://docs.glean.com/release-notes/ · https://docs.glean.com/security · https://docs.glean.com/agents/templates
- Framework e style guide: https://diataxis.fr/start-here/ · https://www.mintlify.com/docs/guides/content-types · https://developers.google.com/style/tone · https://developers.google.com/style/person · https://developers.google.com/style/ui-elements · https://developers.google.com/style/notices · https://learn.microsoft.com/en-us/style-guide/brand-voice-above-all-simple-human
