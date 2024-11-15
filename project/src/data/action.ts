import { Action } from "../types";
import { resources } from "./resource";

const chopWood: Action = {
  name: "Cortar Madeira",
  icon: "🪓",
  trades: [{ resource: resources.wood, quantity: +1 }],
};

export const actions = {
  chopWood,
};
