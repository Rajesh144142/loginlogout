const user = require('../models/usermodel')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const secret_key='rajesh123456789'
const signup = async (req, res) => {
    //Exisiting user check 
    //hashed password 
    //user creation 
    //toekn generate 
    const { username, email, password } = req.body;
    try {
      const existingUser = await user.findOne({ email: email });
      if (existingUser) {
        res.status(400).json({ message: "User already exists" });
      } else {
        const hashPassword = await bcrypt.hash(password, 10);
        const result = await user.create({
          email: email,
          password: hashPassword,
          username: username
        });
        const token = jwt.sign({ email: result.email, id: result._id }, secret_key);
        res.status(201).json({ user: result, token: token });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
    

}
const signin = async (req, res) => {
    const {  email, password } = req.body;
    try {
        const existingUser = await user.findOne({ email: email });
        if (!existingUser) {
          return res.status(404).json({ message: "User not exisited" });
        } else {
          const hashPassword = await bcrypt.compare(password,existingUser.password)
        if(!hashPassword){
            return res.status(400).json({message:"password does not match"})
        }
          const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secret_key);
          res.status(201).json({ user: existingUser, token: token });
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
      }
}
module.exports= { signup, signin };