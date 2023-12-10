import { Todo } from "@app/(todo)/(domain)/(model)/todo_model";

export interface TodoRepository {
    getAllTodo(): Todo[];
    getTodoById(id: number): Todo;
    createTodo(todo: Todo): void;
    updateTodo(todo: Todo): void;
    deleteTodo(id: number): void;
};