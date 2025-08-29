export default function getFullResponseFromAPI(success) {
  const promise = new Promise((response, reject) => {
    if (success == false) {
      reject(new Error("The fake API is not working currently"));
    }
    response({
      status: 200,
      body: "Success"
    });
  });
  return promise;
}
