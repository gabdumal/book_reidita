export enum ResourceType {
  wood = "wood",
  coin = "coin",
  house = "house",
  worker = "worker",
}

export interface Resource {
  name: string;
  icon: string;
  amount: number;
  production: number;
}

export type Resources = { [Property in keyof typeof ResourceType]: Resource };

export interface Trade {
  resourceType: ResourceType;
  amount: number;
  production: number;
}

export enum ActionType {
  chopWood = "chopWood",
  sellWood = "sellWood",
  buildHouse = "buildHouse",
  hireWorker = "hireWorker",
}

export interface Action {
  name: string;
  icon: string;
  trades: Trade[];
}

export type Actions = { [Property in keyof typeof ActionType]: Action };
