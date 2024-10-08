const mysql=require('mysql2');
require('dotenv').config();

const connection=mysql.createConnection({
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
});
connection.connect((err,connection)=>{
    if(err){
        console.error('Database connection failed:',err.message);
    }else{
        console.log('Connected to the database successfully');
        // connection.end();
    }
    
});

module.exports=connection;