import express from 'express';
import fs from 'fs';

const app = express();

app.use(express.json());

app.route('/posts')
.get((req, res, next) => {
  res.status(201).send('GET: /posts');
})
.post((req, res) => {
  res.status(201).send('GET: /posts');
})

app.route('/posts/:id')
.put((req, res) => {
  res.status(201).send('PUT: /posts/:id');
})
.delete((req,res) => {
  res.status(201).send('DELETE: /posts/:id');
})

// app.get('/posts' , (req, res) => {
//   res.status(201).send('GET: /posts');
// })

// app.post('/posts' , (req, res) => {
//   res.status(201).send('POST: /posts');
// })

// app.put('/posts/:id' , (req, res) => {
//   res.status(201).send('PUT: /posts/:id');
// })
// app.delete('/posts/:id' , (req, res) => {
//   res.status(201).send('DELETE: /posts/:id');
// })

app.listen(8080);
