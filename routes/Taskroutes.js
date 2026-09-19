const express=require("express")

const router=express.Router();

const {createTask,getTask,taskbyID,deletetask,updateTask}=require("../controller/Taskcontroller")


router.post("/",createTask)
router.get("/",getTask)
router.get("/:id",taskbyID)
router.delete("/:id",deletetask)
router.patch("/:id",updateTask)


module.exports=router

