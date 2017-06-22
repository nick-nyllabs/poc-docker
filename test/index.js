var chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('http calls', function () {
    it('should hit the / of the container', function (done) {
        chai.request('127.0.0.1') //because docker is listening in this machine, we can access the localhost rather than importing the server.
            .get('/')
            .end(function (err, res) {
                if(!res) throw new ReferenceError("No Response. This probably means the Docker Image isn't running");
                res.should.have.status(200);
                done();
            })
    })
});