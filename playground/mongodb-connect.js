// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/to-do-app', (err, client) => { // Two arguments, connection and then a callback function
  if(err) {
    return console.log('Unable to connect to MongoDB server', err); // Return stops function from running the rest of code below
  }
  console.log('Connected to MongoDB server');
  const db = client.db('to-do-app')

  // db.collection('ToDos').insertOne({
  //   text: 'Something to do',
  //   completed: false

  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert to-dos', err); // Return stops function from running the rest of code below
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Vince Howard',
  //   age: 27,
  //   location: 'Salt Lake City'
    
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert users', err); // Return stops function from running the rest of code below
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // client.close();
}); 