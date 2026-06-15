import { Todo } from "./todoModel.js";

//get all Todos
export const getAllTodos = async () => {
  try {
    const todos = await Todo.find();
    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};
