import { Program } from "@coral-xyz/anchor";

import { Privy } from "./privy";
import PrivyIdl from "./privy.json";

export type {
  Privy,
};

export { PrivyIdl };

export type PrivyProgram = Program<Privy>;