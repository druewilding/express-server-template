import type { KlodsChild } from "klods-js";
import { content, footer, header, page, sidebar } from "klods-js";

type PageOptions = {
  title: string;
  headerContent?: KlodsChild | KlodsChild[];
  sidebarContent?: KlodsChild | KlodsChild[];
  mainContent: KlodsChild | KlodsChild[];
  footerContent?: KlodsChild | KlodsChild[];
};

export function htmlPage({ title, headerContent, sidebarContent, mainContent, footerContent }: PageOptions): string {
  const hasSidebar = sidebarContent !== undefined;

  const body = page({ sidebar: hasSidebar }, [
    headerContent !== undefined ? header(headerContent) : null,
    hasSidebar ? sidebar(sidebarContent) : null,
    content(mainContent),
    footerContent !== undefined ? footer(footerContent) : null,
  ]);

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <link rel="stylesheet" href="/styles/main.css" />
  </head>
  <body>${body.toString()}<script type="module" src="/scripts/main.js"></script></body>
</html>`;
}
