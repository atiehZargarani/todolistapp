import type { Todo } from "../Types/global";

export const addNewTodo = async (data: Todo): Promise<Todo> => {
  const res = await fetch("https://fakeapi.in/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      task: data.task,
      assignedTo: data.assignedTo,
      dueDate: data.dueDate,
      completed: data.completed,
      priority: data.priority,
      id: data.id,
    }),
  });

  if (!res.ok) console.log("error in addNewTodo");
  const json = await res.json();
  return json.todo as Todo;
};
