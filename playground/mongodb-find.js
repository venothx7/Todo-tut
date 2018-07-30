// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connec to MongoDb');
    }
    console.log('Connected to MOngoDB Server!! Yay');
    const db = client.db('TodoApp');

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    db.collection('Todos').find().toArray().then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    })


    client.close();
});