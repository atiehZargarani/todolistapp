import type { Todo } from "../Types/global";

// export const addNewTodo = async (data: newTodo): Promise<Todo> => {
//   const res = await fetch("https://dummyjson.com/todos/add", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       todo: data.todo,
//       completed: data.completed ?? false,
//       userId: data.userId ?? 1,
//     }),
//   });

//   if (!res.ok) console.log("error in addNewTodo");
//   const json = await res.json();
//   return json as Todo;
// };
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
      id: Math.random(),
    }),
  });

  if (!res.ok) console.log("error in addNewTodo");
  const json = await res.json();
  return json as Todo;
};
