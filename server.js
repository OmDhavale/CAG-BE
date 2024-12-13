const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require('cors');

//requiring schema of student and teacher
const studentModel = require("./models/student.model")
const teacherModel = require("./models/teacher.model")


app.use(express.json())
require('dotenv').config();
const corsOptions = {
    origin: 'http://localhost:3000',    ////for running locally
  //origin: 'https://ecommercefrontend-1.onrender.com', // Your frontend's URL for deployment
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));
//app.use(cors());
mongoose.connect(process.env.MONGODB_URI)
//mongoose.connect("mongodb://localhost/cag_db") //cag_db = name of database
// ^ telling mongoose where to connect
const db = mongoose.connection 
db.on("error",()=>{
    console.log("Error connecting to database")
})
db.once("open",()=>{
    console.log("Connected to db")
    init()
})

async function init(){
    try{
        //finding admin user in db so that no new admin could be created
        let user = await studentModel.findOne({email: "admin"})
        if(user){
            console.log("Admin already present")
            return
        }
    }
    catch(err){
        console.log("Error reading data",err)
    }

    try{//creating admin user (this would be executed only once)
        user = await studentModel.create({
            email: "admin",
            regno : 1111
        })
        console.log("Admin created !",user)
    }
    catch(err){
        console.log("Error creating admin",err)
    }
}
/**
 * Connect route to the server
 */
require("./routes/auth.route")(app)


//Starting the server
//const PORT = 4444;
const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("Server started on port: ",PORT)
})

