var flatiron = require('flatiron'),
    app = flatiron.app;
var request = require('superagent');

app.router.get('/todos', function () {
    var response = this.res;
    request.get('http://jsonplaceholder.typicode.com/todos', function(err, res){
        if (err) {
            response.json(500, {'error': err});
        } else {
            response.json(200, res.body);
        }
    });
});