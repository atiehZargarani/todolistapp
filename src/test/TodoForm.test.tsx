import { describe, it, beforeEach } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { POMTodo } from "./POM";
import TodoForm from "@/components/ui/Molecule/TodoForm";

describe("TodoForm Component", () => {
  let Todo: POMTodo;

  const renderComponent = () => render(<TodoForm />);

  beforeEach(() => {
    renderComponent();
    Todo = new POMTodo();
  });

  describe("Basic Rendering", () => {
    it("should render the add task button", () => {
      Todo.expectAddTaskBtn();
    });

    it("should render the task input", () => {
      Todo.expectGetTaskInput();
    });

    it("should render the user input", () => {
      Todo.expectGetUseInput();
    });
    it("should not render error initially", () => {
      Todo.donotExpectGetTaskInputError();
      Todo.donotexpectGetUseInputError();
    });
  });
  describe("validation", () => {
    it("shows errors when submitting empty fields", async () => {
      await Todo.clickAddTaskBtn();
      await waitFor(() => {
        Todo.expectGetTaskInputError();
        Todo.expectGetUseInputError();
      });
    });
  });
});
