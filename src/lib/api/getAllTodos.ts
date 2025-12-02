export type Todo = {
  id: number;
  task: string;
  assignedTo: string;
  dueDate: string;
  completed: boolean;
  priority: string;
};

export const getAllTodo = async (): Promise<Todo[]> => {
  const res = await fetch(import.meta.env.BASE_URL);
  if (!res.ok) console.log("error in getAllTodo");
  const json = await res.json();
  return json.todos;
};
