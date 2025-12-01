import { useState } from "react";
import type { Todo } from "../lib/Types/global";
// import { addNewTodo } from "@/lib/api/addNewTodo";
import { useForm } from "react-hook-form";
import { addNewTodo } from "@/lib/api/addNewTodo";

export const useGlobal = () => {
  const [allTodos, setAllTodos] = useState<Todo[]>([
    {
      id: 1,
      task: "test",
      assignedTo: "test",
      dueDate: "2025-01-01",
      completed: false,
      priority: "high",
    },
    {
      id: 2,
      task: "test2",
      assignedTo: "test2",
      dueDate: "2025-01-02",
      completed: false,
      priority: "medium",
    },
  ]);
  const { register, handleSubmit } = useForm<Todo>();

  const onSubmit = async (data: Todo) => {
    console.log(data);

    try {
      const newTodo = await addNewTodo({
        ...data,
      });
      setAllTodos((prev) => [newTodo, ...prev]);
    } catch (err: unknown) {
      console.log("error in onSubmit", err);
    }
  };
  return { allTodos, setAllTodos, register, handleSubmit, onSubmit };
};
