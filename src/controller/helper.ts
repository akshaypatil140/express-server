import { BCRYPT_SALT_ROUNDS } from '../lib/constant';
import * as bcrypt from 'bcrypt';

const rawTraineeData = () => {
    const trainee: {
      id: string
      name: string;
      designation: string;
      location: string;
    }[] = [
      {
        id: '1',
        name: 'Aashlesha',
        designation: 'Trainee Engineer',
        location: 'Pune',
      },
      {
        id: '2',
        name: 'Akshay',
        designation: 'Trainee Engineer',
        location: 'Pune',
      },
      {
        id: '3',
        name: 'Darshani',
        designation: 'Trainee Engineer',
        location: 'Noida',
      },
    ];
    return trainee;
  };
  const  hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(BCRYPT_SALT_ROUNDS);
    password = await bcrypt.hash(password, salt);
    return password;
  };
 export default {rawTraineeData, hashPassword};
