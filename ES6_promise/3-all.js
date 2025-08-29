import {uploadPhoto, createUser} from "./utils.js"

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
  .then((promise) => {
    const photo = promise[0];
    const name = promise[1];
    console.log(`${photo.body} ${name.firstName} ${name.lastName}`);
})
  .catch(() => {
    console.log("Signup system offline")
  });
};