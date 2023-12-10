export interface Todo {
	id: number;
    title: string;
	description: string;
	isDone: Boolean;
};

export interface CreateTodo extends Omit<Todo, "id"> {}

export interface UpdateTodo extends Partial<Todo> {}

