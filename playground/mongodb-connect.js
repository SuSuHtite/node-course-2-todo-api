/*const MongoClient = require('mongodb').MongoClient;*/

const {MongoClient,ObjectID} = require('mongodb');

/*
var obj = new ObjectID();
console.log(obj); //597abd292a40a7087cf2245f

 */

/*var user = { name :'su su 2', age :30};
var {name} =user;

console.log(name);*/ //su su 2



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {

    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    /*   db.collection('Todos').insertOne({
     text : 'Something to do',
     completed : false

     },(err,result)=>{

     if(err){
     return console.log('Unable to insert todo',err);
     }

     console.log(JSON.stringify(result.ops,undefined,2));
     });*/

   /* db.collection('Users').insertOne(
        {
            _id:123,
            name: 'Su Su',
            age: 30,
            location: 'Yangon'
        }, (err, result)=> {
            if (err) {
                return console.log('Unable to insert user', err);
            }

            console.log(JSON.stringify(result.ops, undefined, 2));
        }
    );*/

    db.close();
});