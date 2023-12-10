import { BaseRepository } from "@core/package/base_repository";
import { TodoRepositories } from "./todo_repository";
import { CreateTodo, Todo } from "../(model)/todo_model";
import { TodoDataSource } from "@app/(todo)/(data)/(interfaces)/todo_data_source";

export class TodoRepositoriesImplementation
  extends BaseRepository
  implements TodoRepositories{

    private todoDataSource: TodoDataSource;
    private constructor(dataSource: TodoDataSource) {
        super();
        this.todoDataSource = dataSource;
    }

    static instance: TodoRepositories | null = null;

    static create(dataSource: TodoDataSource) {
      if (TodoRepositoriesImplementation.instance == null) {
        TodoRepositoriesImplementation.instance =
          new TodoRepositoriesImplementation(dataSource);
      }
      return TodoRepositoriesImplementation.instance;
    }

    getAllTodo(): Todo[] {
        throw new Error("Method not implemented.");
    }
    getTodoById(id: number): Todo {
        throw new Error("Method not implemented.");
    }
    async createTodo(todo: CreateTodo): Promise<Todo> {
        return await this.callDataSource(() =>
      this.todoDataSource.createTodo(todo)
    );
    }
    updateTodo(todo: Todo): void {
        throw new Error("Method not implemented.");
    }
    deleteTodo(id: number): void {
        throw new Error("Method not implemented.");
    }
    
  }

