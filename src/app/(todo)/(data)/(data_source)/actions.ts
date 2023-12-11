import { sql } from "@vercel/postgres";
import { TodoDataSource } from "@app/(todo)/(data)/(interfaces)/todo_data_source";
import { CreateTodo, Todo } from "../../(domain)/(model)/todo_model";

export class PGTodoDataSource implements TodoDataSource {
  static instance: PGTodoDataSource | null = null;

  static create() {
    if (PGTodoDataSource.instance == null) {
      PGTodoDataSource.instance = new PGTodoDataSource();
    }
    return PGTodoDataSource.instance;
  }


  async getAllTodo(): Promise<Todo[]> {
    throw new Error("Method not implemented.");
  }
  async getTodoById(todoId: string): Promise<Todo> {
    throw new Error("Method not implemented.");
  }
  async createTodo(data: CreateTodo): Promise<Todo> {
    // if (!description || !title) {
    //   throw new Error("Missing required fields");
    // }

    // const res = await sql`INSERT INTO users (title, description, isDone) VALUES (${title.toString()}, ${description.toString()}, ${isDone})`;
    const res = await fetch('/api/todo', {
      method: 'POST',
      body: JSON.stringify({ data }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log(res);
    return new Promise((resolve, reject) => {});
  }
  async updateTodo(data: Todo): Promise<Todo> {
    throw new Error("Method not implemented.");
  }
}
