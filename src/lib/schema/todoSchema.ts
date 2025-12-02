import { z } from "zod";

export const todoSchema = z.object({
  task: z.string().min(1, "Please enter a title for your task"),
  assignedTo: z.string().min(1, "Please enter a name for the user"),
  completed: z.boolean().default(false),
  priority: z.string().default("low"),
  dueDate: z.string().default(() => new Date().toISOString()),
});

// export type TodoForm = z.infer<typeof todoSchema>;
export type TodoFormInput = z.input<typeof todoSchema>; 