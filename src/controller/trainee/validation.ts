export default Object.freeze
({
    create: {
        id: {
            exists: true,
            string: true,
            in: ['body'],
            // custom: (value) => {
            //     console.log('Value', value);
            //     throw { error: 'Error Occured', message: 'Message' };
            // }
        },
        name: {
            exists: true,
            regex: '',
            in: ['body'],
            errorMessage: 'Name is required',
        }
    },
    delete: {
        name: {
            exists: true,
            string: true,
            errorMessage: 'Id is required',
            in: ['param']
        }
    },
    get: {
        skip: {
            exists: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        },
        limit: {
            exists: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid',
        }
    },
    update: {
        name: {
            exists: true,
            string: true,
            in: ['param']
        },
        // dataToUpdate:
        // {
        //     in: ['body'],
        //     exists: true,
        //     isObject: true,
        //     // custom: dataToUpdate => {
        //     //     console.log('updtaed');
        //     // },
        // }
    }
});

