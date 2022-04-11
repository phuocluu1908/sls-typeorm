import "reflect-metadata"
import connection from "../dbconfig"
import { Todo } from "../entity/todo"
import { AppDataSource } from "../data-source"

export const addTodo = async (event) => {
    await connection()
    const { title, description } = JSON.parse(event.body).data
    const todo = new Todo()
    todo.title = title
    todo.description = description
    todo.status = 'todo'

    await AppDataSource.manager.save(todo)
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: todo,
            },
            null,
            2
        ),
    };

}

export const getTodo = async () => {
    await connection()
    const todos = await AppDataSource.manager.find(Todo)
    console.log(todos)

    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: todos,
            },
            null,
            2
        ),
    }; 
}