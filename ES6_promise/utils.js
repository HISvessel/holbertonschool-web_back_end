export function uploadPhoto() {
  return new Promise((response, reject) => {
    response({
      status: 200,
      body: 'photo-profile-1',
    });
  });
}

export function createUser() {
  return new Promise((response, reject) => {
    response({
      firstName: "Gillaume",
      lastName: 'Salva',
    });
  });
}
