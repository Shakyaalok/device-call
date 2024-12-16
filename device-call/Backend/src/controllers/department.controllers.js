const db = require('../models/modelindex');
const Department = db.Department



//get  
exports.getDepartment = async(req,res)=>{
    try {
       
        const department = await Department.findAll({});
        if(!department){
            return res.send({message:'No Department found !!', error:false, success:true})
        }
       return res.send({data:department,message:'success', error:false, success:true})
    } catch (error) {
        res.send({message:error.message, error:true, success:false})
    }
}
 
//add
exports.addDepartment = async(req,res)=>{
    try {
        const department = req.body
        await Department.create(department)
        res.send({message:'list of departments', error:false, success:true})
    } catch (error) {
        res.send({message:error.message, error:true, success:false})
    }
}

//edit
