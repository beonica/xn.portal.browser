import * as core from "../core/main.mjs";

export default {
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

  setPortal: ({ portal }) => ({
    client: portal._id,
    clientData: portal.activation_steps,
    loadingClientData: false
  }),

  setClient: ({ value }) => ({ client: value })
};
