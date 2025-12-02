import { screen, fireEvent } from "@testing-library/react";
import { expect } from "vitest";

export class POMTodo {
  // Element selectors
  private readonly selectors = {
    taskInput: "task-input",
    taskInputError: "task-input-error",
    userInputError: "user-input-error",
    userInput: "user-input",
    addTaskBtn: "add-task-btn",
  };

  // Actions
  async clickAddTaskBtn(): Promise<void> {
    const button = this.getAddTaskBtn();
    fireEvent.click(button);
  }

  // Getters
  getAddTaskBtn(): HTMLElement {
    return screen.getByTestId(this.selectors.addTaskBtn);
  }
  getTaskInput(): HTMLElement {
    return screen.getByTestId(this.selectors.taskInput);
  }

  geTaskInputError(): HTMLElement | null {
    return screen.queryByTestId(this.selectors.taskInputError);
  }

  getUserInputError(): HTMLElement | null {
    return screen.queryByTestId(this.selectors.userInputError);
  }
  getUserInput(): HTMLElement | null {
    return screen.queryByTestId(this.selectors.userInput);
  }

  // Assertions
  expectAddTaskBtn(): void {
    expect(this.getAddTaskBtn()).toBeInTheDocument();
  }

  expectGetTaskInput(): void {
    expect(this.getTaskInput()).toBeInTheDocument();
  }
  expectGetTaskInputError(): void {
    expect(this.geTaskInputError()).toBeInTheDocument();
  }
  donotExpectGetTaskInputError(): void {
    expect(this.geTaskInputError()).not.toBeInTheDocument();
  }
  expectGetUseInputError(): void {
    expect(this.getUserInputError()).toBeInTheDocument();
  }
  donotexpectGetUseInputError(): void {
    expect(this.getUserInputError()).not.toBeInTheDocument();
  }
  expectGetUseInput(): void {
    expect(this.getUserInput()).toBeInTheDocument();
  }
}
