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

    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID('5b5f5377f6e37617e40d9e68')

    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: true
    // }).then((res) => {
    //     console.log(res);
    // });

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5b5f56bf408e5116e883aff9")
    }, {
        $inc: {
            age: 5
        },
        $set: {
            name: "Veno"
        }
    }, {
        returnOriginal: true
    }).then((res) => {
        console.log(res);
    });

    client.close();
});