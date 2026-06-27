import { h1, p, strong } from "klods-js";

import { htmlPage } from "./layout.js";

export function welcomePage(): string {
  return htmlPage({
    title: "Express Server Template",
    headerContent: strong("Express Server Template"),
    sidebarContent: [p("This is the sidebar content."), p("You can add more content here.")],
    mainContent: [h1("Welcome!"), p("This is the welcome page for the Express Server Template.")],
    footerContent: "Express Server Template",
  });
}
