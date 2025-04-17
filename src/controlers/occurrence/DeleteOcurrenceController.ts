import { Request, Response } from "express";
import {DeleteOcurrenceService} from '../../services/occurrence/DeleteOcurrenceService';

class DeleteOcurrenceController{
    async handle(req: Request, res: Response){
        const idOcurrrence = Number(req.params)
        
        const deleteOcurrence = new DeleteOcurrenceService();
        const ocurrenceDeleted = await deleteOcurrence.execute(idOcurrrence)

        return ocurrenceDeleted;
    }

};

export {DeleteOcurrenceController};