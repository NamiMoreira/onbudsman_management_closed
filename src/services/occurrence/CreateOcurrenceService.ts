import { Prisma } from "@prisma/client";
import prismaClient from "../../prisma";
import { copyFileSync } from "fs";

class CreateOcurrenceService {
  async execute(
    
    
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
      cpf,
      telefone,
      canal_id,
    }
  ) {
   
const hoje = new Date();
const prazo_final = new Date();
const prazo_interno = new Date();
prazo_final.setDate(hoje.getDate() + 60);
prazo_interno.setDate(hoje.getDate() + 30);
function gerarProtocolo() {
  const agora = new Date();
  const ano = agora.getFullYear().toString().slice(-2); // últimos 2 dígitos do ano
  const mes = String(agora.getMonth() + 1).padStart(2, "0");
  const dia = String(agora.getDate()).padStart(2, "0");
  const hora = String(agora.getHours()).padStart(2, "0");
  const min = String(agora.getMinutes()).padStart(2, "0");
  const seg = String(agora.getSeconds()).padStart(2, "0");
  const ms = String(agora.getMilliseconds()).padStart(3, "0");

  // Exemplo: 251007-112030567 (07/10/2025 11:20:30.567)
  return `${ano}${mes}${dia}-${hora}${min}${seg}${ms}`;
}
const protocolo = gerarProtocolo();

if (reanalise === "true") {
  reanalise = true
}else{
  reanalise = false
}
const occurrence = await prismaClient.occurrence.create({
  data: {
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
    cpf: cpf,     
    telefone,
    canal_id,
    prazo_final,
    prazo_interno,
    protocolo
  } as Prisma.OccurrenceUncheckedCreateInput
})
    
    return occurrence;
    
    
  }
}

export { CreateOcurrenceService };
