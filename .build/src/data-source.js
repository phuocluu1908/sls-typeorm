"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
var Todo_1 = require("./entity/Todo");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345678",
    database: "learn",
    synchronize: true,
    logging: false,
    entities: [User_1.User, Todo_1.Todo],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map