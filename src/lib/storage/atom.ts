import { atomWithStorage } from "jotai/utils";
import type { Todo } from "../Types/global";

export const todosAtom = atomWithStorage<Todo[]>("todos", []);
