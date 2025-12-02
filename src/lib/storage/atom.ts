import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import type { Todo } from "../types/global";


export const todosAtom = atomWithStorage<Todo[]>("todos", []);