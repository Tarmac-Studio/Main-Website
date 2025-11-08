import { useEffect } from "react";

export const usePageMeta = (title: string, description: string) => {
  useEffect(() => {
    document.title = title;

    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute("content", description);
    } else {
      const metaTag = document.createElement("meta");
      metaTag.name = "description";
      metaTag.content = description;
      document.head.appendChild(metaTag);
    }

    const ogTitle =
      document.querySelector("meta[property='og:title']") ||
      document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.setAttribute("content", title);
    if (!ogTitle.parentNode) document.head.appendChild(ogTitle);

    const ogDescription =
      document.querySelector("meta[property='og:description']") ||
      document.createElement("meta");
    ogDescription.setAttribute("property", "og:description");
    ogDescription.setAttribute("content", description);
    if (!ogDescription.parentNode) document.head.appendChild(ogDescription);
  }, [title, description]);
};
