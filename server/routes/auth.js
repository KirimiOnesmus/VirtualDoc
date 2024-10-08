const jwt=require('jsonwebtoken');
const express=require('express');

module.exports=function(req,res,next){
    const token=req.header('Authorization');

    if(!token){
        return res.status(401).json({message: 'Access Denied,Failed to fetch token!'});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }catch(ex){
        res.status(400).json({message:'Invalid token'});
    }
};