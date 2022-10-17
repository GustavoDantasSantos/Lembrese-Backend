import Express from 'express';
import "reflect-metadata"
import routes from './routes';

const app = Express();

app.use(Express.json());
app.use(routes)

app.listen('3080', () => {
    console.log('servidor no ar!!');
});