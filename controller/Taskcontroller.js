const Task=require("../models/Taskmodels")


const createTask=async(req,res)=>{

    const task=await Task.create(req.body)
    return res.json({msg:"TASK ADDED"})
}



const getTask=async(req,res)=>{
    const tasks=await Task.find({})
    return res.json(tasks)
}


const taskbyID=async(req,res)=>{
    const taskid=await Task.findById(req.params.id)

if(!taskid){
    return res.status(404).json({msg:"ID NOT FOUND!"})
}

    return res.json(taskid)
}



const deletetask=async(req,res)=>{
    const taskdelete=await Task.findByIdAndDelete(req.params.id)
    return res.json({msg:"TASK DELETED"})
}


const updateTask=async(req,res)=>{
    const taskupdate=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.json({msg:"TASK UPDATED!"})
}


module.exports={
    createTask,
    getTask,
    taskbyID,
    deletetask,
    updateTask
}