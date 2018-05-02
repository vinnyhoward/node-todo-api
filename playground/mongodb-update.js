// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/to-do-app', (err, client) => { // Two arguments, connection and then a callback function
  if(err) {
    return console.log('Unable to connect to MongoDB server', err); // Return stops function from running the rest of code below
  }
  console.log('Connected to MongoDB server');
  const db = client.db('to-do-app')

db.collection('ToDos').findOneAndUpdate({ //findOneAndUpdate requires 3 arguements
  _id: new ObjectID("5ae924b43ee83cce6010a6a5")
},{
  $set: {
    completed: false
  }
}, {
  returnOriginal: false //To NOT return the original collection
}).then(result => {
  console.log(result);
})

db.collection('Users').findOneAndUpdate({ //findOneAndUpdate requires 3 arguements
  _id: ObjectID("5ae917188faef9457c709243")
},{
  $set: {
    name: 'Haley'
  },  
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false //To NOT return the original collection
}).then(result => {
  console.log(result);
})
}); 