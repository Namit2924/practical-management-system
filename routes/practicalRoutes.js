import express from "express";
import { isTeacher } from "../middleWare/MiddleWare.js";
import { createPractical, getPracticals, enrollInPractical } from "../controllers/practicalController.js";

const routerPr = express.Router()

routerPr.post("/practicals/create",isTeacher,createPractical);
routerPr.post("/practicals/enroll",enrollInPractical);

routerPr.get("/practicals/get",getPracticals);

export default routerPr;