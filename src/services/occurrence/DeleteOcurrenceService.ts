import prismaClient from "../../prisma";

class DeleteOcurrenceService{
    async execute(id: number){       
        const deleteOcurrence = await prismaClient.occurrence.delete({
            where: {
                id: id
            }
        })

        return deleteOcurrence;
    }

};

export {DeleteOcurrenceService};