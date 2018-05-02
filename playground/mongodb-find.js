// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/to-do-app', (err, client) => { // Two arguments, connection and then a callback function
  if(err) {
    return console.log('Unable to connect to MongoDB server', err); // Return stops function from running the rest of code below
  }
  console.log('Connected to MongoDB server');
  const db = client.db('to-do-app')

//   db.collection('ToDos').find().toArray().then((docs) => {
// console.log('ToDos');
// console.log(JSON.stringify(docs, undefined, 2));
//   }, (err) => {
// console.log('Unable to fetch to-do', err);
//   })

db.collection('ToDos').find().count().then((count) => {
  console.log(`ToDos Count:${count}`);
    }, (err) => {
  console.log('Unable to fetch to-do', err);
    })
  // client.close()
}); 