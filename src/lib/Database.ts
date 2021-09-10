import * as mongoose from  'mongoose';

export default class Database {
    public static open(mongoUrl ) {
        return new Promise(( resolve, reject) => {
            mongoose.connect(mongoUrl, (err) => {
            if (err) {
                console.log( 'ERROR', err);
                return reject(err);
            }
            console.log('successfully connected to the database', mongoUrl);
            return resolve('success');

        });
    });
}
}