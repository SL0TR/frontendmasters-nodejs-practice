var app = require('./server');
var request = require('supertest');
var expect = require('chai').expect;

// TODO: make tests for the other CRUD routes
// DELETE, UPDATE, PUT, GET ONE
// to run the test type mocha server/specs.js

describe('[LIONS]', function(){

  it('should get all lions', function(done) {
    request(app)
      .get('/lions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('array');
        done();
      })
  });

  it('should create a lion', function(done) {
    var lion = {
      name: 'Mufasa',
      age: 100,
      pride: 'Evil Lions',
      gender: 'male',
    }
    request(app)
      .post('/lions')
      .send()
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('object');
        // expect(resp.body).to.eql(lion);
        done();
      })
  })

  it('should delete a lion', function(done) {
    request(app)
      .post('/lions')
      .send({
        name: 'Mufasa',
        age: 100,
        pride: 'Evil Lions',
        gender: 'male',
      })
      .set('Accept', 'application/json')
      .end(function(err, res) {
        var lion = res.body;
        request(app)
          .delete('/lions/' + lion.id)
          .end(function(err, res) {
            expect(res.body).to.eql(lion);
            done();
          })
      })
  })

  it('should update a lion', function(done) {
    request(app)
      .post('/lions')
      .send({
        name: 'Mufasa',
        age: 100,
        pride: 'Evil Lions',
        gender: 'male',
      })
      .set('Accept', 'application/json')
      .end(function(err, res) {
        var lion = res.body;
        request(app)
          .put('/lions/' + lion.id)
          .send({
            name: 'new name'
          })
          .end(function(err, res) {
            expect(res.body.name).to.eql('new name');
            done();
          })
      })
  })

});


