export interface Resource {
  name: string;
  icon: string;
  amount: number;
}

export interface Resources {
  wood: Resource;
  coin: Resource;
}

export interface Trade {
  resource: Resource;
  quantity: number;
}

export interface Action {
  name: string;
  icon: string;
  trades: Trade[];
}

export interface Actions {
  chopWood: Action;
  sellWood: Action;
}
