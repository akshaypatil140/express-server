import validateEmail from "./utils/helper";

const permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['reviewer'],
        delete: [],
    },
}

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
]

export default {permissions, users};