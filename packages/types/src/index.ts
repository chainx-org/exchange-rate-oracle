import "./interfaces/augment-api";
import "./interfaces/augment-types";

import * as definitions from "./interfaces/definitions";

export async function types() {
  const types = Object.values(definitions).reduce(
    (res, { types }): object => ({ ...res, ...types }),
    {}
  );

  return types;
}
