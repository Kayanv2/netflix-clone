import { Request, Response } from "express";
import { jwtService } from "../services/jwtService";
import { userService } from "../services/userService";

export const authController = {
   
   // POST /auth/register
    register:async (req: Request, res: Response) => {
        
        const { firstName, lastName, phone, birth, email, password } = req.body

        try {
            const userExists = await userService.findByEmail(email)

            if(userExists){
                throw new Error('este usuario já esta cadastrado.')
            }

            const user = await userService.create({
                firstName,
                lastName,
                phone,
                birth,
                email,
                password,
                role: 'user'
            })

            return res.status(201).json(user)



        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({message: err.message})
        }
        }
    },

    //POST /auth/login
    login:async (req: Request, res: Response) => {
        const { email, password } = req.body

        try {
            const user = await userService.findByEmail(email)
            
            if(!user) return res.status(404).json({ message: 'E-mail nao cadastrado'})

            user.checkPassword(password, (err, isSame) => {

                if(err) return res.status(400).json({ message: err.message})
                if(!isSame) return res.status(401).json( { message: 'senha incorreta'})

                const payload = {
                    id: user.id,
                    username: user.firstName,
                    email: user.email
                }

                const token = jwtService.signToken(payload, '7d')
                return res.json({authenticated: true, ...payload, token})

            })
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({message: err.message})
        }
        }
    }
}