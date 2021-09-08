
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
 export default {rawTraineeData};
