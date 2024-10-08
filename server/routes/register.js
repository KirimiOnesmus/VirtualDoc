const express=require('express');
const bcrypt=require('bcrypt');
const db=require('../config/db');

const router=express.Router();

router.post('/register',async(req,res)=>{
    const{
        full_name,
        email,
        password,
        phone_name
    }=req.body;

    db.query('SELECT email FROM users WHERE email=?',[email], async(err,results)=>{
        if(results.length>0){
            return res.status(400).json({message:'User Already Exists'});
        }
        const hashedPassword=await bcrypt.hash(password,10);

        db.query('INSERT INTO users SET ?',{
            full_name,
            email,
            password:hashedPassword,
            phone_name,
        },(error,results)=>{
            if(error){
                return res.status(500).json({message: 'Database error',error});
            }
            return res.status(201).json({message:'User registered successfully!'});
        });
    });
});

module.exports=router;