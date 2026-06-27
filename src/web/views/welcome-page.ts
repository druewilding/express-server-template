import { h1, p, strong, toc, tocItem, tocLink } from "klods-js";

import { htmlPage } from "./layout.js";

export function welcomePage(): string {
  return htmlPage({
    title: "Express Server Template",
    headerContent: strong("Express Server Template"),
    sidebarContent: toc([tocItem(tocLink({ href: "#" }, "Home")), tocItem(tocLink({ href: "#" }, "About"))]),
    mainContent: [h1("Welcome!"), p("This is the welcome page for the Express Server Template.")],
  });
}
