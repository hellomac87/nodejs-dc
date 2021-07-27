import express from 'express';

const app = express();

app.all('/api', (req, res, next) => {
  // app.all('/api/*', (req, res, next) => {
  // 해당 경로에 대해서만
  console.log('all');
  next();
});
app.use('/sky', (req, res, next) => {
  // 해당 경로로 시작하는 모든 경로
  console.log('use');
  next();
});

app.get(
  '/',
  (req, res, next) => {
    console.log('first');
    // next();
    // next('route');
    // next(new Error('error'));
    // res.send('hello!');
    // if (true) {
    //   return res.send('hello');
    // }
    // res.send('dobby');
  },
  (req, res, next) => {
    console.log('first2');
    // next();
  }
);

app.get('/', (req, res, next) => {
  console.log('second');
});

app.use((req, res, next) => {
  res.status(404).send('not available!@_@');
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send('sorry! try later');
});

app.listen(8080);
