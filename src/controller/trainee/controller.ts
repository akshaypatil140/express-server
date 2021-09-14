import { Request, Response, Next } from 'express';
import { request } from 'http';
import helper from '../helper';

class Trainee {
    get(req: Request, res: Response, next: Next) {
        let { skip, limit } = req.body;
        skip = skip || 0;
        limit = limit || 10;
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
        if (!id) {
            return res.status(400).send({ message: 'required trainee details', error: 'error msg' });
        }
        return res.status(200).send({ message: 'trainee added sucessfully' });
    }
    put = (req: Request, res: Response): any => {
        const { name, designation, location } = req.body;
        const trainee = helper.rawTraineeData();
        const requestId = req.params.id;
        const data = trainee.find((post, index) => {
            if (post.id === requestId) return true;
        });
        if (data) {
        data.designation = designation;
        data.name = name;
        data.location = location;
        }
        return res.status(200).send({ message: 'Updated trainee successfully', data });
    }
    delete = (req: Request, res: Response) => {
        const requestId = req.params.id;
        const isFound = helper.rawTraineeData().find(people => people.id === requestId);
        if (!isFound) {
            return res.status(404).json({ status: 404, message: `No Person with name ${requestId}` });
        }
        const deletedData = helper.rawTraineeData().filter(people => people.id !== requestId);
        return res.status(200).send({ message: 'deleted trainee successfully', data: deletedData });
    }
}

export default new Trainee();