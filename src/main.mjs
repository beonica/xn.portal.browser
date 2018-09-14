import { app } from "hyperapp";

import actions from "./actions/main.mjs";
import state from "./state/main.mjs";
import view from "./views/index.mjs";

const appArgs = [state, actions, view, document.getElementById("app")];

if (process.env.NODE_ENV !== "production") {
  import("hyperapp-redux-devtools").then(devtools => {
    devtools(app)(...appArgs);
  });
} else {
  app(...appArgs);
}
