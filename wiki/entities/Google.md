---
type: entity
kind: organization
aliases: ["Google", "Google LLC", "Alphabet (operating subsidiary)"]
tags: [google, big-tech, hyperscaler, ai-lab, foundation-models, gemini, google-cloud, google-research, gemini-api, file-search, multimodal-rag, notebooklm, flow, veo, ai-product-management]
since: 1998
confidence: 0.82
last_confirmed: "2026-05-10"
source_count: 4
relationships:
  - type: published-by
    target: 2026-04-22-cheung-ippolito-secchi-google-agents-cli
    via: "Google Developers Blog announcement of Agents CLI in Agent Platform"
---

# Google

Big-tech platform company; operating subsidiary of Alphabet. Within this wiki Google appears primarily in three roles: **AI lab** (Gemini family of foundation models, ADK harness framework), **cloud hyperscaler** (Google Cloud Platform and the Agent Platform that hosts agent-runtime infrastructure), and **research publisher** ([[Google Research]] preprints and reports). The wiki holds a small but growing primary-source footprint on Google as of May 2026 — see *Mentioned in* below for current edge count.

## Sub-organizations and brands appearing in the wiki

- [[Google Research]] — research arm; producer of the Gemini model family; anchor of the durable-skills measurement work ([[2026-05-07-globerson-et-al-scalable-measurement-durable-skills|Globerson et al. 2026]] / Vantage / Executive LLM platform).
- **Google Cloud / Google Cloud Platform** — hyperscaler division. Surfaces in this wiki via Cloud Run, GKE, Agent Runtime, Cloud Build, Cloud Trace / Logging / Monitoring as deployment, CI/CD, and observability substrates for agents. Sponsor of the Agents CLI announcement.
- **Google Developers** — developer-relations division publishing the Google Developers Blog; the channel for the [[2026-04-22-cheung-ippolito-secchi-google-agents-cli|Agents CLI]] announcement.
- **Gemini Enterprise** — enterprise distribution surface for agents registered via the Agents CLI. (Single-source mention; promote on second-source coverage.)

## Platform / product engineering

- **Agent Platform** — Google Cloud's umbrella for agent-runtime infrastructure.
  - **Agents CLI in Agent Platform** — released 22 April 2026 as the unified programmatic backbone for the [[agent-development-lifecycle|Agent Development Lifecycle (ADLC)]]; bundles **seven specialized skills** (Workflow / ADK Code / Scaffold / Evaluation / Deployment / Publish / Observability); two-mode design (Agent Mode for AI coding agents, Human Mode for deterministic CLI use). See [[2026-04-22-cheung-ippolito-secchi-google-agents-cli]].
  - **Agent Runtime / Cloud Run / GKE** — three deployment substrates the CLI targets via `agents-cli deploy`.
- **ADK (Agent Development Kit)** — Google's open-source agent-engineering framework. Listed in [[2026-05-07-kokane-agent-harness-vs-systems-design|Kokane's]] Layer 2 harness-frameworks alongside LangChain, Microsoft Agent Framework, LlamaIndex, CrewAI, Haystack, DSPy. The Agents CLI's **ADK Code** skill is the Python-API reference surface for ADK.
- **A2A / A2UI / MCP integration** — Google Cloud names A2A and A2UI alongside MCP as the agent-integration protocols the platform supports natively.

## Models referenced in this wiki

- **Gemini family** — the Google Research foundation-model line referenced as the autorater substrate in [[2026-05-07-globerson-et-al-scalable-measurement-durable-skills|Globerson et al. 2026]] (Pearson r = 0.88 vs human experts on creativity assessment).
- **Gemini CLI** — Google's coding-agent CLI; named as an Agents-CLI consumer alongside Claude Code and Cursor in the [[2026-04-22-cheung-ippolito-secchi-google-agents-cli|Agents CLI]] announcement.
- **Gemini API File Search** — hosted RAG primitive on the Gemini API. May 2026 update added multimodal support (via **Gemini Embedding 2**), custom metadata filters, and page-level citations. See [[2026-05-05-google-gemini-file-search-multimodal]].
- **Gemini Embedding 2** — Google's multimodal embedding model (text + images), powering File Search as of May 2026.
- **`gemini-3-flash-preview`** — generation model demonstrated in the File Search code sample.
- **NotebookLM** (notebooklm.google) — Google's note-taking / multi-source-research tool with **audio-overview** and (newer) video-overview features. Surfaces in [[2025-12-01-marily-nika-pms-who-use-ai-will-replace-those-who-dont|Nika 2025]] as an unconventional **AI-as-judge** pattern: upload all student-pitch audio recordings into one notebook, prompt the audio-overview hosts with judging criteria, generate a live interactive radio-podcast that announces winners. Two-way interactive mode allows audience call-ins.
- **Flow** (Google Labs, labs.google/flow) — text-to-video creator app, powered by Veo. Used in [[2025-12-01-marily-nika-pms-who-use-ai-will-replace-those-who-dont|Nika 2025]] for the smart-fridge promotional clip generation.
- **Veo** — Google's video-generation model, the engine behind Flow. Also referenced in passing as a tool a PM can prompt directly with PRD-derived content.
- **Google AI Studio (prototyping)** — named in [[2025-12-01-marily-nika-pms-who-use-ai-will-replace-those-who-dont|Nika 2025]] alongside v0 and Lovable as a vibe-coding-class prototyping tool. Not deeply demonstrated.

## People at Google referenced in this wiki

- **Marily Nika** — AI Product Lead at Google; founder of the AI Product Academy (separate from her Google role). First wiki source mention by name in [[2025-12-01-marily-nika-pms-who-use-ai-will-replace-those-who-dont|Nika 2025]] (How I AI). Per the [author-entity-promotion rule](../../CLAUDE.md#author-entity-promotion), do not promote on a single source.
- **James Manyika** — see [[James Manyika]] entity (already in the wiki).
- **Jaana Dogan** — engineering leader on Gemini API, surfaced via [[2026-05-07-kiron-schrage-compound-benefits|Kiron-Schrage 2026]]'s anchor anecdote (*"It's not perfect and I'm iterating on it."*). Single-source first mention; not yet promoted.
- **Ivan Solovyev / Kriti Dwivedi** — Gemini File Search team members; see [[2026-05-05-google-gemini-file-search-multimodal|Solovyev & Dwivedi 2026]].

## Google DeepMind

The combined Google AI research org (formed via DeepMind / Google Brain merger). Surfaces here as the publishing org for [[2026-05-05-google-gemini-file-search-multimodal|the Gemini File Search multimodal announcement]] (Solovyev's team affiliation). Distinct from [[Google Research]] (the older Research arm), though boundaries are not always clear in public-facing communications. Promote to its own entity page on second-source mention if the editorial distinction becomes load-bearing.

## Mentioned in

```dataview
LIST
FROM "wiki/sources"
WHERE contains(file.outlinks, this.file.link) OR contains(tags, "google") OR contains(tags, "google-cloud")
SORT file.name ASC
```

## Open questions

- **Cross-product coherence.** Two Google primaries in the wiki within ten days (Globerson et al. 2026 from Google Research; Cheung et al. 2026 from Google Developers) hint at a broader Google agent-platform thesis. Whether Google's positioning is *Gemini-as-substrate + agent-platform-as-runtime + assessment-as-product* or something looser will become clearer with more sources.
- **ADK as concept page.** ADK is referenced from three sources but currently treated as a brand mention on this entity. If a primary ADK technical-deep-dive lands, ADK could justify its own concept (or product-entity) page.
- **Gemini family entity.** The wiki has [[Anthropic]]'s Claude family enumerated explicitly (Sonnet 4.5 / Opus 4.5 / Opus 4.6) but does not yet have the parallel for Gemini. Worth filling on second-source coverage.
