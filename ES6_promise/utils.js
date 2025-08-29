const uploadPhoto = new Promise((response, reject) => {
  response({
    status: 200,
    body: 'photo-profile-1',
});
});

const createUser = new Promise((response, reject) => {
  response({
    firstNme: "Gillaume",
    lastName: 'Salva',
  });
});

