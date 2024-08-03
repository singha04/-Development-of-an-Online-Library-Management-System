// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/library', { useNewUrlParser: true, useUnifiedTopology: true });

const bookRouter = require('./routes/book');
const userRouter = require('./routes/user');
const transactionRouter = require('./routes/transaction');

app.use(express.json());
app.use('/api/books', bookRouter);
app.use('/api/users', userRouter);
app.use('/api/transactions', transactionRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
