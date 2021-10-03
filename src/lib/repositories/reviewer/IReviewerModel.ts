import * as mongoose from 'mongoose';
import ReviewerSchema from './ReviewerSchema';

export default interface IReviewerModel extends mongoose.Document {
    id: string;
    name: string;
    email: string;
    role: string;
    password: string;
    feedback: object;
}