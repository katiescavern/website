// Get a reference to the database service
const database = firebase.database();

// Set a value to the database
database.ref('users/123').set({
  username: 'John Doe',
  email: 'johndoe@example.com'
}).then(() => {
  console.log('Data is set');
}).catch((error) => {
  console.error(error);
});