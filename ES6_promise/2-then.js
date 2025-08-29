//import getFullResponseFromAPI from './1-promise.js';
export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    return {
      status: 200,
      body: "success"
    };
  }).catch(() => {
    new Error();
  }).finally(() => {
    console.log("Got a reponse from the API");
  });
}