const mongoose=require("mongoose")


 const Mongoo=()=>{mongoose.connect(
    process.env.MongoUrl
 )
    .then(() => {
    console.log("Mongoose connected Successully.......");
})
.catch((err) => {
    console.log("Connection Error :",err);
})

 }

module.exports=Mongoo;