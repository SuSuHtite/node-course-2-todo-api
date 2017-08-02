const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '697eb337f0441d0f5cc21d1e11';

if(!ObjectID.isValid(id)){
    console.log('Invalid Id');
}
/*
Todo.find({
    _id:id
}).then((todos)=>{
    console.log('Todos',todos);
});

Todo.findOne({
    _id:id
}).then((todo)=>{
    console.log('Todo',todo);
});

Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todo by Id',todo);
}).catch((err)=>{
    console.log('Error',err);
});*/
