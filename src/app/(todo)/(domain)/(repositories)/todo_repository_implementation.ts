import { BaseRepository } from "@core/package/base_repository";
import { TodoRepositories } from "./todo_repository";
import { CreateTodo, Todo } from "../(model)/todo_model";

class TodoRepositoriesImplementation
  extends BaseRepository
  implements TodoRepositories{
    getAllTodo(): Todo[] {
        throw new Error("Method not implemented.");
    }
    getTodoById(id: number): Todo {
        throw new Error("Method not implemented.");
    }
    createTodo(todo: CreateTodo): void {
        throw new Error("Method not implemented.");
    }
    updateTodo(todo: Todo): void {
        throw new Error("Method not implemented.");
    }
    deleteTodo(id: number): void {
        throw new Error("Method not implemented.");
    }
    
  }

  export const todoRepositories = new TodoRepositoriesImplementation();
