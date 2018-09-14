import { h } from "hyperapp"; // eslint-disable-line

import { Footer } from "./footer.mjs";
import { Main } from "./main.mjs";
import { NavBar } from "./navbar.mjs";

export default () => (
  <div>
    <NavBar />
    <Main />
    <Footer />
  </div>
);
