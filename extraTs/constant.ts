import { Users, Permission } from './interface';
const TRAINEE = 'trainee';
const HEAD_TRAINER = 'head-trainer';
const TRAINER = 'trainer';

const permissions: Permission = {
    'getUsers': {
        all: [HEAD_TRAINER],
        read: [TRAINEE, TRAINER],
        write: [TRAINER],
        delete: [],
    },
};

const users = [
    {
        traineeEmail: 'akshay.patil@successive.tech',
        reviewerEmail: 'dinesh.shreegadi@successive.tech',
    },
    {
        traineeEmail: 'akshay.patilsuccessvietech',
        reviewerEmail: 'dinesh.successivetech',
    },
    {
        traineeEmail: 'akshay.patilsuccessvietech',
        reviewerEmail: 'akshay.successivetech',
    }
];

export default { permissions, users, TRAINEE, HEAD_TRAINER, TRAINER };