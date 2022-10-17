import "reflect-metadata";
import Express from 'express';
import {AppDataSource} from './database/data-source';
import routes from './routes';

const app = Express();

AppDataSource.initialize().then(() => {
    console.log('Conectado com o db');
}).catch((err) => {
    console.log(err);
});

app.use(Express.json());
app.use(routes)

app.listen(process.env.SERVER_PORT, () => {
    console.log('servidor no ar!!');
});