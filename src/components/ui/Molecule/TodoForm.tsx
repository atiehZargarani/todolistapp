import { useGlobal } from "@/hooks/global";

import Badage from "@/components/ui/Atom/Badage";
import { Input } from "@/components/ui/Atom/input";

function TodoForm() {
  const { onSubmit, register, handleSubmit, errors, setValue, watch, loading } =
    useGlobal();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" items-center md:items-end md:w-1/2 gap-3 pt-3 flex flex-col px-10"
    >
      <Input
        placeholder="title"
        className="w-full md:w-1/2 py-6"
        {...register("task")}
        data-testid="task-input"
      />

      {errors?.task && (
        <p
          className="text-red-500 text-sm pb-2 w-full md:w-1/2  text-start"
          data-testid="task-input-error"
        >
          {errors.task.message}
        </p>
      )}

      <Input
        placeholder="user who wants do task"
        className="w-full md:w-1/2 py-6"
        {...register("assignedTo")}
        data-testid="user-input"
      />
      {errors.assignedTo && (
        <p
          className="text-red-500 text-sm pb-2 w-full md:w-1/2 text-start"
          data-testid="user-input-error"
        >
          {errors.assignedTo.message}
        </p>
      )}

      <div className="flex justify-between w-full md:w-1/2">
        <span>
          Piority :<strong className="mx-2">{watch("priority")}</strong>
        </span>
        <div className="flex gap-2">
          <Badage
            extraClassName="cursor-pointer"
            title="Medium"
            type="Medium"
            action={() => {
              setValue("priority", "Medium");
            }}
          />
          <Badage
            extraClassName="cursor-pointer"
            title="Low"
            type="Low"
            action={() => {
              setValue("priority", "Low");
            }}
          />
          <Badage
            extraClassName="cursor-pointer"
            title="High"
            type="High"
            action={() => {
              setValue("priority", "High");
            }}
          />
        </div>
      </div>

      <button
        data-testid="add-task-btn"
        type="submit"
        className="w-full md:w-1/2 basic-btn btn-success my-4   dark:text-emerald-950"
      >
        {loading ? "loading..." : "add todo"}
      </button>
    </form>
  );
}

export default TodoForm;
