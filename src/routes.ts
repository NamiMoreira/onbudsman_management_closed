import { Router } from "express";
const router = Router();


import { AuthUserController } from "./controlers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import {CreateUserController} from "./controlers/user/CreateUserController";
import {DeleteOcurrenceController}from "./controlers/occurrence/DeleteOcurrenceController"
import { UpdateOcurrenceController } from "./controlers/occurrence/UpdateOcurrenceConstroller"

router.post("/session", new AuthUserController().handle);

router.post("/user", new CreateUserController().handle);

router.delete("/ocurrence/:id",isAuthenticated,new DeleteOcurrenceController().handle);

router.put("/ocurrence/:id", isAuthenticated,new UpdateOcurrenceController().handle);
 
export { router };
