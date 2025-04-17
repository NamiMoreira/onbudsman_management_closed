import prismaClient from '../../prisma';
import {compare} from 'bcryptjs'
import {sign} from 'jsonwebtoken'

interface AuthRequest{
    email: string;
    password: string;
};

class AuthUserService{
    async execute ({email, password}: AuthRequest){
        console.log(email)
       
        
        if (!email|| !password ) {
            return({logError: true, status: 400, error: "usuario/senha incorreto!"})

        }

        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        }) 
        if (!user) {
            return({logError: true, status: 401, error: "usuario/senha incorreto!"})
        }

        const passwordMath = await compare(password,user.password)

        if (!passwordMath) {
            return({logError: true, status: 401, error: "usuario/senha incorreto!"})
        }
        const token = sign({
            name: user.name,
            email: user.email
            },
            process.env.JWT_SECRET,
            {
            subject: user.id,
            expiresIn: '60d'
                    }
        )

        return{
            id: user.id,
            name: user.name,
            token: token
        }
    }
};

export {AuthUserService};