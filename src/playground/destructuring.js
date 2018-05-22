// 
// OBJECT DESTRUCTURING 
// 

// const person = {
//     name: 'Gibran',
//     age: 22,
//     location: {
//         city: 'Islamabad',
//         temp: 20
//     }
// }

// const { name = 'Anonymous', age } = person;

// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;
// if(city && typeof temperature === 'number'){
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self Published'} = book.publisher;

// console.log(publisherName);

// 
// ARRAY DESTRUCTURING 
// 


const address = ['H-8, R79', 'Topi', 'KPK', '8790'];

const [street, city, state, zip] = address;

console.log(`You're in ${city}, ${state}.`);