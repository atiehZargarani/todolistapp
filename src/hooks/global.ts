import { useState } from "react";
import type { Todo } from "../lib/types/global";
// import { addNewTodo } from "@/lib/api/addNewTodo";

import { useForm } from "react-hook-form";
import { addNewTodo } from "@/lib/api/addNewTodo";
import { todoSchema,  type TodoFormInput } from "../lib/schema/todoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { todosAtom } from "@/lib/storage/atom";
export const useGlobal = () => {
  const [todos, setTodos] = useAtom(todosAtom);
  // const [allTodos, setTodos] = useState<Todo[]>([
  //   {
  //     id: 1,
  //     task: "test",
  //     assignedTo: "test",
  //     dueDate: "2025-01-01",
  //     completed: false,
  //     priority: "High",
  //   },
  //   {
  //     id: 2,
  //     task: "test2",
  //     assignedTo: "test2",
  //     dueDate: "2025-01-02",
  //     completed: false,
  //     priority: "Medium",
  //   },
  // ]);
  const [checked, setChecked] = useState(false);

  const { register,setValue,getValues ,handleSubmit ,watch,formState: { errors, },} = useForm<TodoFormInput>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      completed: false,
      priority: "Low",
      dueDate: new Date().toISOString(),
    },
  });

  const onSubmit = async (data: TodoFormInput) => {
    console.log(data);

    try {
      const newTodo = await addNewTodo({
        id: Math.random(),
        ...data,
      });
      console.log("newTodo", newTodo);
      
      setTodos((prev) => [newTodo, ...prev]);
    } catch (err: unknown) {
      console.log("error in onSubmit", err);
    }
  };
  const deleteTask=(id:number)=>{
    setTodos((prev) => prev.filter((task) => task.id !== id));
  }
  return { todos, setTodos, register, handleSubmit, onSubmit ,errors,deleteTask,checked,setChecked,setValue,getValues,watch};
};
