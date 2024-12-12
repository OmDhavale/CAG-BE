const mongoose = require("mongoose")
//student model declaration
// email and registration number

const teacherSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase : true,
        minLength : 10
    },
    regno : {
        type : Number,
        required: true,
        unique: true
    },
    subject : {
        type : String,
        required: true
    }
},{timestamps : true, versionKey : false})

module.exports = mongoose.model("Teacher",teacherSchema)