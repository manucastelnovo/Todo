import { CreateTodo, Todo } from "@app/(todo)/(domain)/(model)/todo_model";

export interface TodoRepositories {
    getAllTodo(): Todo[];
    getTodoById(id: number): Todo;
    createTodo(todo: CreateTodo): void;
    updateTodo(todo: Todo): void;
    deleteTodo(id: number): void;
};