import { Request, Response } from 'express';
import CreateUserService from '../service/CreateUserService';

export default class CreateUserController {
    public async handle(request: Request, response: Response) {
        const {name, email, password} = request.body;
        const createUserService = new CreateUserService();
        await createUserService.execute({name, email, password});
        return response.status(200).json({
            message: 'Usuario criado com sucesso!'
        });
    }
}
