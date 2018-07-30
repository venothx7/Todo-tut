// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connec to MongoDb');
    }
    console.log('Connected to MOngoDB Server!! Yay');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    // text: 'number 2 insert',
    // completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert', err);
    //     }
    // console.log(JSON.stringify(result.ops,undefined,2));
    // });

    //Insert new doc into Users(name, age, location)
    //     db.collection('Users').insertOne({
    //         name: 'Andrew',
    //         age: 25,
    //         location: 'New York'
    //     }, (err, result) => {
    //         if (err) {
    //             return console.log('Unable to insert', err);
    //         }
    //         console.log(result.ops[0]._id.getTimestamp());
    //     });


    client.close();
});