import { PGTodoDataSource } from "@app/(todo)/(data)/(data_source)/actions";
import { TodoRepositoriesImplementation} from "@app/(todo)/(domain)/(repositories)/todo_repository_implementation"

let todoRepositories = PGTodoDataSource.create();
let todoProvider =TodoRepositoriesImplementation.create(todoRepositories);

export function createTodo(formData:FormData) {
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const todo = todoProvider.createTodo({
        title:title,
        description:description,
        isDone:false
    })
}