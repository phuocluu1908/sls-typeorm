import "reflect-metadata"
import connection from "../connection"
import { User } from "../entity/User"
import { AppDataSource } from "../data-source"

export const showUsers = async (event) => {
    await connection()
    const users = await AppDataSource.manager.find(User)
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: users,
            },
            null,
            2
        ),
    };
}

export const showBody = async (event) => {
    console.log(JSON.parse(event.body))
    return {
       body: {
           message: event
       }
    }
}