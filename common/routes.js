const userDB=require('../common/userschema')
const express = require('express');
const router = express.Router();

router.get("/get", async (req,res)=>{
      try{
        const data = await userDB.find();
        res.json({
    
          data:data,
        })
      }
      catch(error){
        res.json({
          message:error.message,
        })
      }
      
    })

    module.exports=router;