const express=require('express');
const db=require('../config/db')
const bcrypt=require('bcrypt')
const router=express.Router();


router.post('/login',(req,res)=>{
    const{email,password}=req.body;

    db.query('SELECT* FROM users WHERE email=?', [email], async(err,results)=>{
        if(err|| results.length===0){
            return res.status(400).json({
                message:'Check on your email or password'
            });
        }
        const user=results[0];

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message: 'Check on your password!'});
        }

         const token=jwt.sign({user_id:user.user_id,role:user.role}.process.env.JWT_SECRET,{expiresIn:'30min'});

        return res.json({
            message:'Login Successful',
            token
        });
    });

});

module.exports=router;