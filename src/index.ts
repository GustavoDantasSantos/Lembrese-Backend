import "reflect-metadata";
import Express from 'express';
import cors from 'cors';
import routes from './routes';

const app = Express();

app.use(Express.json());
app.use(cors());
app.use(routes)

app.listen(process.env.SERVER_PORT, () => {
    console.log('servidor no ar!!');
});