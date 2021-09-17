import { Request, Response, Next } from 'express';
import UserRepository from '../../lib/repositories/user/UserRepository';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import * as bcrypt from 'bcrypt';

class UserController {
  get = async (request: Request, response: Response): Promise < Response > => {
        const userRepository: UserRepository = new UserRepository();
        try {
            const {id , emailID} = request.user;
            const query = {
                _id : id,
                email: emailID
            };
            console.log(query);
            const result = await userRepository.find(query);
                return response
                .status(200)
                .send({ message: 'Fetched data successfully', data: result });
        } catch (error) {
            return response
            .status(400)
            .json({ status: 'Bad Request', message: error });
        }
  };

  post = async (request: Request, response: Response): Promise < Response > => {
    const userRepository: UserRepository = new UserRepository();
    try {
        const data = {
            name: request.body.name,
            email: request.body.email,
            role: request.body.role,
            password: request.body.password,
            deletedAt: undefined
        };
        await userRepository.create(data);
        return response
            .status(200)
            .send({ message: 'New Trainee Created Successfully'});
    } catch (error) {
      return response
        .status(400)
        .json({ status: 'Bad Request', message: error });
    }
  };

  put = async (request: Request, response: Response): Promise < Response > => {
    const userRepository: UserRepository = new UserRepository();
    try {
      const data = {
        originalId : request.params.id,
        ...request.body
    };
        const result = await userRepository.update(data);
            return response
                .status(200)
                .send({ message: 'Updated trainee successfully', data: result});
    } catch (error) {
        return response
          .status(400)
          .json({ status: 'Bad Request', message: error });
    }
  };

    delete = async (request: Request, response: Response): Promise < Response > => {
    const userRepository: UserRepository = new UserRepository();
    try {
        const _id = request.params.id;
        const data = {
            originalId: _id,
            deletedAt: Date(),
        };
        const result = await userRepository.delete( { _id }, data);
        return response
        .status(200)
        .send({ message: 'deleted trainee successfully'});
    } catch (error) {
      return response
        .status(400)
        .json({ status: 'Bad Request', message: error });
    }
  };
  createToken = async (request: Request, response: Response, next: Next): Promise < Response > => {
    const userRepository: UserRepository = new UserRepository();
    try {
      const { id , email, password } = request.body;
      const user = await userRepository.findOne({ email });
      let token;
      if (user) {
        const validatePassword = await bcrypt.compare(password, user.password);
        console.log(user, '===', validatePassword);
        if (validatePassword) {
          token = jwt.sign({ _id: id, _email: email}, config.secret, { expiresIn: '15m' });
        } else {
          return response
            .status(401)
            .send({ message: 'Invalid Password' });
        }
      } else {
        return response
          .status(401)
          .send({ message: 'User does not exist' });
      }
      return response
        .status(200)
        .send({
          message: 'Token successfully created',
          data: { token },
          status: 'success',
        });
    } catch (error) {
      return response
        .status(400)
        .json({ status: 'Bad Request', message: error });
    }
  };
}
export default new UserController();