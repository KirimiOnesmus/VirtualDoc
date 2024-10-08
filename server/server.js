const express =require('express');
const app=express();
const auth=require('./routes/auth')
require('dotenv').config();


const port=8080;
const bodyParser=require('body-parser');

// routes import
const registerRoute=require('./routes/register');
const loginRoute= require('./routes/login');
const authMiddleware=require('./routes/auth');


app.use(bodyParser.json());
app.use('/api/auth',registerRoute);
app.use('/api/auth',loginRoute);


app.get('api/user-profile',authMiddleware,(req,res)=>{
   res.json({
      message: "Welcome to your profile",user:req.user
   });

})

 app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
 })