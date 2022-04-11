import "reflect-metadata"
import connection from "../dbconfig"
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

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}

export const showBody = async (event) => {
    console.log(JSON.parse(event.body))
    return {
       body: {
           message: event
       }
    }
}