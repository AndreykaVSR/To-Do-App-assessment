var Todo = require('../models/todo');

module.exports = {
  index,
//   show,
  new: newTodo,
  create
//   delete: deleteTodo
};


// function deleteTodo(req, res) {
//     console.log('DeleteTodo Controller Working!!!!!!!');
//   Todo.deleteOne(req.params.id);
//   res.redirect('/todos');
// }

function create(req, res) {
    console.log('I SEE your To-DOs!');
    req.body.done = false;
    Todo.create(req.body);
    res.redirect('/todos');
}

function newTodo(req, res) {
    console.log('NewTodo Controller Working!!!!!!!');
  res.render('/todos/index');
}


// function index(req, res) {
//     console.log('I SEE your INDEX To-DOs!');
//     res.render('todos/index', {
//       todos: Todo.getAll(),
//       done: true
//     });
//     console.log('I SEE your To-DOs!');
//   }

// function index(req, res) {
//     Todo.find({}, function(err, todos) {
//         console.log('Hello Index Controller!!!');
//       res.render('index', { todos,
//     title: "To Do List" });
//         console.log('Index Controller Working');
//     });
//   };

  function index(req, res) {
    res.render('index', {
      todos: Todo.find(req,res),
      title: title
    });
  }

// function index(req, res) {
//     Todo.getAll(req.body, function(err, todos) {
//         res.redirect('index', { todos });
//         console.log('Index Controller Working!!!!!!!');
//     });
//   }

//   function index(req, res) {
//     Todo.find({}, function(err, todos) {
//         // console.log(todos);
//       res.render('todos/index', { todos });
//     });
//   };

// function show(req, res) {
//   res.render('/index')
//     Todo.getOne(req.params.id)
//     console.log('Show Controller Working!!!!!!!');
// }