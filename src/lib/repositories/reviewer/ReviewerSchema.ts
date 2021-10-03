import * as mongoose from 'mongoose';
import { stringifyConfiguration } from 'tslint/lib/configuration';
import { isConstructorDeclaration } from 'typescript';
import VersionableSchema from '../versionable/VersionableSchema';

class ReviewerSchema extends VersionableSchema {

    constructor(collections: any) {
        const baseSchema = Object.assign({
            _id: String,
            name: String,
            email: String,
            role: String,
            password: String,
            feedback: Array,
    });
    super(baseSchema,  collections);
}
}
export default ReviewerSchema;