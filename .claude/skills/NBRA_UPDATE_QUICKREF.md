# Quick Reference: NBRA Collection Update

## One-Command Update Flow

### Step 1: Fetch new items from Zotero
```bash
cd /Users/rtenhove/Documents/01_WORKSPACE/02_ghs_wiki/ghs-wiki/.claude/skills/zotero-acquire
uv run --python 3.12 --with-requirements requirements.txt python fetch_zotero.py --collection NBRA
```
**Output**: New items written to `../../raw/papers/`

### Step 2: Generate wiki source page templates
```bash
cd /Users/rtenhove/Documents/01_WORKSPACE/02_ghs_wiki/ghs-wiki
python .claude/skills/process_stubs_batch.py --collection NBRA --mode=template
```
**Output**: Generated pages in `wiki/sources/` with templates to fill in

### Step 3: Enhance generated content
1. Open each new file in `wiki/sources/`
2. Replace placeholders:
   - `_[One to two sentence summary...]_` → Write actual TL;DR
   - `- _[Finding 1]_` → Fill in key findings
   - `- _[Implication 1]_` → Add implementation implications
3. Verify suggested concepts/entities, adjust as needed

### Step 4: Verify and commit
```bash
cd /Users/rtenhove/Documents/01_WORKSPACE/02_ghs_wiki/ghs-wiki
npm run build
git status
git add -A
git commit -m "ZOT_003: Add N new NBRA sources (date-published dates)"
git push origin main
```

---

## When to Use Each Method

| Scenario | Method | Time | Quality |
|----------|--------|------|---------|
| Regular weekly check | Template (Steps 1-4) | 30-40 min/5 items | High |
| Manual deep review | Manual (full read) | 60-80 min/5 items | Very High |
| Quick urgent update | Template only | 10-15 min per item | Medium |
| Batch mode testing | Dry-run | ~2 min | N/A |

---

## Troubleshooting

### No new stubs found
- Check Zotero is running and API is accessible
- Verify: `curl -i http://localhost:23119/api/users/0/collections`
- Should return HTTP 200

### Script not finding raw directory
- Ensure you're running from `ghs-wiki/` directory
- Or specify: `python .claude/skills/process_stubs_batch.py --new-stubs raw/papers/*.md`

### Generated concept/entity links are wrong
- Edit them manually in the generated page
- Or update `KEYWORD_CONCEPT_MAP` in process_stubs_batch.py

### Build fails after new sources
- Check markdown syntax in new files
- Verify frontmatter YAML is valid
- Run: `npm run check` for details

---

## File Locations

- **Fetch script**: `.claude/skills/zotero-acquire/fetch_zotero.py`
- **Batch processor**: `.claude/skills/process_stubs_batch.py`
- **Workflow guide**: `.claude/skills/zotero-update-workflow.md`
- **Raw stubs**: `raw/papers/` (temporary, not committed)
- **Wiki sources**: `wiki/sources/` (permanent, committed)
- **Index**: `wiki/index.md` (manually maintained for now)
- **Log**: `wiki/log.md` (append new entries)

---

## Manual Trigger Commands

To trigger an update in Claude chat/annotation:

```
Update ghs-wiki from NBRA collection using ZOT_003 workflow
(fetch → template → enhance → build → commit)
```

Or for dry-run preview:

```
Preview new NBRA items: process_stubs_batch.py --mode=dry-run
```
