type AllKeyOf<K> = K extends never ? never : keyof K;

type RequireField<T, K> = { [P in Extract<keyof T, K>]: T[P] };

type OptionalField<T, K> = { [P in Exclude<keyof T, K>]?: T[P] };

export type RequireSomeField<T, K extends AllKeyOf<T>> = T extends never
  ? never
  : OptionalField<T, K> & RequireField<T, K>;

export type objectType = {
  [key: string]: any;
};

export interface I_OptionsGetList {
  limit: number;
  page: number;
  search?: string;
  order_by?: string;
  order?: string;
}

export interface I_OptionDelete {
  id: string | number;
}

export type ExtractTypeFromArray<T> = T extends (infer U)[] ? U : never;

export function isNotUndefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}
