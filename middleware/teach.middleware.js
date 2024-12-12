/**
 * This code is for verification of entered data
 */
const teacherModel = require("../models/teacher.model")

const verifybodyT = async(req,res,next)=>{
    try{
        //check whether both email and regno is passed or not
        if(!req.body.email){
            return res.status(400).send({
                message: "Email not provided !"
            })
        }
        if(!req.body.regno){
            return res.status(400).send({
                message: "Registration no. not provided !"
            })
        }
        /**
         * Checking whether user with same email exists or not
         */
        const flag = await teacherModel.findOne({email : req.body.email})
        if(flag){
            return res.status(400).send({
                message : "User with same email exists !"
            })
        }
        next()
    }
    catch(err){
        console.log("Error while validating the request object",err)
        res.status(500).send({
            message: "Error while validating request body"
        })
    }
}

// const verifysigninbody = (req,res,next)=>{
//     //if user id not present 
//     if(!req.body.email){
//         return res.status(400).send({
//             message : "Email ID not provided !"
//         })
//     }
//     if(!req.body.regno){
//         return res.status(400).send({
//             message : "Registration no. not provided !"
//         })
//     }
//     next()
// }
const verifysigninuserT = (req,res,next)=>{
    //if user id not present 
    if(!req.body.email){
        return res.status(400).send({
            message : "Email ID not provided !"
        })
    }
    if(!req.body.regno){
        return res.status(400).send({
            message : "Registration no. not provided !"
        })
    }
    next()
}

// //code for checking whether the user trying to do any operation is admin or not
// const adminCheckT = async (req,res,next)=>{
//     const user = req.body
//     //const user = await teacherModel.findOne({email : "admin"})
//     if(req.body.email && user.email == "admin"){
//         // return res.status(200).send({
//         //     message: "Admin verified !"
//         // })
//         next()
//     }
//     else{
//         return res.status(403).send({
//             message: "FORBIDDEN : Only Admin is allowed to access this endpoint"
//         })
//     }
// }
module.exports = {
    verifybodyT : verifybodyT,
    //verifysigninbody : verifysigninbody,
    verifysigninuserT : verifysigninuserT,
    //adminCheck : adminCheck
}