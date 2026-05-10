---
type: concept
aliases: ["agent development lifecycle", "ADLC", "agent SDLC", "agent lifecycle"]
tags: [agent-development-lifecycle, adlc, ai-agents, agent-engineering, lifecycle-frameworks, sdlc-parallel, build-test-deploy-monitor, agent-governance]
confidence: 0.80
last_confirmed: "2026-05-10"
source_count: 2
relationships:
  - type: part-of
    target: ai-agents
    via: "the SDLC-parallel process construct for agent engineering — design, evaluate, deploy, publish, observe"
  - type: uses
    target: agent-harness
    via: "the harness is the artifact the lifecycle constructs, validates, and operates"
---

# Agent Development Lifecycle (ADLC)

A **process** construct — analogous to the Software Development Lifecycle (SDLC) for traditional software — naming the recurring stages of building, validating, deploying, distributing, and operating an [[ai-agents|AI agent]]. The vocabulary first entered the wiki via Google's [[2026-04-22-cheung-ippolito-secchi-google-agents-cli|Agents CLI announcement]] (22 April 2026); a second formalization arrived from LangChain via [[2026-05-09-chase-agent-development-lifecycle|Chase 2026]] (9 May 2026), abstracting the lifecycle to vendor-agnostic phases.

As of 10 May 2026, **two independent formalizations** support this concept; confidence is `0.80`. Future ingests describing parallel lifecycles (Anthropic, Microsoft, AWS, or independent practitioners) will substantiate further.

## Working definition

An **agent development lifecycle** is the ordered (but iterating) set of stages a team works through to take an agent from idea to production and onward to maintenance. It is distinct from but tightly entangled with [[agent-harness]] — the harness is the *runtime layer* the lifecycle constructs, validates, and operates.

## The two formalizations side-by-side

The two formalizations describe the same construct at different levels of granularity. Google's wheel decomposes an agent build into 9 sequenced stages; Chase's loop collapses those stages into 4 phases plus a wrapping governance ring.

| Phase ([[2026-05-09-chase-agent-development-lifecycle\|Chase / LangChain]]) | Maps to Google's stages ([[2026-04-22-cheung-ippolito-secchi-google-agents-cli\|Cheung-Ippolito-Secchi]]) | Output |
|---|---|---|
| **Build** | Capability & Tool Exploration → Design Cognitive Architecture → Implement Tools → Context Engineering | The harness construction itself |
| **Test** | Evaluate → User Acceptance Testing | Datasets, metrics, experiments, simulations |
| **Deploy** | Deploy Infrastructure → CI/CD & Production | Durable runtime, sandboxes, virtual filesystem, prompt/context hub |
| **Monitor** | (implicit in Google's "Iterate on approach" return arrow) | Traces, signals, feedback, dashboards |
| **Iterate** | (Google's wheel inner arrow) | Continuous loop |
| **Govern** *(wraps the loop)* | (not formalized in Google's wheel) | Cost / tool access / audit trails / HITL / discoverability / shared infrastructure |

**Where the formalizations diverge:**

- **Governance** is centred in Chase's model (the wrapping ring); Google's 9-stage wheel does not name it as a separate concern.
- **Substrate-specificity**: Google's *Deploy Infrastructure* assumes Cloud Run / GKE / Agent Runtime as the substrate options; Chase's *Deploy* is vendor-agnostic (LangSmith Deployment, AWS AgentCore, custom Temporal-based runtimes are all valid).
- **Pre-stage**: neither formalization formalizes a *decision-to-build-an-agent-at-all* gate (build-vs-buy-vs-compose), though [[2026-05-05-nishar-nohria-end-of-one-size-fits-all|Nishar-Nohria 2026]]'s firm-boundary framework supplies the missing pre-stage logic.
- **Compounding loop / Telemetry-as-training-data**: Chase's *Monitor → Iterate* loop names this explicitly (*"Important traces become dataset examples, recurring failures become metrics, and production behavior becomes the foundation for the next round of improvement"*); Google's wheel does not name it — [[2026-05-07-chatterjee-anatomy-of-agent-harness|Chatterjee's]] *Compounding* layer would sit between Stage 9 (CI/CD & Production) and the wheel's *Iterate on approach* return arrow but is not separately staged.

## Google's nine-stage wheel ([[2026-04-22-cheung-ippolito-secchi-google-agents-cli|Cheung, Ippolito, Secchi 2026]])

The article presents an ADLC wheel with nine numbered stages, traced clockwise:

1. *(implicit start: idea / requirement)*
2. **Capability & Tool Exploration** — what does the agent need to do; what tools exist
3. **Design Cognitive Architecture** — agent topology, model selection, orchestration shape
4. **Implement Tools** — actual tool/function code
5. **Context Engineering** — system prompt assembly, retrieval, state shape
6. **Evaluate** — evalsets, trajectory scoring, contract checks
7. **User Acceptance Testing** — human-in-the-loop validation
8. **Deploy Infrastructure** — provision Agent Runtime / Cloud Run / GKE
9. **CI/CD & Production** — release pipeline, secrets, observability

with an inner arrow labelled **"Iterate on approach"** running back from late stages into Design Cognitive Architecture — the wheel is explicitly non-linear.

## Chase's four-phase loop + governance ring ([[2026-05-09-chase-agent-development-lifecycle|Chase 2026]])

> *"Build → Test → Deploy → Monitor"* — wrapped by *Govern*.

### Build (four sub-layers)

| Layer | Focus | LangChain | Outside LangChain |
|---|---|---|---|
| **Frameworks** | Abstractions for model calls, tools, prompts, retrieval, agent loops | LangChain | CrewAI |
| **Runtimes** | State, control flow, durability, persistence, human intervention | LangGraph | Temporal-based custom |
| **Harnesses** | Prompts, skills, MCP servers, hooks, middleware, memory, sometimes filesystem | Deep Agents | Claude Agent SDK |
| **No-code** | Domain experts configure agents directly | LangSmith Fleet | Claude Cowork, n8n |

This sub-layering is **load-bearing for the wiki's [[agent-harness|harness]] vocabulary** — see the [§Refined Build-layer vocabulary](agent-harness.md#refined-build-layer-vocabulary-chase-2026) section in [[agent-harness]] for the cross-cutting implications.

### Test

- **Datasets**: representative tasks built from manual testing, dogfooding, support tickets, prior traces, known edge cases.
- **Metrics**: ground-truth correctness for extraction/classification tasks; criteria-based evaluation for multi-valid-path tasks (was the response grounded? did the agent follow policy? did it ask for clarification? did it complete efficiently?).
- **Experiments**: compare prompts/models/retrieval/tool schemas/orchestration patterns against the same eval set; show whether the agent is improving or regressing.
- **Simulations**: multi-turn evaluation (voice agents, support agents, coding agents, internal-ops agents). *"For those agents, single-turn evals are not enough."*

### Deploy (more than hosting)

- **Durable runtime** — checkpoint progress, resume on failure (LangSmith Deployment, AWS AgentCore, Temporal).
- **Sandboxes** — isolated execution with reduced blast radius (LangSmith Sandboxes, Daytona, E2B).
- **Virtual filesystem** — when sandbox is overkill (Deep Agents pattern; Postgres/S3-backed).
- **Prompt / context hub** — store / version / review / update non-code parts (prompts, retrieval context, skills, task instructions). *"They may also need to be edited by people who are not engineers."*

### Monitor

> *"An agent can return a technically successful response and still fail the task itself."*

- **Traces** — full trajectory (inputs / model calls / tools invoked / outputs / final response). *"If you cannot see the trajectory, you cannot reliably debug the behavior or turn those failures into future evals."*
- **Signals** — LLM-as-judge + simpler regex-based signals; double as product analytics.
- **Feedback** — LLM-judge + regex + human review + direct user feedback, attached to the underlying run.
- **Dashboards** — usage / feedback / latency / cost / tool calls / evaluator scores / recurring failure patterns; alerts on rising latency, increasing costs, failing tools, declining feedback, policy violations.

### Iterate

Hill-climbing over the loop. *"Teams with datasets, experiments, tracing, feedback, and dashboards can learn directly from real real usage. They can test changes before rolling them out broadly, identify what broke in production, turn failures into evals, and improve the agent without relying on guesswork."*

### Govern (six axes)

- **Cost** — budgets, usage monitoring, alerts, visibility.
- **Tool access** — clear controls on which tools, under what conditions, on whose behalf.
- **Audit trails** — for every tool call, inspect agent / inputs / outputs / authorization.
- **Human-in-the-loop** — designed in from the start; some operations should pause for review.
- **Discoverability / reuse** — shared prompts, skills, tools, retrieval sources, policies, agents must be findable. *"Especially important for skills."*
- **Repeatable infrastructure across teams** — the most effective orgs invest in shared infrastructure so every team isn't rebuilding eval/deploy/tracing/feedback/dashboards from scratch.

## Mapping to wiki vocabulary

| ADLC stage / phase | Closest existing wiki concept | Notes |
| ---------- | ----------------------------- | ----- |
| Capability & Tool Exploration | (none yet) | discovery / scoping work; pre-engineering |
| Design Cognitive Architecture | [[ai-agents]] (chatbot → agent → multi-agent progression) | topology choice |
| Implement Tools | [[agent-harness]] — Layer 2/3 plumbing | tool execution + retry + permission middleware |
| Context Engineering | [[agent-harness]] — Context layer ([[2026-05-07-chatterjee-anatomy-of-agent-harness\|Chatterjee]]) | system prompt as document, KV-cached stable parts + dynamic |
| Evaluate / Test | [[agent-harness]] — Contracts layer ([[2026-05-07-chatterjee-anatomy-of-agent-harness\|Chatterjee]]); Chase's 4-step Inputs → Datasets → Metrics → Experiments | formal evaluable specifications of "done"; criteria-based scoring for multi-valid-path tasks |
| User Acceptance Testing | (analog: HITL middleware in [[agent-harness]] — Constraints layer) | human checkpoint before production traffic |
| Deploy Infrastructure | (Google Cloud / hyperscaler substrate; LangSmith / AWS AgentCore / Temporal) | Vendor-specific in Google; vendor-agnostic in Chase |
| CI/CD & Production | (standard SRE) | pipeline, secrets, observability |
| Monitor | [[agent-harness]] — Compounding layer ([[2026-05-07-chatterjee-anatomy-of-agent-harness\|Chatterjee]]); Chase's 4 components (traces / signals / feedback / dashboards) | telemetry → datasets → next-iteration evals |
| Iterate | (loop construct, not a stage) | Compatible with the wiki's hill-climbing reading of [[2026-05-07-kiron-schrage-compound-benefits\|Kiron-Schrage]] |
| Govern | candidate concept *agent governance* (not yet promoted) | Six axes named by Chase; deferred to second-source mention |

The lifecycle's **Stages 4–6** (Implement Tools / Context Engineering / Evaluate) are precisely where the harness lives. The ADLC and the harness are not competing constructs — the ADLC is the *process* through which the harness gets built, while the harness is the *artifact* the process produces and operates.

## Worked example: OpenAI Codex ([[2026-02-11-lopopolo-codex-harness-engineering|Lopopolo 2026]])

Lopopolo's account of the OpenAI Codex internal-product team's five-month engineering practice is the wiki's first **end-to-end worked example** of the lifecycle running in production at vendor scale — though Lopopolo himself does not use the *ADLC* vocabulary:

| Lifecycle phase | What the Codex team built |
|---|---|
| **Build** | ARCHITECTURE.md, layered-domain Providers interface, custom linters (Codex-generated); progressive-disclosure AGENTS.md as table-of-contents to deeper sources |
| **Test** | Per-worktree observability stack (LogQL / PromQL / TraceQL); Chrome DevTools Protocol wired into runtime for UI validation; 100% test coverage |
| **Deploy** | gh + repository-as-system-of-record; per-worktree app instances; ephemeral local observability; "minimal blocking merge gates" |
| **Monitor** | Taste-invariant scans, golden-principle GC, doc-gardening agent — all event-driven hook-shaped |
| **Iterate** | Review feedback → doc updates → linter rules; "human taste captured once, then enforced continuously on every line of code" |
| **Govern** | Mechanical layer enforcement (forward-only dependency direction); single Providers interface for cross-cutting concerns (auth, telemetry, feature flags); "enforce boundaries centrally; allow autonomy locally" |

The Codex team substantiates the lifecycle as **a real engineering practice**, not just a marketing taxonomy. It also extends [[agentic-engineering]] with concrete operational data: 1,500 PRs in 5 months, 7 engineers, 3.5 PRs / engineer / day, throughput *increasing* with team size — built with **0 lines of manually-written code**.

## Open questions

- **Vendor-specificity vs. genericness**: now two formalizations (Google + LangChain). Whether other vendors (Anthropic, Microsoft, AWS) converge on similar phasings is unresolved. Watch for a third formalization in 2026 — three would be enough to consider this a *cross-vendor stable construct*.
- **Pre-stage work**: neither formalization names a *decide-to-build-an-agent* gate (cf. [[2026-05-05-nishar-nohria-end-of-one-size-fits-all|Nishar-Nohria's]] firm-boundary framework). Worth tracking whether subsequent formalizations include build-vs-buy-vs-compose gates.
- **Compounding loop / Telemetry-as-training-data**: Chase names it (*"Important traces become dataset examples"*); Google does not. Worth tracking whether more mature vendor / practitioner formalizations name the compounding loop explicitly. [[2026-05-07-chatterjee-anatomy-of-agent-harness|Chatterjee's]] Compounding layer is the strongest existing articulation; Chase's Monitor → Iterate loop is the second.
- **Agent governance as candidate concept**: Chase's six axes (cost / tool access / audit trails / HITL / discoverability / shared infrastructure) name an emerging concept currently single-source. Promote on second-source mention.
- **Simulation as evaluation primitive**: also single-source for now. Promote on second-source mention.
- **Promote or fold**: this concept is now substantiated enough to stand. Does it need any further sub-pages (e.g. *agent governance*, *agent evaluation*) or does it absorb them?

## Mentioned in

```dataview
LIST
FROM "wiki/sources"
WHERE contains(file.outlinks, this.file.link) OR contains(tags, "agent-development-lifecycle") OR contains(tags, "adlc")
SORT file.name ASC
```

## Debates and supersession

- **Stage count vs. phase count.** Google's 9-stage wheel and Chase's 4-phase loop describe the same lifecycle at different granularities. Neither supersedes the other — they are complementary vantages.
- **Does the Compounding loop deserve its own stage?** The wiki's [[agent-harness|agent-harness]] page names it as the fourth Chatterjee layer; Chase's Monitor + Iterate phases together cover it; Google's 9-stage wheel elides it. Open question: does it become a named stage in subsequent ADLC formalizations.
