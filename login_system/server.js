const express = require('express');
const port = 5000;
const mongoose = require ( 'mongoose')
const cors = require('cors');
// const User = require('./models/usermodel');
const userRouter = require('./route/Userroute');
const app = express();

app.use(cors());
app.use(express.json())
app.use('/users',userRouter)
mongoose.connect('mongodb+srv://rajeshkh704435:hf7paVmgsseBrqIw@signup.dxqefmb.mongodb.net/').then(()=>{
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}).catch ((error)=>{
  console.log(error);
})

