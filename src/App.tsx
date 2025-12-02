import { useEffect } from "react";
import "./App.css";

import { useGlobal } from "@/hooks/global";
import { ItemDemo } from "@/components/ui/Molecule/List";
import OverViewCard, {
  type CardItem,
} from "./components/ui/Molecule/OverViewCard";
import Badage from "./components/ui/Atom/Badage";
import { getAllTodo } from "./lib/api/getAllTodos";
import TodoForm from "./components/ui/Molecule/TodoForm";

function App() {
  const {
    todos,
    setTodos,
    deleteTask,

    overViewCardData,
  } = useGlobal();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllTodo();
      setTodos((prev) => {
        const existingIds = new Set(prev.map((t) => t.id));
        const onlyNew = data.filter((item) => !existingIds.has(item.id));
        return [...onlyNew, ...prev];
      });
    };
    fetchData();
  }, []);

  return (
    <main className="">
      <section className="flex justify-center items-center gap-4 flex-wrap py-5 px-3 md:px-0">
        <OverViewCard data={overViewCardData as unknown as CardItem[]} />
      </section>

      <section className="md:flex mx-auto justify-center gap-10">
        <TodoForm />
        <section className="my-2 md:w-1/2">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-center md:justify-start pb-3"
            >
              <ItemDemo
                title={todo.task}
                subtitle={todo.assignedTo}
                endContent1={<span>{todo.completed}</span>}
                listAction={
                  <button
                    className="px-2! py-1! basic-btn btn-error dark:text-red-950"
                    onClick={() => deleteTask(todo.id)}
                  >
                    delete
                  </button>
                }
                endContent2={
                  <Badage
                    title={todo.priority ?? "Low"}
                    type={todo.priority ?? "Low"}
                  />
                }
              />
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}

export default App;
