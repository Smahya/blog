import { CheerioAPI } from "cheerio";
import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark-dimmed.css";

export function RenderContent({ post }: { post: CheerioAPI }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div
      className="blog-body"
      dangerouslySetInnerHTML={{ __html: post.html() }}
    />
  );
}
