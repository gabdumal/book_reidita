export interface Resource {
  name: string;
  icon: string;
}

interface Trade {
  resource: Resource;
  quantity: number;
}

export interface Action {
  name: string;
  icon: string;
  trades: Trade[];
}
