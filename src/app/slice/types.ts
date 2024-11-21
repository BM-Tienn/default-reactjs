export interface GlobalState {
  isLogged: boolean;
  loading: boolean;
}
export interface ItemProps {
  label: string;
  value: string;
  children?: ItemProps[];
}

export interface ApiOptions {
  value?: any[];
  id?: string;
  class?: string;
}
