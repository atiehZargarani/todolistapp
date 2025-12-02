import { useState } from "react";

// import { addNewTodo } from "@/lib/api/addNewTodo";

import { useForm } from "react-hook-form";
import { addNewTodo } from "@/lib/api/addNewTodo";
import { todoSchema, type TodoFormInput } from "../lib/schema/todoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { todosAtom } from "@/lib/storage/atom";
export const useGlobal = () => {
  const [todos, setTodos] = useAtom(todosAtom);
  const [loading, setLoading] = useState(false);

  const [checked, setChecked] = useState(false);
  const overViewCardData = [
    { type: "basic", title: "All Tasks", value: todos.length },
    {
      type: "error",
      title: "Important tasks",
      value: todos.filter((todo) => todo.priority === "High").length,
    },
    {
      type: "success",
      title: "Not important Tasks",
      value: todos.filter((todo) => todo.priority === "Low").length,
    },
    {
      type: "warning",
      title: "Medium Tasks",
      value: todos.filter((todo) => todo.priority === "Medium").length,
    },
  ];
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TodoFormInput>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      completed: false,
      priority: "Low",
      dueDate: new Date().toISOString(),
    },
  });

  const onSubmit = async (data: TodoFormInput) => {
    setLoading(true);
    try {
      const newTodo = await addNewTodo({
        id: Math.random(),
        dueDate: data.dueDate,
        assignedTo: data.assignedTo,
        priority: data.priority ?? "Low",

        task: data.task,
        completed: false,
      });
      setLoading(false);

      setTodos((prev) => [newTodo, ...prev]);
    } catch (err: unknown) {
      setLoading(false);

      console.log("error in onSubmit", err);
    }
  };
  const deleteTask = (id: number) => {
    setTodos((prev) => prev.filter((task) => task.id !== id));
  };
  return {
    todos,
    setTodos,
    register,
    handleSubmit,
    onSubmit,
    errors,
    deleteTask,
    checked,
    setChecked,
    setValue,
    getValues,
    watch,
    overViewCardData,
    loading,
  };
};
