import { Router } from "express";
const router = Router();


import { AuthUserController } from "./controlers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import {CreateUserController} from "./controlers/user/CreateUserController";
import {DeleteOcurrenceController}from "./controlers/occurrence/DeleteOcurrenceController"

router.post("/session", new AuthUserController().handle);

router.post("/user", new CreateUserController().handle);

router.delete("/Ocurrence/:id",isAuthenticated,new DeleteOcurrenceController().handle);


export { router };
