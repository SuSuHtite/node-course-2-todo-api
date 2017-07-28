/*const MongoClient = require('mongodb').MongoClient;*/

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {

    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    /*db.collection('Todos').find({ _id : new ObjectID('597abe081aa4090d5463f2ea') }).toArray().then((docs)=>{
            console.log('Todos');
            console.log(JSON.stringify(docs,undefined,2));
        },(err)=>{
        console.log('Unable to fetch docs',err);
    });*/
/*
    db.collection('Todos').find( ).count().then((count)=>{
     console.log('Todos');
     console.log(count);
     },(err)=>{
     console.log('Unable to fetch docs',err);
     });*/
   db.collection('Users').find({name :'Su Su'}).toArray().then((res)=>{

       console.log(res);
   },(err)=>{
       console.log('Unable to fetch by user name',err);
   });


    db.collection('Users').find().count().then((count)=>{

        console.log(`Count of Users : ${count}`);
    },(err)=>{

        console.log('Unable to fetch user count',err);
    });

    //db.close();
});