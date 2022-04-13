import "reflect-metadata"
import connection from "../connection"
import { Todo } from "../entity/Todo"
import { AppDataSource } from "../data-source"
const todoRepository = AppDataSource.getRepository(Todo)

export const getTodo = async (event) => {
    await connection()
    const todos = await todoRepository.find()
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

export const addTodo = async (event) => {
    await connection()
    const { title, description } = JSON.parse(event.body)

    const todo = new Todo()
    todo.title = title
    todo.description = description
    todo.status = 'todo'

    await todoRepository.save(todo)

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

export const updateTodo = async (event) => {
    await connection()
    const { id, title, description, status } = JSON.parse(event.body)
    const todoRepository = AppDataSource.getRepository(Todo)
    const todo = await todoRepository.findOneBy({id})

    if (title) todo.title = title
    if (description) todo.description = description
    if (status) todo.status = status

    await todoRepository.save(todo)

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

export const deleteTodo = async (event) => {
    await connection()
    const { id } = JSON.parse(event.body)

    await todoRepository.delete({id})

    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "Todo was removed",
            },
            null,
            2
        ),
    };
}