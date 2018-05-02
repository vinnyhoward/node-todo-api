// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/to-do-app', (err, client) => { // Two arguments, connection and then a callback function
  if(err) {
    return console.log('Unable to connect to MongoDB server', err); // Return stops function from running the rest of code below
  }
  console.log('Connected to MongoDB server');
  const db = client.db('to-do-app')
// DeleteMany
// db.collection('ToDos').deleteMany({text: 'Eat hella food'}).then((results) => {
//   console.log('success', results);
// })
// DeleteOne
// db.collection('ToDos').deleteOne({text: 'Eat hella food'}).then((results) => {
//   console.log('success', results);
// })
// FindOneAndDelete
db.collection('ToDos').findOneAndDelete({completed: true}).then((results) => {
  console.log('success', results);
})
  // client.close()
}); 