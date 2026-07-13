import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../quartz/components/types"
import { classNames } from "../quartz/util/lang"

// Render explicit provenance links for source pages so users can jump from
// a wiki summary to the published record or Zotero item in one click.
export default (() => {
  const SourceRecordPanel: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const fm = (fileData.frontmatter ?? {}) as Record<string, unknown>
    if (fm.type !== "source") return null

    const url = typeof fm.url === "string" ? fm.url.trim() : ""
    const doi = typeof fm.doi === "string" ? fm.doi.trim() : ""
    const zoteroKey = typeof fm.zotero_item_key === "string" ? fm.zotero_item_key.trim() : ""

    if (!url && !doi && !zoteroKey) return null

    const doiHref = doi ? `https://doi.org/${doi}` : null
    const zoteroLocalHref = zoteroKey
      ? `http://localhost:23119/api/users/0/items/${zoteroKey}`
      : null

    return (
      <section class={classNames(displayClass, "source-record-panel")}> 
        <h3>Source Record</h3>
        <ul>
          <li>
            <strong>Published URL:</strong>{" "}
            {url ? <a href={url}>{url}</a> : <span>Not provided</span>}
          </li>
          <li>
            <strong>DOI:</strong>{" "}
            {doi && doiHref ? <a href={doiHref}>{doi}</a> : <span>Not provided</span>}
          </li>
          <li>
            <strong>Zotero item:</strong>{" "}
            {zoteroKey && zoteroLocalHref ? (
              <>
                <span>{zoteroKey}</span>
                {" ("}
                <a href={zoteroLocalHref}>Local API</a>
                {")"}
              </>
            ) : (
              <span>Not provided</span>
            )}
          </li>
        </ul>
      </section>
    )
  }

  SourceRecordPanel.css = `
.source-record-panel {
  margin: 0.8rem 0 1rem;
  padding: 0.75rem 0.9rem;
  border: 1px solid var(--lightgray);
  border-radius: 8px;
  background: color-mix(in srgb, var(--light) 88%, var(--highlight));
}

.source-record-panel h3 {
  margin: 0 0 0.45rem;
  font-size: 0.95rem;
}

.source-record-panel ul {
  margin: 0;
  padding-left: 1.1rem;
}

.source-record-panel li {
  margin: 0.22rem 0;
  line-height: 1.35;
  overflow-wrap: anywhere;
}
`

  return SourceRecordPanel
}) satisfies QuartzComponentConstructor
