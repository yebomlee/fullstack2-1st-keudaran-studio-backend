import express from 'express';
import router from './routes';
import errorHandler from './middleWares/errorHandler';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.use(errorHandler);

export default app;
