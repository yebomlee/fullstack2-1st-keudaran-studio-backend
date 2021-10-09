import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!');
  next();
});
app.use((err, req, res, next) => {
  const { status, message } = err;
  console.error(err);
  res
    .status(status || 500)
    .json({ message: '예상치 못한 에러가 발생했어요 ㅠ' });
});

export default app;
