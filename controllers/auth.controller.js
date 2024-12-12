const studentModel = require("../models/student.model")


// code for signing up a user to database

exports.adduser = async(req,res)=>{
    //1. reading the request body
    const reqbody = req.body
    // ^ storing the requested JSON in "reqbody" 
    //2. creating an object of the request
    const stud_obj = {
        email : reqbody.email,
        regno : reqbody.regno
    }
    //3. returning response back to user
    try{
        const studcreated = await studentModel.create(stud_obj)
        //^ passing the object- stud_obj to "students" collecting on mongodb
        //returning this user created back as a response
        const screate = {
            email : studcreated.email,
            regno : studcreated.regno
        }

        res.status(201).send({
            message : "Student created",
            screate
        })
    }
    catch(err){
        console.log("Error registering the user")
        res.status(500).send({                       //500 : internal server error
            message : "some error happened while registering user try again.."
        })
    }
}
//for signing in
exports.adminsignin = async (req,res)=>{
    const reqbody = req.body
    //check whether email present in db or not
    const user = await studentModel.findOne({email : reqbody.email})
    if(user== null ){
        console.log("Admin not present in DB")
        return res.status(400).send({
            message : "Admin ID is not valid !"
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
        message : "Admin logged in succesful !",
        email : user.email,
        regno : user.regno
    })
}
exports.signin = async (req,res)=>{
    const reqbody = req.body
    //check whether email present in db or not
    const user = await studentModel.findOne({email : reqbody.email})
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
        message : "User logged in succesful !",
        email : user.email,
        regno : user.regno
    })
}
