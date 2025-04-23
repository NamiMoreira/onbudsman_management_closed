import { Response, Request } from "express";
import {UpdateOcurrenceService} from "../../services/occurrence/UpdateOcurrenceService"

class UpdateOcurrenceController{
    async handle( req: Request,res: Response){
        let {id} = req.params
        
        const { reanalise  ,classificacao_id, unidade_id, descricao, cartao_beneficiario, manifestacao_ant, identificacao_id,forma_resposta_id,assunto_id, sub_assunto_id,nome, email, CPF, telefone,canal_id} = req.body;
        console.log('teste');
        const updateOcurrenceService = new UpdateOcurrenceService();
        const ocurrence = await updateOcurrenceService.execute(id,{ reanalise,classificacao_id, unidade_id, descricao, cartao_beneficiario, manifestacao_ant, identificacao_id,forma_resposta_id,assunto_id, sub_assunto_id,nome, email, CPF, telefone,canal_id} );
        
        return res.json(ocurrence)
    
    }

    
};

export {UpdateOcurrenceController};