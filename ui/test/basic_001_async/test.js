var assert = require('assert');
var Cow = require('./cow').Cow;

describe('Cow', function() {
    describe('constructor', function() {
        it("should pass an error if no target is passed", function(done) {
            assert.throws((new Cow()).lateGreets(null, function(err, greetings) {
                done();
            }), Error);
        });

        it("should greet passed target after one second", function(done) {
            new Cow("Kate").lateGreets("Baby", function(err, greetings) {
                assert.equal(err, null);
                assert.equal(greetings, "Kate greets Baby");
                done();
            });
        });
    });
});
