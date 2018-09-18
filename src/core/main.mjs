import config from "../config.mjs";

export const clientKeys = new Map([
  ["a3946eb8", "Casa Mind"],
  ["c1a1cdb5", "Ludi"],
  ["23ae4ed5", "Ocean Drop"]
]);

export const loadPortal = async ({ client }) => {
  const response = await fetch(`${config.backend}${client}/portal`, {
    mode: "cors"
  });

  const portal = await response.json();

  return portal;
};
