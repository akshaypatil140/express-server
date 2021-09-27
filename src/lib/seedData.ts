import UserRepository from '../lib/repositories/user/UserRepository';
import { BCRYPT_SALT_ROUNDS } from './constant';
import * as bcrypt from 'bcrypt';
import helper from '../controller/helper';
import config from '../config/configuration';


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
        name: 'Darshani Alabnur',
        role: 'trainee',
        email: 'darshani.alabnur@successive.tech',
        password: config.password,
}
        ];
        seedData.forEach(async user => {
            await userRepository.create(user);
        });
    }
};