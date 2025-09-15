"use client";
import { useEffect, useRef } from "react";

export default function BlogContent({ content }) {
  // preliminary cleanup of obvious empty <p> variations (keeps DOM simpler)
  const cleanedContent = content
    ?.replace(/<p[^>]*>(\s|&nbsp;|<strong[^>]*>(&zwj;|\s*)<\/strong>)*<\/p>/gi, "")
    .replace(/<p[^>]*>(&zwj;|&zwnj;|\s|&nbsp;)*<\/p>/gi, "")
    .replace(/<p[^>]*>\s*<\/p>/gi, "");

  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // remove any <p> that ends up containing only invisible / whitespace chars
    const invisibleRegex = /[\u200B\u200C\u200D\uFEFF\u00A0]/g; // zwsp, zwnj, zwj, BOM, &nbsp;
    el.querySelectorAll("p").forEach((p) => {
      // textContent gives decoded text (entities converted). Remove invisible chars and trim.
      const text = (p.textContent || "").replace(invisibleRegex, "").trim();

      // if nothing remains, remove the node entirely
      if (text === "") {
        p.remove();
      }
    });

    // Optionally remove empty divs that may cause gaps
    el.querySelectorAll("div").forEach((d) => {
      const text = (d.textContent || "").replace(invisibleRegex, "").trim();
      if (text === "" && d.children.length === 0) {
        d.remove();
      }
    });
  }, [cleanedContent]);

  return (
    <div
      ref={containerRef}
      className="w-full md:w-[70%] lg:w-[78%] raleway text-left prose prose-p:my-2 prose-p:leading-relaxed"
    >
      <div dangerouslySetInnerHTML={{ __html: cleanedContent }} />
    </div>
  );
}
