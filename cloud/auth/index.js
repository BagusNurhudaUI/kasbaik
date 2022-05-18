const express = require('express')
const app =express()
require('dotenv').config()
const bodyParser = require('body-parser');
const db = require('./model/model')
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken')
const userRouter = require('./router/router')

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true}));

const User = db.users

app.use('/', userRouter)
db.sequelize.sync().then(
  console.log("Syncing is complete")
);

app.get('/', async (req, res) => {
  try {
    res.send("Welcome to API Page for Kasbaik Backend");
  } catch (error) {
    console.log(error);;
  }
});

app.get('/getAllUsers', async (req, res) => {
  try {
    await User.findAll()
    .then( data => {
      res.status(200).send(data)
    }
    )
  } catch (err) {
    console.log(err.message);
  }
});



PORT = process.env.PORT
app.listen(PORT || 8080, () => {console.log(`Application is running on ${PORT}!! `)})