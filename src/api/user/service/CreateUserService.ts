import { UserRepository } from "../repository/UserRepository"
import bcrypt from 'bcrypt';

interface ICreateUserService {
    name: string,
    password: string,
    email: string
}

export default class CreateUserService {
    
    public async execute({email, name, password}: ICreateUserService){
        if(!email) {
            console.error('error');
        }

        const userExists = await UserRepository.findOne({
            where: {
                email
            }
        });

        if(userExists) {
            console.log('usuario existe')
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const user = UserRepository.create({
            email,
            name,
            password: hashPassword,
        });

        await UserRepository.save(user);
    }
}