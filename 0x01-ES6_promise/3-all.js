import { createUser, uploadPhoto } from './utils';

export default function regUser() {
  // invoke uploadPhoto function
  // this is the promises error statement
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((userResp) => {
      // after successful signup, log the body, firstName, and lastName to the console
      console.log(`${userResp[0].body} ${userResp[1].firstName} ${userResp[1].lastName}`);
    })
    .catch(() => {
      // if error, log Signup system offline to the console
      console.log('Signup system offline');
    });
}
