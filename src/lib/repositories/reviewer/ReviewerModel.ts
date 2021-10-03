import * as mongoose from 'mongoose';
import reviewerSchema from './ReviewerSchema';
import IReviewerModel from './IReviewerModel';

export const ReviewerSchema = new reviewerSchema({
    collection: 'reviewer',
});

export const reviewerModel: mongoose.Model<IReviewerModel> = mongoose.model<IReviewerModel>
(
    'reviewer',
    ReviewerSchema,
    'reviewer',
    true,
);

