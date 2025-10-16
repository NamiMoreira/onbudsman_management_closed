import prismaClient from "../../prisma";

class UpdateOcurrenceService {
  async execute(
    
    id,
    {
      reanalise,
      classificacao_id,
      unidade_id,
      descricao,
      cartao_beneficiario,
      manifestacao_ant,
      identificacao_id,
      forma_resposta_id,
      assunto_id,
      sub_assunto_id,
      nome,
      email,
      CPF,
      telefone,
      canal_id,
    }
  ) {
    id = parseInt(id);
    
    
    

    const ocurrence = await prismaClient.occurrence.update({
      where: {
        id: id,
      },
      data: {
        reanalise: reanalise,
        classificacao_id: classificacao_id,
        unidade_id: unidade_id,
        descricao: descricao,
        cartao_beneficiario: cartao_beneficiario,
        manifestacao_ant: manifestacao_ant,
        identificacao_id: identificacao_id,
        forma_resposta_id: forma_resposta_id,
        assunto_id: assunto_id,
        sub_assunto_id: sub_assunto_id,
        nome: nome,
        email: email,
        cpf: CPF,
        telefone: telefone,
        canal_id: canal_id
      },
    }); 
    
    return ocurrence;
    
    
  }
}

export { UpdateOcurrenceService };
