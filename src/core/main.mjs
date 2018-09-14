import config from "../config.mjs";

export const loadPortal = async ({ client }) => {
  const response = await fetch(`${config.backend}${client}/portal`, {
    mode: "cors"
  });

  const portal = await response.json();

  return portal;
};
