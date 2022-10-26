// IMPORT FROM PACKAGES
const express = require('express');
const mongoose = require('mongoose');

// IMPORT FROM OTHER FILES
const authRouter = require('./routes/auth');

// INIT
const PORT = 3000;
const app = express();
const DB =
  'mongodb+srv://kshri:Mongodb180821@cluster0.la34ydw.mongodb.net/?retryWrites=true&w=majority';

// MIDDLEWARE
app.use(express.json());
app.use(authRouter);

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log('Connection Successful');
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Connected at port ${PORT}`);
});
