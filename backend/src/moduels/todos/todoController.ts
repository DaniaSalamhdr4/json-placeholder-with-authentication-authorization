import { getAllTodos } from "./todoService.js";
import type { Request, Response } from "express";

export const getTodosControllers = async (req: Request, res: Response) => {
  try {
    const todos = await getAllTodos();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Todos" });
  }
};
