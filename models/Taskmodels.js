const mongoose=require("mongoose")

const taskSchema=new mongoose.Schema({

    task_name:{
        type:String,
        required:true,
        unique:true,
    },


    task_description:{
        type:String,
        required:true,

    },




})

const task=mongoose.model('task',taskSchema)

module.exports=task;
