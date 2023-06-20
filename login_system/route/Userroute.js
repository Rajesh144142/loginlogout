const express = require('express');
const userRouter = express.Router();
const {signup ,signin}=require('../controller/useController')
  userRouter.post('/signup',signup)

  userRouter.post('/signin',signin)
  module.exports= userRouter;