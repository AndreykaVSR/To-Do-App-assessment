var mongoose = require('mongoose');
 var Schema = mongoose.Schema;


 const todoSchema = new Schema ({ 
    todo: [], 
    done: false 
});



module.exports = mongoose.model('Todo', todoSchema);