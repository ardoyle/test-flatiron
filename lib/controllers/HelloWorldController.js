var flatiron = require('flatiron'),
    app = flatiron.app;

app.router.get('/', function () {
    this.res.json({ 'hello': 'world' })
});