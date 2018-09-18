import * as core from "../core/main.mjs";

export default {
  findClient: () => (state, actions) => {
    const clientKey = new URL(document.location).searchParams.get("key");

    if (clientKey) {
      const clientName = core.clientKeys.get(clientKey.toLowerCase());

      if (clientName) {
        const client = window.localStorage.getItem("client");

        if (client) {
          actions.inputClient({ value: client });
        }

        return { clientName };
      }

      return { notFoundKey: clientKey.toUpperCase() };
    }

    return { notFoundKey: null };
  },

  inputClient: ({ value }) => (state, actions) => {
    actions.setClient({ value });

    if (value.length === 36) {
      actions.loadPortal();

      return { loadingClientData: true };
    }
  },

  loadPortal: () => async (state, actions) => {
    const { client } = state;

    const portal = await core.loadPortal({ client });

    actions.setPortal({ portal });
  },

  setPortal: ({ portal }) => {
    if (portal) {
      window.localStorage.setItem(
        "client",
        portal.clientKey ? portal.clientKey : portal._id
      );

      return {
        client: portal.clientKey ? portal.clientKey : portal._id,
        clientData: portal.activation_steps,
        loadingClientData: false
      };
    }

    return { clientData: null, loadingClientData: false };
  },

  setClient: ({ value }) => ({ client: value })
};
