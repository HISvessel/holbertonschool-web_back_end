import getFullResponseFromAPI from './1-promise.js';
export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log("Got a response from the API");
    return getFullResponseFromAPI
  }).catch(() => {
    new Error();
  });
}