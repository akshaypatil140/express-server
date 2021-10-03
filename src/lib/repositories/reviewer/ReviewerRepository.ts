import * as mongoose from 'mongoose';
import { reviewerModel } from './ReviewerModel';
import IReviewerModel from './IReviewerModel';
import VersionableRepository from '../versionable/VersionableRepository';
import helper from '../../../controller/helper';
export default class ReviewerRepository extends VersionableRepository <IReviewerModel, mongoose.Model<IReviewerModel>> {
    constructor() {
        super(reviewerModel);
    }
    public static createObejectId() {
        return String(new mongoose.Types.ObjectId());
    }

    public findOne(query): mongoose.Query<mongoose.EnforceDocument<IReviewerModel, {}>, mongoose.EnforceDocument<IReviewerModel, {}>> {
        return super.findOne(query).lean();
    }

    public find(query, projection?: any, options?: any): mongoose.Query<mongoose.EnforceDocument<IReviewerModel, {}>[], mongoose.EnforceDocument<IReviewerModel, {}>> {
        return super.find(query, projection, options);
    }
    public count(): mongoose.Query<number, mongoose.EnforceDocument<IReviewerModel, {}>> {
        return super.count();
    }
    public async create(data: any): Promise<IReviewerModel> {
        console.log('ReviewerRepository::create create', data);
        const hashPassword = await helper.hashPassword(data.password);
        data.password = hashPassword;
        return super.create(data);
    }
    public async update(data: any): Promise<IReviewerModel> {
        if (data.hasOwnProperty('password')) {
            const hashPassword = await helper.hashPassword(data.password);
            data.password = hashPassword;
        }
        return super.update(data);
    }
    public delete(filter, data: any) {
        return super.softdelete(filter, data);
    }
}