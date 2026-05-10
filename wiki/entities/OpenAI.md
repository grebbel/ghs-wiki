---
type: entity
kind: organization
aliases: ["OpenAI"]
tags: [openai, ai-lab, foundation-models, chatgpt, gpt-4, gpt-5, codex, agentic-engineering, sora, custom-gpts]
since: 2015
confidence: 0.90
last_confirmed: "2026-05-10"
source_count: 9
relationships:
  - type: employs
    target: Aaron-Chatterji
    via: "Chief Economist"
  - type: employs
    target: Gawesha-Weeratunga
    via: "Economic Research team"
  - type: employs
    target: Harrison-Satcher
    via: "Economic Research team"
---

# OpenAI

AI research and deployment company. Originator of **ChatGPT** (Nov 2022) and the **GPT-3 / GPT-4 / GPT-5** series. Self-described in [[2026-05-02-dutt-chatterji-ai-experimentation-to-transformation|the Bain/OpenAI HBR article]] as "an AI provider to over one million businesses."

## Models referenced in this wiki

- **GPT-3** — substrate of the customer-support augmentation system in [[2026-04-28-brynjolfsson-li-raymond-generative-ai-at-work|Brynjolfsson, Li & Raymond (2025) QJE]].
- **GPT-3.5 / ChatGPT** — the democratization breakthrough cited by [[2026-04-28-anand-wu-genai-playbook|Anand-Wu]] and the trigger for the [[generative-ai|GenAI]] adoption wave.
- **GPT-4** — basis of the [[2026-04-28-dellacqua-jagged-technological-frontier|Dell'Acqua et al. 2026 BCG RCT]] and the [[2026-04-29-boussioux-crowdless-future|Boussioux et al. 2024 crowdless-future study]].
- **GPT-5** — used by [[2026-02-11-lopopolo-codex-harness-engineering|Lopopolo's Codex team]] (Feb 2026) to generate the initial repository scaffold via Codex CLI.

## Products and tooling referenced in this wiki

- **Codex** — agent-driven software engineering platform documented in [[2026-02-11-lopopolo-codex-harness-engineering|Lopopolo 2026]]. Five months of internal use produced ~1M LOC and ~1,500 PRs across an internal product, with **0 lines of manually-written code** and throughput averaging 3.5 PRs / engineer / day across 7 engineers (increasing with team size).
- **Codex CLI** — command-line interface for Codex; used (with GPT-5) to generate the initial repository scaffold for Lopopolo's project. The wiki's first concrete operational reference to Codex CLI tooling.
- **Aardvark** — second agent operating on the same Codex-team codebase, named in passing in [[2026-02-11-lopopolo-codex-harness-engineering|Lopopolo 2026]] as a beneficiary of repository legibility investments. Not detailed.
- **Sora** — text-to-video model + social-network app. Surfaces in [[2025-12-01-marily-nika-pms-who-use-ai-will-replace-those-who-dont|Nika 2025]] as the parallel demo to Google Flow / Veo for PM-side promo videos, with the **Cameo** feature (custom-instruction-shipped — *"always make me look good"*; reportedly Mark Cuban's cameo auto-injects a Cost Plus Drugs ad). Marily / Claire's tentative read: *"the social-network aspect of it is a distribution method for the underlying API models — power users find what's possible, then commercial applications follow."*
- **Custom GPTs** — user-authored, system-prompt-+-knowledge ChatGPT instances. [[2025-12-01-marily-nika-pms-who-use-ai-will-replace-those-who-dont|Nika 2025]] demonstrates a domain-specific custom GPT ("AI Product GPT") seeded with a PRD template and the author's voice, used as a structured prompt-input-to-prototype-tool pipeline component. Operationally a domain-specific *Context-layer artifact* in [[2026-05-07-chatterjee-anatomy-of-agent-harness|Chatterjee's]] vocabulary.

## Research initiatives appearing in this wiki

- **Economic Research team** (led by Chief Economist [[Aaron Chatterji]]). Counterpart to Anthropic's [[Anthropic Economic Index]] initiative. Members in this wiki: [[Gawesha Weeratunga]], [[Harrison Satcher]].
- **Lowe's partnership** ([[2026-05-02-dutt-chatterji-ai-experimentation-to-transformation]]): launched **Mylow** (online customer-facing) and **Mylow Companion** (in-store associate-facing) AI interfaces in March 2025; Mylow Companion deployed across 1,700+ Lowe's stores.

## Other references

- Supporting partner of the [[AI Index]] (annual report from [[Stanford HAI]]).
- Anchor case in the [[2026-04-28-anand-wu-genai-playbook|Anand-Wu GenAI Playbook]] (ChatGPT as the access-democratization breakthrough).
- Subject of the open-source-AI strategic-analogy example (GPT-4 = Walmart, open source = fruit stand) discussed in [[2026-04-28-carroll-sorensen-strategy-analogy|Carroll & Sørensen 2024]].
- Investment-figure context: U.S. private AI investment $285.9B in 2025 ([[2026-04-30-ai-index-report-2026]]).

## Mentioned in

```dataview
LIST
FROM "wiki/sources"
WHERE contains(file.outlinks, this.file.link) OR contains(tags, "openai")
SORT file.name ASC
```

## Open questions

- The wiki has many references to GPT-4 / ChatGPT / OpenAI as substrate but no first-party OpenAI source has been ingested yet. The OpenAI Economic Research team's writing (this article, plus their independent research papers) is a candidate for a deeper deep-read once a primary OpenAI Economic Research publication is added.
