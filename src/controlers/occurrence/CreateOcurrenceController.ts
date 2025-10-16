import { Response, Request } from "express";
import {CreateOcurrenceService} from "../../services/occurrence/CreateOcurrenceService"

class CreateOcurrenceController{
    async handle( req: Request,res: Response){
        let {id} = req.params
        
        const { reanalise  ,classificacao_id, unidade_id, descricao, cartao_beneficiario, manifestacao_ant, identificacao_id,forma_resposta_id,assunto_id, sub_assunto_id,nome, email, cpf, telefone,canal_id} = req.body;
        console.log('teste');
        const updateOcurrenceService = new CreateOcurrenceService();
        const ocurrence = await updateOcurrenceService.execute({ reanalise,classificacao_id, unidade_id, descricao, cartao_beneficiario, manifestacao_ant, identificacao_id,forma_resposta_id,assunto_id, sub_assunto_id,nome, email, cpf, telefone,canal_id} );
        
        return res.json(ocurrence)
    
    }

    
};

export {CreateOcurrenceController};