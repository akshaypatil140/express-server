import { Request, Response, Next } from 'express';
import ReviewerRepository from '../../lib/repositories/reviewer/ReviewerRepository';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import { TRAINEE, LIMIT, SKIP } from '../../lib/constant';
import { resourceLimits } from 'worker_threads';
class ReviewerController {
    get = async (request: Request, response: Response): Promise<Response> => {
        const reviewerRepository: ReviewerRepository = new ReviewerRepository();
        try {
          const query = {
            originalId:  request.params.id,

          };
            const result = await reviewerRepository.findOne(query);
            return response
                .status(200)
                .send({ message: 'Fetched data successfully', data: result });
        } catch (error) {
            return response
                .status(400)
                .json({ status: 'Bad Request', message: error });
        }
    };

    getAll = async (request: Request, response: Response): Promise<Response> => {
        const reviewerRepository: ReviewerRepository = new ReviewerRepository();
        try {
          const {search, skip = SKIP, limit = LIMIT, sort = { createdAt: -1 } } = request.query;
          console.log({ skip, limit, sort });
          const query: any = {
            role: TRAINEE,
            $or: [
                { name: { $regex: new RegExp(search), $options: 'i' } },
                { email: { $regex: new RegExp(search), $options: 'i' } }
            ]
        };
            console.log('query', query);
            const _result = await reviewerRepository.find(
                query,
                undefined,
                { skip, limit, sort });
            const _count = await reviewerRepository.count();
            const _data = [{ totalNoOfRecords: _count, count: _result.length , result: _result }];
            if ( _result.length === 0) {
              return response
              .status(404)
              .send( { message: 'data not found' } );
            }
            return response
                .status(200)
                .send({ message: 'Fetched data successfully', data: _data });
        } catch (error) {
            return response
                .status(400)
                .json({ status: 'Bad Request', message: error });
        }
    };

    post = async (request: Request, response: Response): Promise<Response> => {
        const reviewerRepository: ReviewerRepository = new ReviewerRepository();
        try {
            const data = {
                name: request.body.name,
                email: request.body.email,
                role: request.body.role,
                password: request.body.password,
                feedback: request.body.feedback
            };
            let result;
            if ( data.role === TRAINEE ) {
              result = await reviewerRepository.create(data);
              return response
                  .status(200)
                  .send({ message: 'New User Created Successfully', data: 'result' });
            }
            else {
                return response
                  .status(400)
                  .send({ message: `Reviewer has not created the feedback ${data.role}`, data: 'result' });
            }
        } catch (error) {
            return response
                .status(400)
                .json({ status: 'Bad Request', message: error });
        }
    };

    put = async (request: Request, response: Response): Promise<Response> => {
        const reviewerRepository: ReviewerRepository = new ReviewerRepository();
        try {
            const data = {
                originalId: request.params.id,
                ...request.body
            };
            const role = request.user.role;
            console.log(role);
            const preData = await reviewerRepository.findOne({originalId: data.originalId});
            let result;
            if ( preData.role  === 'trainee') {
                result = await reviewerRepository.update(data);
                return response
                    .status(200)
                    .send({ message: 'Updated User successfully', data: result });
            } else {
              return response
              .status(400)
              .send({ message: 'Reviewer has not permission to update ' + preData.role});
            }
        } catch (error) {
            return response
                .status(400)
                .json({ status: 'Bad Request', message: error });
        }
    };

    delete = async (request: Request, response: Response): Promise<Response> => {
        const reviewerRepository: ReviewerRepository = new ReviewerRepository();
        try {
            const _id = request.params.id;

            const data = {
                originalId: _id,
                role: TRAINEE,
                deletedAt: Date()
            };

            console.log('data is', data);
            const role = request.user.role;
            console.log(role);
            const preData = await reviewerRepository.findOne({originalId: data.originalId});
            let result;
            if ( preData.role  === 'trainee') {
            result = await reviewerRepository.delete({ _id }, data);
            return response
                .status(200)
                .send({ message: 'Deleted User successfully', data: result });
            }
            else {
              return response
              .status(400)
              .send({ message: 'Reviewer has not permission to delete ' + preData.role});
            }
        } catch (error) {
            return response
                .status(400)
                .json({ status: 'Bad Request', message: error });
        }
    };
  // createToken = async (request: Request, response: Response, next: Next): Promise < Response > => {
  //   const reviewerRepository: ReviewerRepository = new ReviewerRepository();
  //   try {
  //     const { id , email, password } = request.body;
  //     const user = await reviewerRepository.findOne({ email });
  //     let token;
  //     if (user) {
  //       const validatePassword = await bcrypt.compare(password, user.password);
  //       console.log(user, '===', validatePassword);
  //       if (validatePassword) {
  //         token = jwt.sign({ _id: id, _email: email}, config.secret, { expiresIn: '15m' });
  //       } else {
  //         return response
  //           .status(401)
  //           .send({ message: 'Invalid Password' });
  //       }
  //     } else {
  //       return response
  //         .status(401)
  //         .send({ message: 'User does not exist' });
  //     }
  //     return response
  //       .status(200)
  //       .send({
  //         message: 'Token successfully created',
  //         data: { token },
  //         status: 'success',
  //       });
  //   } catch (error) {
  //     return response
  //       .status(400)
  //       .json({ status: 'Bad Request', message: error });
  //   }
  // };
}
export default new ReviewerController();