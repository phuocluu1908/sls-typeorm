import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Todo } from "./entity/Todo"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345678",
    database: "learn",
    synchronize: true,
    logging: false,
    entities: [User, Todo],
    migrations: [],
    subscribers: [],
})
