const msql=require('mysql2');
require('dotenv').config();

const connection=mysql.createConnection({
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
});
connection.getConnection((err,connection)=>{
    if(err){
        console.error('Database connection failed:',err.message);
    }else{
        console.log('Connected to the database successfully');
        connection.release();
    }
});

module.exports=connection;