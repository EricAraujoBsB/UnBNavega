import Router from "express";
import { helloWorldCallback } from "../controllers/helloworld.controller";
 
export const helloWorldRoute = Router();

helloWorldRoute.get("/", helloWorldCallback)