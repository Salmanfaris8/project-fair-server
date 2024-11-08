const express = require("express")
const userController = require("../controllers/userController")
const projectController = require("../controllers/projectController")
const jwtMiddleware = require("../middlewares/jwtMiddleware")
const multerMiddleware = require("../middlewares/multerMiddleware")

const router =new express.Router()

// register : http://localhost:3000/register
router.post("/register",userController.registerController)

// login : http://localhost:3000/login
router.post("/login",userController.loginController)

// add-project : http://localhost:3000/add-project
router.post("/add-project",jwtMiddleware,multerMiddleware.single("projectImg"),projectController.addProjectController)

// home-project : http://localhost:3000/home-project
router.get("/home-project",projectController.homePageProjectController)

// all-Projects : http://localhost:3000/all-Projects
router.get("/all-Projects",jwtMiddleware,projectController.allProjectController)

// user-Projects : http://localhost:3000/user-Projects
router.get("/user-Projects",jwtMiddleware,projectController.userProjectController)

// projects/10/edit : http://localhost:3000/projects/:id/edit
router.put("/projects/:id/edit",jwtMiddleware,multerMiddleware.single("projectImg"),projectController.editProjectController)

// projects/10/remove : http://localhost:3000/projects/:id/remove
router.delete("/projects/:id/remove",jwtMiddleware,projectController.removeProjectController)

// edit-user : http://localhost:3000/edit-user
router.put('/edit-user',jwtMiddleware,multerMiddleware.single("profilePic"),userController.editUserController)

module.exports = router