import { todoRepositories} from "@app/(todo)/(domain)/(repositories)/todo_repository_implementation"

export function createTodo(formData:FormData) {
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const todo = todoRepositories.createTodo({
        title:title,
        description:description,
        isDone:false
    })
}