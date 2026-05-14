---
type: concept
aliases: ["strategic foresight", "strategic-foresight", "corporate foresight", "futures thinking"]
tags: [strategic-foresight, scenarios, futures, signal-detection, FTSG, webb]
confidence: 0.80
last_confirmed: "2026-05-14"
source_count: 3
relationships:
  - type: part-of
    target: dynamic-capabilities
    via: "sensing-cluster microfoundation in the Teece framework"
  - type: supports
    target: enterprise-ai-adoption
    via: "informs deployment decisions under deep uncertainty"
---

# Strategic Foresight

A disciplined and systematic approach to **identifying where to play, how to win in the future, and how to ensure organizational resiliency in the face of unforeseen disruption**. Distinguished from generic "trend reports" by its quantitative rigor, scenario discipline, and integration with strategy execution.

## Working definition

Per [[2026-04-28-webb-strategic-foresight|Amy Webb (2024)]]:

> "Strategic foresight is a disciplined and systematic approach to identify where to play, how to win in the future, and how to ensure organizational resiliency in the face of unforeseen disruption."

Strategy and foresight are described as having been **a unified discipline** in the 1980s–90s and having drifted apart since. Webb argues they need to be reunited.

## Key claims

### Strategy ≠ foresight, but neither works alone

| Without foresight | Without strategy |
|---|---|
| Strategy is vulnerable to outside disruption | Foresight scenarios are unactionable |

### Three reasons corporate foresight currently fails

1. **No standard methodology / vocabulary** — practitioners disagree on "trend" vs. "strong signal" vs. "macro trend"; some call themselves futurists, others reject the term.
2. **Lack of rigor** — over-reliance on subject-matter-expert interviews, internal surveys, secondary sources; trend reports land as too broad/obvious because no quantitative model underpins them.
3. **Reluctance to make predictions** — "scenarios are forecasts not predictions" undermines perceived relevance to executive decision-making. Webb argues a scenario *is* a form of prediction.

### FTSG's 10-step methodology ([[2026-04-28-webb-strategic-foresight|Webb 2024]])

1. **Signal Detection** — primary research + expert insights + AI-driven pattern recognition (replacing horizon scanning).
2. **Trend Identification** — score on momentum, trajectory, disruptive potential.
3. **Macro Themes** — overarching themes from data-driven impact.
4. **Uncertainties** — categorized using **STREEEP + W**: Social, Technological, Regulatory, Environmental, Economic, Ethical, Political, + Wild cards.
5. **Develop Hypotheses About the Future** — combine trends + uncertainties via 2×2 matrices, Monte Carlo simulations.
6. **Scenarios** — research-backed; tailored, not template-based.
7. **Bridge to Strategy** — SWOT, challenging assumptions, testing adaptability.
8. **Strategy** — traditional strategic planning; align stakeholders, executive buy-in.
9. **Strategy Execution** — align roles with strategic goals; performance metrics.
10. **Measure and Recalibrate** — continuous monitoring; agile tactical adjustments.

### Convergence as the new unit of analysis ([[2026-04-28-ftsg-convergence-outlook-2026|FTSG 2026]])

FTSG's 2026 *Convergence Outlook* extends strategic foresight to a **convergence** unit:

> "A convergence is when multiple trends, forces, and uncertainties intersect and interact to create a combined impact that is greater — and often different in kind — than the sum of their individual effects."

Four rules of convergences:
1. System-level changes.
2. Create net new realities.
3. Redistribute power and value.
4. Hard to reverse.

Conditions enabling a convergence cycle (FTSG): general-purpose tech reaching scale simultaneously; cost of testing falling; legitimacy of existing order eroding; porous industry boundaries; slow systemic reorganization; rapid capital concentration; rising energy capacity. The 2026 Outlook claims all are present.

### Position foresight horizontally

- Strategic foresight is **interdisciplinary, not multidisciplinary** — should not be siloed.
- Should be **horizontally positioned**, working across marketing, finance, operations, product development.

### Worked examples

- **Netflix** — DVD → streaming pivot is a textbook foresight case (anticipated consumer-behavior shift).
- **Schibsted** (Oslo digital media) — used foresight to anticipate internet's threat to advertising; built its own digital advertising business ahead of time.
- **AI as bank infrastructure** (hypothetical) — Webb's worked example: smart-home compute marketplaces → banks become trusted intermediaries for peer-to-peer compute payments.

### Operator-grade forecasts (consumer tech)

Two operator-narrated forecasts from May 2026 belong here as **first-person foresight claims with explicit horizons**:

- **Humanity-as-adoption-bottleneck** ([[2026-04-26-how-to-win-when-software-is-not-a-moat-evan-spiegel-snapchat-ceo|Spiegel 2026]]): *"Humanity is far more important [than AI capability] because humanity dictates how technology is adopted … there's going to be a huge amount of societal pushback on a lot of the changes that are coming with AI."* The wiki's first **named-as-such humanity-as-bottleneck forecast** from a long-tenured consumer-tech operator, distinct from the more common *"compute is the bottleneck"* and *"alignment is the bottleneck"* framings.
- **Next-form-factor as the next consumer wave** (Spiegel 2026): glasses (and adjacent next-gen hardware form factors) as the platform shift that creates the next generation of consumer companies — analogous to mobile's role in producing Uber, Snapchat, and the 2010s consumer cohort. Spiegel pairs this with a worry: *"it's going to be very hard for a startup to get any attention with existing incumbents"* — so the form-factor shift is a *necessary but not sufficient* condition.

A complementary forecast at the enterprise-software layer comes from [[2026-05-05-stanford-ai-club-chamath-on-how-to-win-in-the-ai-era|Chamath 2026]]: the **trough of disillusionment is structurally guaranteed** unless long-horizon and complex AI tasks become reliable — a foresight claim that frames the trillion-dollar AI capex trajectory as **conditionally bounded** rather than smoothly extrapolating.

## Related concepts

- [[dynamic-capabilities]] — sensing-cluster microfoundations include scenario planning and digital scouting.
- [[systems-thinking]] — overlaps with foresight in treating the firm as embedded in a multi-actor system; convergence framing is systems-level.
- [[enterprise-ai-adoption]] — strategic foresight informs AI deployment decisions under deep uncertainty.
- [[automation-vs-augmentation]] — a strategic-positioning choice that benefits from foresight scenarios.

## Mentioned in

```dataview
LIST
FROM "wiki/sources"
WHERE contains(file.outlinks, this.file.link) OR contains(tags, "strategic-foresight") OR contains(tags, "foresight")
SORT file.name ASC
```

## Open questions

- The wiki currently reflects FTSG's lens (Webb's 10 steps; convergence framing). Comparison with academic futures-studies literature (Schwartz, Ramirez, Saritas) would broaden the concept.
- The 2026 *Convergence Outlook* is only ingested at the framing level; per-section deep-reads would substantially expand this concept.
