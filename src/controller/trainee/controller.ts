import { Request, Response, Next } from 'express';
import { request } from 'http';
import helper from '../helper';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';

class Trainee {
    get(req: Request, res: Response, next: Next) {
        let { skip, limit } = req.body;
        skip = skip || 0;
        limit = limit || 1;
        if (Number( skip )  >= helper.rawTraineeData().length) {
            return res.status(400).send({message: 'initial limit out of bound'});
        }
        const sliceData = helper.rawTraineeData().slice(Number(skip), Number(limit) );
     // const trainee = helper.rawTraineeData();
        return res.status(200).send({ message: 'Fetched data Successfully', Data: sliceData });
    }
    post(req: Request, res: Response, next: Next) {
        // console.log(req.body);
        const { id, name, designation, location } = req.body;
        if (!name && !id) {
            return res.status(400).send({ message: 'required trainee details', error: 'error msg' });
        }
        return res.status(200).send({ message: 'trainee added sucessfully' });
    }
    put = (req: Request, res: Response): any => {
        const trainee = helper.rawTraineeData();
        const requestName = req.params.name;
        const data = trainee.find((post, index) => {
            if (post.name === requestName) return true;
        });
        data.designation = 'Associate Engineer';
        return res.status(200).send({ message: 'Updated trainee successfully', data: trainee });
    }
    delete = (req: Request, res: Response) => {
        const trainee = helper.rawTraineeData();
        const requestName = req.params.name;
        const isFound = helper.rawTraineeData().find(people => people.name === requestName);
        if (!isFound) {
            return res.status(404).json({ status: 404, message: `No Person with name ${requestName}` });
        }
        const deletedData = helper.rawTraineeData().filter(people => people.name !== requestName);
        return res.status(200).send({ message: 'deleted trainee successfully', data: deletedData });
    }
    createToken = (req: Request, res: Response, next: Next) => {
        const token = jwt.sign(req.body, config.secret, { expiresIn: '10h' });
        console.log(token);
        return res.status(200).send({ message: 'Token successfully created', data: { token }, status: 'success'});
        }
}

export default new Trainee();