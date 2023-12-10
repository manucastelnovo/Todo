"use server";
import { sql } from "@vercel/postgres";
import { TodoDataSource } from "@app/(todo)/(data)/(interfaces)/todo_data_source";
import { CreateTodo, Todo } from "../../(domain)/(model)/todo_model";

export class PGTodoDataSource implements TodoDataSource {
  getAllTodo(): Promise<Todo[]> {
    throw new Error("Method not implemented.");
  }
  getTodoById(todoId: string): Promise<Todo> {
    throw new Error("Method not implemented.");
  }
  createTodo(data: CreateTodo): Promise<Todo> {
    // if (!description || !title) {
    //   throw new Error("Missing required fields");
    // }

    // const res = await sql`INSERT INTO users (title, description, isDone) VALUES (${title.toString()}, ${description.toString()}, ${isDone})`;
    console.log(data);
    return new Promise((resolve, reject) => {});
  }
  updateTodo(data: Todo): Promise<Todo> {
    throw new Error("Method not implemented.");
  }
}
