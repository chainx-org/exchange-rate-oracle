// We need to import the augmented definitions "somewhere" in our project, however since we have
// it in tsconfig as an override and the api/types has imports, it is not strictly required here.
// Because of the tsconfig override, we could import from '@polkadot/{api, types}/augment'
import "./interfaces/augment-api";
import "./interfaces/augment-types";

// external imports
import { ApiPromise } from "@polkadot/api";
import { createType } from "@polkadot/types";

// our local stuff
import * as definitions from "./interfaces/definitions";

export async function main(): Promise<void> {
  // extract all types from definitions - fast and dirty approach, flatted on 'types'
  const types = Object.values(definitions).reduce(
    (res, { types }): object => ({ ...res, ...types }),
    {}
  );

  const api = await ApiPromise.create({
    types,
  });
}
