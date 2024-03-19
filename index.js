const express = require('express');
// const mongoose = require('mongoose');
const Mongoo=require('./common/connection')
const user=require('./common/userschema');
const { connection, mongo } = require('mongoose');
const router = require('./common/routes');
const app = express();
app.use(express.json());
require('dotenv').config();


Mongoo();
app.use(router)
Mongoo()

// const MongoUrl = "mongodb+srv://krishna43835:8DUBpl74kBIyidDY@cluster0.0lubpbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
 
// mongoose.connect(MongoUrl)
// .then(() => {
//     console.log("Mongoose connected Successully.......");
// })
// .catch((err) => {
//     console.log("Connection Error :",err);
// })

// app.post("/po", async (req, res) => {
//     try {
//       const { username } = req.body;
  
      
//       res.json({
//         message: ` user name - ${username}`,
//       });
//     } catch (error) {
//       res.json({
//         error: error.message,
//       });
//     }
//   });


// const user =new mongoose.Schema({
//   userName: {
//     type : String
//   },
// })

// const userDB = mongoose.model('ashen',user)

// app.post("/post", async (req,res)=>{
//   try{
//     const {userName} = req.body;
//     const moon = new userDB({userName});
//     await moon.save()
//     res.json({
      
//       data:moon
      
      
//     })
//   }
//   catch(error1){
//     res.json({
//       message:error1.message,
//     })
//   }
  
// })
// app.get('/get',async(req,res)=>{
//   try{
//       const getdata = await userDB.find();
//       res.json({
//           data:getdata,
//       });
//   }
//   catch(error)
//   {
//         res.json({
// error : error.message,
//       })
//     }
// })



// app.put("/edit/:id",async(req,res) =>{
//   try{
//      const {userName} =req.body;
//      const objectId = req.params.id
//      const updateData = await userDB.findByIdAndUpdate(
//       objectId,
//       {userName},
//       {new: true}
//      );
//      res.json({
//       data: updateData,
//      });
//     } catch (error) {

//       res.status(500).json({
//         message:error.message,
//       })
//     }

// })

// app.delete("/delete/:id",async (req, res)=>{
//   try{
//     const deleteDataObjectedId =req.params.id;
//     const deletedData = await userDB.findByIdAndDelete(deleteDataObjectedId);

//     res.json({
//       data:deletedData,
//       message:"data deleted successfully",
//     });
//   }catch(error){
//     res.status(500).json({
//       message:error.message,
//     });
//   }
// });




const PORT = 7000;
app.listen(PORT,()=>{
    console.log("Server is running on ",PORT);
})

