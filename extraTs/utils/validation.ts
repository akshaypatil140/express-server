
import validateEmail from './helper';


const validateUsers = (users) => {
    const validusers = [];
    const invalidusers  = [];

    users.forEach(userObj => {
      const { traineeEmail , reviewerEmail } = userObj;
      if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
          validusers.push( userObj);
      }
      else {
          invalidusers.push(userObj);
        }
    });
    console.log(`No of valid users: ${validusers.length}`);
    console.log(validusers);
    console.log(`No of invalid users: ${invalidusers.length}`);
    console.log(invalidusers);
};
export default validateUsers;