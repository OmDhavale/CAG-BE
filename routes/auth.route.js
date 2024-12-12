const authMiddleware = require("../middleware/auth.middleware")
const authController = require("../controllers/auth.controller")
const teachMiddleware = require("../middleware/teach.middleware")
const teachController = require("../controllers/teach.controller")
module.exports = (app)=>{
    app.post("/adduser",[authMiddleware.verifybody],authController.adduser)
    app.post("/adminlogin",[authMiddleware.verifysigninuser,authMiddleware.adminCheck],authController.adminsignin)
    app.post("/studlogin",[authMiddleware.verifysigninuser],authController.signin)
    app.post("/addteacher",[teachMiddleware.verifybodyT],teachController.addteacher)
    app.post("/teachlogin",[teachMiddleware.verifysigninuserT],teachController.teachsignin)
}