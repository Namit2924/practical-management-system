import express from "express";
import { createAdmin, createStudent, createTeacher, getAllUsers, getAdmins, getStudents,getTeachers } from "../controllers/userController.js";
import { isAdmin } from "../middleWare/MiddleWare.js";

const routerUser = express.Router()

routerUser.post("/admin/create",isAdmin,createAdmin);
routerUser.post("/teacher/create",createTeacher);
routerUser.post("/student/create",createStudent);

routerUser.get("/user/get",isAdmin,getAllUsers);
routerUser.get("/admins/get",isAdmin,getAdmins);
routerUser.get("/teachers/get",isAdmin,getTeachers);
routerUser.get("/students/get",isAdmin,getStudents);

export default routerUser;