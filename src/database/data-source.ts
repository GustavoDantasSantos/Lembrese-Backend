import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    migrations: ["src/database/migrations/*.ts"],
    entities: ["src/api/**/entity/*.ts"],
});

AppDataSource.initialize().then(() => {
    console.log('Conectado com o db');
}).catch((err) => {
    console.log(err);
});