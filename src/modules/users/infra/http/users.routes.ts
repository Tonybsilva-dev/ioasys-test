import UsersRepository from '@modules/users/repositories/UsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';
import ensureAuthenticated from '@shared/middlewares/ensureAuthenticated';
import { Router, Request, Response } from 'express'
import { getCustomRepository } from 'typeorm';



const userRouter = Router();


userRouter.post('/', async (request: Request, response: Response) => {

    const { name, email, password } = request.body;
    const createUser = new CreateUserService();
    const user = await createUser.execute({
        name,
        email,
        password,
    });
    delete user.password;
    return response.json(user)
});



userRouter.get('/', ensureAuthenticated, async (request: Request, response: Response) => {
    //Pegamos um repositório para funções personalizadas
    const usersRepository = getCustomRepository(UsersRepository)
    //Buscamos todos os agendamentos
    const users = await usersRepository.find();
    //Retornamos todos os agendamentos
    return response.json(users)
});





export { userRouter }