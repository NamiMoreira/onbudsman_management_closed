import { Request, Response } from "express";
import {CreateUserService} from "../../services/user/CreateUserService"

class CreateUserController {
    async handle(req: Request, res: Response){
        const { name, email, password, role  } = req.body;
        
        if (!name || !email || !password || !role) {
            res.status(400).send('Missing data for user creation!')        }

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name, email, password, role});
        
        if (!user) {
            return res.status(400).send( "Falha ao criar o usuário!")
        }
        if (user.logError ===1) {
            return res.status(user.status).send(user.error)
        }
        if (user) {
            
        }

         return res.json(user);
        
    }
}

export {CreateUserController};