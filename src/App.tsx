import { useEffect } from "react";
import "./App.css";

import { useGlobal } from "@/hooks/global";
import { ItemDemo } from "@/components/ui/Molecule/List";
import Card from "./components/ui/Atom/Card";
import Badage from "./components/ui/Atom/Badage";
import { getAllTodo } from "./lib/api/getAllTodos";
import { Input } from "./components/ui/Atom/input";


function App() {
  const { todos, setTodos, onSubmit, register, handleSubmit, errors, deleteTask, setValue, watch } =
    useGlobal();


  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllTodo();
      setTodos(prev => {
        const existingIds = new Set(prev.map(t => t.id));
        const onlyNew = data.filter(item => !existingIds.has(item.id));
        return [...onlyNew, ...prev];
      });
    };
    fetchData();
  }, []);

  return (
    <main className="">
      <section className="flex justify-center items-center gap-4 flex-wrap py-5 px-3 md:px-0">
        <Card
          data={[
            { type: "basic", title: "All Tasks", value: todos.length },
            { type: "error", title: "Important tasks", value: todos.filter((todo) => todo.priority === 'High').length },
            { type: "success", title: "Not important Tasks", value: todos.filter((todo) => todo.priority === 'Low').length },
            { type: "warning", title: "Medium Tasks", value: todos.filter((todo) => todo.priority === 'Medium').length },
          ]}
        />

      </section>

      <section className="md:flex mx-auto justify-center gap-10">

        <form onSubmit={handleSubmit(onSubmit)} className=" items-center md:items-end md:w-1/2 gap-3 pt-3 flex flex-col px-10">
 
         
          <Input placeholder="title" className="w-full md:w-1/2 py-6" {...register("task")} />

          <p className="text-red-500 text-sm pb-2 w-full md:w-1/2  text-start">{errors?.task?.message}</p>


          <Input placeholder="user who wants do task" className="w-full md:w-1/2 py-6" {...register("assignedTo")} />

          <p className="text-red-500 text-sm pb-2 w-full md:w-1/2 text-start">{errors?.assignedTo?.message}</p>



          <div className="flex justify-between w-full md:w-1/2">
            <span>Piority :<strong className="mx-2">{watch("priority")}</strong></span>
            <div className="flex gap-2">
              <Badage extraClassName="cursor-pointer" title="Medium" type="Medium" action={() => { setValue("priority", "Medium") }} />
              <Badage extraClassName="cursor-pointer" title="Low" type="Low" action={() => { setValue("priority", "Low") }} />
              <Badage extraClassName="cursor-pointer" title="High" type="High" action={() => { setValue("priority", "High") }} />
            </div>
          </div>


          <button type="submit" className="w-full md:w-1/2 basic-btn btn-success my-4">add todos</button>
        </form>

        <section className="my-2 md:w-1/2">
          {todos.map((todo) => (
            <div key={todo.id} className="flex justify-center md:justify-start pb-3">

              <ItemDemo title={todo.task} subtitle={todo.assignedTo} endContent1={<span>{todo.completed}</span>
              }

                listAction={<button className="!px-2 !py-1 basic-btn btn-error" onClick={() => deleteTask(todo.id)}>delete</button>}
                endContent2={<Badage title={todo.priority ?? "Low"} type={todo.priority ?? "Low"} />



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
