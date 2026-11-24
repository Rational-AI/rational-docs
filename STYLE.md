# Rational docs style guide

How we write docs.rational.is. Where this guide is silent, follow the [Google developer documentation style guide](https://developers.google.com/style). Lint with Vale: `vale website/docs`.

## 1. Who we write for

| Reader | Arrives wanting to… | Typical page |
|---|---|---|
| **User** (business user in the Chat, BI, Gen) | get an answer, finish a task | how-to, short concept |
| **Builder** (sets up Knowledge, touchpoints, agents, workflows) | make something work end to end | tutorial, how-to |
| **Admin / IT** (installs, secures, governs) | install, secure, prove compliance | how-to, reference, security |
| **Developer** (API, extensions, MCP) | call it, extend it | reference, code-first how-to |

Before you write, name the reader and the **page type**: tutorial, how-to, reference or concept. One page, one type. If a page explains a concept, walks through a setup *and* lists every option, split it.

## 2. Our voice: three principles

> Numbers and limits in the ✅ examples throughout this guide are illustrative, not product facts. Check them before reusing.

The voice stays the same everywhere. The tone changes with the reader's situation (see §3).

**1. The colleague who has already done it.**
Write as an experienced engineer sitting next to the reader: calm, specific, on their side. Don't sell and don't lecture.
- ✅ "Creating a Knowledge also creates a touchpoint for it, so you can chat with it straight away."
- ❌ "Rational AI's powerful Knowledge engine seamlessly empowers you to…"

**2. Exact over impressive.**
Name the real button, the real default, the real limit, the real error message. A number beats an adjective.
- ✅ "Runs time out after 30 minutes. Raise the limit in **Settings** → **Agents** → **Runtime**."
- ❌ "Runs may take a while depending on various factors."

**3. Honest about edges.**
Say what a feature does *not* do, what is irreversible, and what happens to data. Our readers deploy on-prem because they care about control, so tell them where the edges are.
- ✅ "Erasing a person's data cannot be undone. Conversation summaries that mention them are erased too."
- ❌ "Data can be removed easily when needed."

## 3. Tone by page type

| Page type / situation | Tone | Example opener |
|---|---|---|
| Get started, tutorial | Warm, encouraging, visible progress | "In ten minutes you'll have an assistant that answers from your own files." |
| How-to | Direct, minimal, imperative | "To connect Telegram, you need a bot token from BotFather." |
| Reference (settings, API, limits) | Neutral, complete, scannable. Tables, not prose | "**Chunk size** · Integer, 100–4000 tokens. Default: 800." |
| Concept | Explanatory, one idea at a time, one analogy at most | "An embedding turns text into numbers so that similar meanings sit close together." |
| Security, compliance, data | Serious and precise. No jokes, no softeners | "Audit events are retained for 365 days and cannot be edited." |
| Errors, troubleshooting | Calm, symptom first, no blame | "If the sync stops at 0%, the connector can't reach the source. Check…" |
| Release notes | Factual: what changed, who gets it, how to reach it | "Agents can now ask for approval before writing files. Turn it on in…" |

## 4. Rules

### Person, mood and tense
- Address the reader as **you**. Use **we** only for Rational the company, and sparingly ("We recommend…" is fine, "Let's…" is not).
- Write steps in the **imperative**: "Select **Save**." Not "You can select Save" or "Now we'll save".
- Write the software's behaviour in the **third person, present tense**: "The agent opens a run." Not "will open".
- Use the **active voice**. Passive is OK only when the actor doesn't matter: "Files are chunked on upload."

### Sentences and paragraphs
- **One idea per sentence. Aim for 15–20 words, and stay under 25.**
- **Paragraphs: 3 sentences max.** If a paragraph contains a sequence, make it a numbered list.
- Lead with the goal or condition: "To rename a group, select…" / "If the model isn't listed, …"
- No em-dash chains. Use one em dash per sentence at most, or prefer a full stop.

### Headings
- **Sentence case** everywhere: "Configure the chunking strategy", not "Configure The Chunking Strategy".
- How-to H1 and H2: **start with an imperative verb** ("Connect a model", "Add your data").
- Concept H1: a noun phrase ("Retrieval-augmented generation").
- Reference H1: the object ("Knowledge settings").
- No numbering inside headings, except in sequential tutorial sections ("1. Connect a model").

### UI elements
- Put UI labels in **bold**, exactly as they appear on screen, capitalization included.
- Write navigation paths with **each label bolded on its own** and a spaced arrow: **Settings** → **Knowledge** → **AI Search**.
- Verbs: **select** for buttons, tabs, menu items and options; **enter** for typing into fields; **turn on / turn off** for switches; **select / clear** for checkboxes; **press** for keys. Never "click on", "hit", "toggle" or "check".
- Don't add "button", "tab" or "field" unless it removes ambiguity.
- Don't give directions: no "above", "below", "on the right". Name the element or link to it.
- Code, values, file names, environment variables and endpoints go in `code font`.

### Callouts (admonitions)
Use the native syntax and only these four types:

```mdx
:::note
Useful, not critical. The reader can skip it.
:::

:::tip
A faster or better way to do the same thing.
:::

:::warning
Proceed carefully. Something may not behave as expected.
:::

:::danger[Irreversible]
Data loss, security exposure, or an action that can't be undone.
:::
```

- **One callout per section at most, never two in a row.** Write the content as normal text first, then decide whether it really needs a box.
- Never put prerequisites, required steps or the main point inside a callout.
- Callout titles are optional, in sentence case, with no emoji and NOT IN CAPITALS.

### Words to avoid

| Avoid | Why | Use instead |
|---|---|---|
| simply, just, easy, easily, quickly, obviously | Makes readers who struggle feel stupid | delete the word |
| powerful, seamless, robust, cutting-edge, leverage, empower | Marketing, carries no information | say what it does |
| please, please note, kindly | Filler | the instruction itself |
| in order to | Wordy | to |
| click on, hit, toggle (verb) | Imprecise | select, turn on/off |
| above, below, right-hand | Breaks on mobile and in translation | name the element, link it |
| e.g., i.e., etc. | Hard to read and translate | for example, that is, and so on |
| ! (exclamation mark) | Shouting | full stop |
| will (for system behavior) | Future tense makes it vague | present tense |

### AI slop

Many pages are drafted with AI. That's fine, but the result must not read like it. Readers stop trusting a page as soon as they spot the patterns below. The test: if a sentence could move unchanged to another product's docs, cut it or replace it with a fact about Rational AI.

| Pattern | Example | Fix |
|---|---|---|
| Slop vocabulary | delve, foster, leverage, utilize, facilitate, empower, streamline, robust, seamless, powerful, harness, unlock the power of, elevate, paramount, multifaceted | the plain verb: use, help, can, let |
| Stock phrases | it's worth noting, when it comes to, at its core, in terms of, going forward, in conclusion | delete, start with the point |
| Importance puffery | plays a vital role, a testament to, pivotal, underscores the importance | state the fact, let the reader judge |
| Binary contrast | "It isn't a countdown. It's a reminder." / "not just X but Y" | say Y directly |
| Trailing "-ing" explanations | "…adds file search, highlighting our focus on…" | say the concrete consequence: "…so you can find old files without leaving the chat" |
| Fake-strong verbs | serves as, acts as a central hub | is, has, or what it actually does |
| Telling the reader what to think | as you can see, the key point is, this distinction matters | delete. The facts carry the weight |
| Colon reveals | "The best part: it learns." | a plain sentence |
| Synonym cycling | agent → assistant → tool for the same thing | repeat the right term (§5) |
| Recap endings | a last paragraph that restates the page ("You now have…") | end with **Next steps** |
| Em-dash rhythm | more than one em dash per paragraph | full stops, commas |
| Decorative formatting | emoji in headings or callouts, bold mid-sentence for emphasis, bullets for two sentences of prose | plain prose. Bold is for UI labels |

Vale flags the first six patterns and em dashes (`Rational.Slop`, `Rational.SlopPatterns`, `Rational.EmDash`). Colon reveals, synonym cycling and recap endings need a reader, so the PR checklist includes a detect pass (§7).

### Spelling, numbers and dates
- Use **US English** (organization, behavior, customize), the convention of the Google and Microsoft guides and of the Vale packages we lint with.
- Numbers: write zero to nine as words in prose and 10+ as digits. Always use digits with units ("5 GB", "3 minutes").
- Dates: "November 24, 2026" in prose, ISO `2026-11-24` in tables and changelogs.
- Use the Oxford comma.

### Links
- Link text says where the reader is going: "see [Create a Knowledge](…)", never "click [here](…)".
- Link a term the first time it appears on the page, not every time.
- Never use empty or placeholder links (`[role](#)`).

### Images and video
- Show a screenshot only for a step that needs it (finding a control, checking a result), not every step.
- Always give alt text that says what the image shows *and why it matters*: "The Agents team page listing five agents with their granted tools".
- Use a video for a walkthrough, never as the only source of an instruction. The steps must also be in text.
- Keep the shared running example (the fastener manufacturer's agent team) across guides. It is an asset.

## 5. Terminology

Product nouns appear in the UI, so they follow the UI. Generic concepts stay lowercase.

| Use | Not | Notes |
|---|---|---|
| **AI Control Room** on first mention, then **Control Room** | the control room, CR | Product name |
| **Rational AI** (company and platform) | Rational.ai, rational | |
| **Rational BI**, **Rational Gen** | RationalBI | Two words |
| **Knowledge** (the object you create: "create a Knowledge") | knowledge base, KB | ⚠️ Team to confirm, see open decisions |
| **touchpoint** (lowercase in prose, **Touchpoints** when it's the UI label) | Touchpoint mid-sentence | |
| **agent**, **run**, **routine**, **skill**, **task** | | lowercase in prose |
| **fine-tuning** (noun), **fine-tune** (verb) | Finetuning, finetune | |
| **AI Model Registry** | model registry, Registry | UI label |
| **extension**, **Marketplace** | plugin, add-on | |
| **connector** vs **source** | | connector = credentials to a service; source = what gets synced |
| **on-premises** (adj.), **on-prem** OK in headings | on-premise | |
| **sign in** (verb), **sign-in** (noun) | log in, login | |
| **SSO**, **SAML**, **SCIM**, **RAG**, **LLM** | | Spell out on first use per page |

New product terms go into this table *before* they appear in the docs.

## 6. Before and after, from our own pages

**1. A wall of text becomes steps.** `operational-guides/roles-and-users.mdx`
> ❌ "**Settings** → **Groups** lets you organize users into groups so you can manage permissions in bulk: instead of granting access user by user, you assign rights to a whole group at once, which keeps access consistent across everyone in it. The page lists your groups with their **Name**, **Description**, and **Users** count, and a fresh tenant simply shows "No groups yet" until you add one. To create a group, click **New**, give it a **Name** and a **Description**, and then add the users who belong to it. Keep in mind that a user's effective permissions come from their [role](#) combined with any groups they belong to…"

> ✅ Groups let you grant access to many users at once.
> 1. Go to **Settings** → **Groups** and select **New**.
> 2. Enter a **Name** and a **Description**.
> 3. Add the users who belong to the group.
>
> A user's permissions are their [role](/operational-guides/roles-and-users#roles) plus the permissions of every group they belong to.

**2. Remove "simply".** `cr/settings/extensions.mdx`
> ❌ "Touchpoints that used its tools survive and simply lose those bindings."
> ✅ "Touchpoints that used its tools keep working without those tools."

**3. A shouting callout becomes plain text.** `operational-guides/get-started.mdx`
> ❌ `<Admonition type="info" icon="📖" title="THE FOUR PIECES">You'll meet four building blocks…`
> ✅ `:::note[Four building blocks]` … or, better, a short H2 "How the pieces fit", since this is core content and not an aside.

**4. Bold used for meaning, not decoration.** `concepts/RAG.mdx`
> ❌ "This approach improves: **accuracy**, **relevance**, **domain alignment**, **transparency of sources**, and **user trust**."
> ✅ "Because answers come from retrieved documents, they are more accurate, cite their sources, and use your organization's terms."

**5. Broken description.** `operational-guides/_category_.json`
> ❌ "This guide shows you, step by step, you'll learn how to set up, configure, and operate the platform…"
> ✅ "Step-by-step guides to set up, configure, and run Rational AI."

**6. Vague becomes exact.** (pattern to apply everywhere)
> ❌ "Syncing may take some time depending on the size of your data."
> ✅ "A first sync of 1,000 documents takes about 10 minutes. Progress shows in **Sources** → **Status**."

## 7. Page checklist (paste into every PR)

- [ ] The page has one type (tutorial / how-to / reference / concept), declared in front matter
- [ ] The first sentence says what the reader will be able to do, or what the thing is
- [ ] Prerequisites list roles or permissions and anything that must exist first
- [ ] Steps are numbered, imperative, and one action each
- [ ] UI labels are bold and match the product exactly, with paths written **A** → **B**
- [ ] No "simply / just / easy / please / powerful", no exclamation marks
- [ ] Headings are in sentence case; how-to headings start with a verb
- [ ] At most one callout per section, none back to back
- [ ] Terms match §5
- [ ] Screenshots have meaningful alt text and match the current UI
- [ ] It ends with next steps (2–3 links)
- [ ] Vale passes, including the `Rational.Slop*` rules
- [ ] AI-slop detect pass done (the `no-ai-slop` skill in detect mode, or a human read against the "AI slop" table); every flagged line fixed or justified in the PR

## Sources
Google developer documentation style guide: [tone](https://developers.google.com/style/tone), [person](https://developers.google.com/style/person), [UI elements](https://developers.google.com/style/ui-elements), [notices](https://developers.google.com/style/notices). Microsoft: [brand voice](https://learn.microsoft.com/en-us/style-guide/brand-voice-above-all-simple-human). Page types: [Diataxis](https://diataxis.fr/start-here/), [Mintlify content types](https://www.mintlify.com/docs/guides/content-types).
