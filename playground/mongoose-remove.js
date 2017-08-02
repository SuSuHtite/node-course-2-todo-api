const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) =>{
 console.log(result);
});

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id:'597af5575de52c0d30d6d2bb'}).then((result)=>{

});

Todo.findByIdAndRemove('597af5575de52c0d30d6d2bb').then((result)=>{
  console.log(result);
});
