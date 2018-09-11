const Todos = require('../models/todoModel.js');

module.exports = function (app) {
    app.get('/api/setupTodos', function(req,res){
        const starterTodos = [
            {
                username: 'cgarcia',
                todo: 'play spiderman',
                isDone: false
            },
            {
                username: 'cgarcia',
                todo: 'go to work',
                isDone: false
            },
            {
                username: 'cgarcia',
                todo: 'go to sleep',
                isDone: false
            }
        ];

        Todos.create(starterTodos, function(err, results)
        {
            res.send(results);
        }
        )
    }
    )
};