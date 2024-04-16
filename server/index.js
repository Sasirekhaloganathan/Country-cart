const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`DB connected Server listning at Port ${process.env.PORT}!`)
    );
  })
  .catch((e) => console.log(e));
app.use(express.json());

