// Initialize Firebase
import * as firebase from 'firebase';

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

//connects to database
const database = firebase.database();

export { firebase, database as default }

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 100000,
//   createdAt: 128301923812
// });

// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => { 
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });

//   console.log(expenses);
// });

// CHILD REMOVED
// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// CHILD CHANGED 
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// })

// CHILD ADDED
// database.ref('expense').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// })

// STORE DATA IN ARRAY
// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => { 
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });
//   console.log(expenses);
// });

// database.ref('notes').push({
//   title: 'TODO',
//   body: 'Go for a run'
// })

// const firebaseNotes = {
//   notes: {
//     wqe: {
//       title: 'first note',
//       body: 'This is another one'
//     }
//   }
// }

// const notes = [{
//   id: '12',
//   body: 'This is a note',
//   title: 'First Note'
// }, {
//   id: '13',
//   body: 'This is a note',
//   title: 'Another Note'
// }];

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', snapshot => {
//   const person = snapshot.val();
//   console.log(`${person.name} is a ${person.job.title} at ${person.job.company}`);
// }, e => console.log('Error fetching data', e))

// Listen to Live Changes
// const onValueChnage = database.ref().on('value', snapshot => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error Fetching Data', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChnage);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);



// READ Data
// database.ref('location')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => console.log(e))

// ADD Data
// creates ref to specific part of database e.g mongo collection or sql table
// database.ref().set({
//   name: 'Gibran',
//   age: 22,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Islamabad',
//     country: 'Pakistan'
//   }
// }).then(() => {
//   console.log('Data is saved')
// }).catch((error) => {
//   console.log(error);
// });

// // UPDATE data
// database.ref().update({ 
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// }).then(() => console.log('Updated')).catch(e => console.log(e));

// DELETE Data
// database.ref('age').remove().then(() => console.log('Removed'))
// .catch(e => console.log(e))

