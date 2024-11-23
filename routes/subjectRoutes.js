import express from "express";
import { isAdmin } from "../middleWare/MiddleWare.js";
import { createSubject, getSubjects } from "../controllers/subjectController.js";
const routerSub = express.Router()

routerSub.post("/subject/create",isAdmin,createSubject);

routerSub.get("/subjects/get",getSubjects);

export default routerSub;