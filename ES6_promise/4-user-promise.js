export default function signUpUser(firstName, lastName) {
  const user = new Promise((response, reject) => {
    response({
      firstName,
      lastName
    });
  });
  return user;
}