var request = require('supertest');
var nock = require('nock');
var flatiron = require('flatiron');
var app = flatiron.app;
var assert = require('assert');


describe('TodoController', function() {
    describe('#getTodos', function() {
        before(function() {
            app.use(flatiron.plugins.http);
            require('../../lib/controllers');
            app.createServer();
        });
        it('should return custom json', function(done) {
            var scope = nock('http://jsonplaceholder.typicode.com')
                .get('/todos')
                .reply(200, {
                    username: 'pgte',
                    email: 'pedro.teixeira@gmail.com'
                });

            request(app.server)
                .get('/todos')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err, res){
                    assert(res.body.username, 'pgte');
                    done();
                });
        });
    });
});