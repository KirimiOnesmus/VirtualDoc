const express =require('express');

const port=8080;
const bodyParser=require('body-parser');


const app=express()

app.use(bodyParser.json());

 app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
 })