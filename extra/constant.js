
const TRAINEE='trainer'
const permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read : ['trainee', TRAINEE],
        write : [TRAINEE],
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