import UserRepository from '../lib/repositories/user/UserRepository';
import { BCRYPT_SALT_ROUNDS } from './constant';
import * as bcrypt from 'bcrypt';
import helper from '../controller/helper';
import config from '../config/configuration';
import { reviewerModel } from './repositories/reviewer/ReviewerModel';
import ReviewerRepository from '../lib/repositories/reviewer/ReviewerRepository';
import VersionableRepository from './repositories/versionable/VersionableRepository';
import { userModel } from './repositories/user/UserModel';
import { create } from 'domain';


export default async () => {
    const userRepository: UserRepository = new UserRepository();
    const res = await userRepository.count();
    console.log('No Of Record:', res );
    if ( res === 0) {
        console.log('Data seeding in progrss....');
        // const passwordHash = await helper.hashPassword(config.password);
        const seedData = [
            {
                name: 'GauravAgarwal',
                role: 'head-trainer',
                email: 'gaurav.agarwal@successive.tech',
                password: config.password,
        },
            {
                name: 'Aashlesha Chitte',
                role: 'trainee',
                email: 'aashlesha.chitte@successive.tech',
                password: config.password,
            },
            {
                name: 'Darshan borse',
                role: 'trainee',
                email: 'darshan.borse@successive.tech',
                password: config.password,

        },
        {
            name: 'Mayur Mahajan',
            role: 'trainer',
            email: 'mayur.mahajan@successive.tech',
            password: config.password,
    },
    {
        name: 'Akshay Patil',
        role: 'trainee',
        email: 'akshay.patil@successive.tech',
        password: config.password,
    },
    {
        name: 'Darshani Alabnur',
        role: 'trainee',
        email: 'darshani.alabnur@successive.tech',
        password: config.password,
    },
    {
        name: 'Dinesh Shreegadi',
        role: 'reviewer',
        email: 'dinesh.shreegadi@successive.tech',
        password: config.password,
    }
        ];
        seedData.forEach(async user => {
            await userRepository.create(user);
        });
    }
    const reviewerRepository: ReviewerRepository = new ReviewerRepository();
    const res1 = await reviewerRepository.count();
    console.log('No Of Record:', res );
    if ( res1 === 0) {
        console.log('Data seeding in progrss....');
        // const passwordHash = await helper.hashPassword(config.password);
        const seedData1 = [
            {
                name: 'Darshani Alabnur',
                userTraineeId: '',
                role: 'trainee',
                email: 'darshani.alabnur@successive.tech',
                password: config.password,
                feedback: [
                    {
                        communication: '',
                        comprehension: '',
                        behaviour: '',
                        email_Communication: '',
                        redmine: '',
                    },
                ]
        },
        {
            name: 'Dinesh Shreegadi',
            role: 'reviewer',
            email: 'darshani.alabnur@successive.tech',
            password: config.password,
            feedback: [
                {
                    communication: '',
                    comprehension: '',
                    behaviour: '',
                    email_Communication: '',
                    redmine: '',
                },
            ]
    },
        ];
        seedData1.forEach(async reviewer => {
            await reviewerRepository.create(reviewer);
        });
    }
};