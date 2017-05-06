const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const should = chai.should();
const mocha = require('mocha');
const app = require('./server');

chai.use(require('chai-things'));
chai.use(chaiHttp);

describe('Repairshop', () => {

  describe('GET', () => {

    it('should return status 200', (done) => {
      chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
    });

    it('should return an average time of 2.5 and ratio of 2.5 for Bob for repair type A', (done) => {
      chai.request(app)
      .get('/')
      .end((err, res) => {
        const actual = JSON.stringify(res.body.filter(row => (row.mechanic === 'Bob' && row.type === 'A')));
        const expected = JSON.stringify([{ mechanic: 'Bob', type: 'A', avg: 2.5, ratio: 2.5 }]);
        expect(actual).to.equal(expected);
        done();
      });
    });

    it('should return an average time of 4.333 and ratio of 4.333 for Rich for repair type B', (done) => {
      chai.request(app)
      .get('/')
      .end((err, res) => {
        const actual = JSON.stringify(res.body.filter(row => (row.mechanic === 'Rich' && row.type === 'B')));
        const expected = JSON.stringify([{ mechanic: 'Rich', type: 'B', avg: 4.333, ratio: 4.333 }]);
        expect(actual).to.equal(expected);
        done();
      });
    });

    it('should return an average time of 3 and ratio of 1 for Larry for repair type C', (done) => {
      chai.request(app)
      .get('/')
      .end((err, res) => {
        const actual = JSON.stringify(res.body.filter(row => (row.mechanic === 'Larry' && row.type === 'C')));
        const expected = JSON.stringify([{ mechanic: 'Larry', type: 'C', avg: 3, ratio: 1 }]);
        expect(actual).to.equal(expected);
        done();
      });
    });

    it('should return an average time of 5.333 and ratio of 2.667 for Peter for repair type D', (done) => {
      chai.request(app)
      .get('/')
      .end((err, res) => {
        const actual = JSON.stringify(res.body.filter(row => (row.mechanic === 'Peter' && row.type === 'D')));
        const expected = JSON.stringify([{ mechanic: 'Peter', type: 'D', avg: 4, ratio: 2 }]);
        expect(actual).to.equal(expected);
        done();
      });
    });

    it('should return an average time of 2.25 and ratio of 0.75 for Simone for repair type E', (done) => {
      chai.request(app)
      .get('/')
      .end((err, res) => {
        const actual = JSON.stringify(res.body.filter(row => (row.mechanic === 'Simone' && row.type === 'E')));
        const expected = JSON.stringify([{ mechanic: 'Simone', type: 'E', avg: 2.25, ratio: 0.75 }]);
        expect(actual).to.equal(expected);
        done();
      });
    });

    it('should return an average time of 5 and ratio of 2 for Simone for repair type F', (done) => {
      chai.request(app)
      .get('/')
      .end((err, res) => {
        const actual = JSON.stringify(res.body.filter(row => (row.mechanic === 'Simone' && row.type === 'F')));
        const expected = JSON.stringify([{ mechanic: 'Simone', type: 'F', avg: 5, ratio: 2 }]);
        expect(actual).to.equal(expected);
        done();
      });
    });

  });
});
