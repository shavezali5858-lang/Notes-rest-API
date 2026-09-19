const express=require("express")
const mongoose=require("mongoose")
const app=express()

const Taskroutes=require("./routes/Taskroutes")

app.use(express.json())

app.use("/api/task",Taskroutes)




mongoose.connect("mongodb://127.0.0.1:27017/Task-api")
.then(()=>console.log("mongo db is connected"))
.catch((err)=>console.log("error",err))





app.listen(3000,()=>console.log("server started!"))