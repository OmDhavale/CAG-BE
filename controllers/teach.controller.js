const teacherModel = require("../models/teacher.model")


// code for signing up a user to database

exports.addteacher = async(req,res)=>{
    //1. reading the request body
    const reqbody = req.body
    // ^ storing the requested JSON in "reqbody" 
    //2. creating an object of the request
    const teach_obj = {
        email : reqbody.email,
        regno : reqbody.regno,
        subject : reqbody.subject
    }
    //3. returning response back to user
    try{
        const teachcreated = await teacherModel.create(teach_obj)
        //^ passing the object- teach_obj to "teachents" collecting on mongodb
        //returning this user created back as a response
        const tcreate = {
            email : teachcreated.email,
            regno : teachcreated.regno,
            subject : teachcreated.subject
        }

        res.status(201).send({
            message : "teacher created",
            tcreate
        })
    }
    catch(err){
        console.log("Error registering the user")
        res.status(500).send({                       //500 : internal server error
            message : "some error happened while registering user try again.."
        })
    }
}

exports.teachsignin = async (req,res)=>{
    const reqbody = req.body
    //check whether email present in db or not
    const user = await teacherModel.findOne({email : reqbody.email})
    if(user== null ){
        console.log("User not present in DB")
        return res.status(400).send({
            message : "Email ID is not valid !"
        })
    }
    //if user id present then check regno is matching or not
    if(reqbody.regno != user.regno){
        console.log("Wrong regno ")
        return res.status(400).send({
            message : "Wrong regno entered !"
        })
    }
    res.status(200).send({
        message : "Teacher logged in succesful !",
        email : user.email,
        regno : user.regno
    })
}
