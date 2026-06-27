import "klods-css/src/klods.scss";

import { toggleSidebar } from "klods-js";

document.addEventListener("click", (e) => {
  const toggle = (e.target as Element).closest(".klods-sidebar-toggle");
  if (toggle) toggleSidebar(toggle as HTMLElement);
});
