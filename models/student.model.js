const mongoose = require("mongoose")
//student model declaration
// email and registration number

const studentSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase : true
    },
    regno : {
        type : Number,
        required: true,
        unique: true
    }
},{timestamps : true, versionKey : false})

module.exports = mongoose.model("Student",studentSchema)