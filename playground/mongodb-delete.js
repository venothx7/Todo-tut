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

    // deleteMany
    //delete evrytin w/ text: "Eat Lunch"
    // db.collection('Todos').deleteMany({
    //     text: "Eat Lunch"
    // }).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'number 2 insert'
    // }).then((result) => {
    //     console.log(result);
    // })

    //fineOneAndDelete  using id
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({
    //     name: "Andrew"
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b5f6b6964021d34bc189357')
    }).then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    });


    client.close();
});