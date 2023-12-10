import { CreateTodo, UpdateTodo, Todo } from "@app/(todo)/(domain)/(model)/todo_model"

export interface TodoDataSource {
    getAllTodo(): Promise<Todo[]>;
    getTodoById(todoId: string): Promise<Todo>;
    createTodo(data: CreateTodo): Promise<Todo>;
    updateTodo(data: Todo): Promise<Todo>;
}