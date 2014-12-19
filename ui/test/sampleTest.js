var assert = require("assert")
var Cow = require('../cow').Cow

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        })
        it('should return index(>=0) when the value is present', function() {
            assert.equal(1, [1, 2, 3].indexOf(2));
        })
    })
});

describe("Cow", function() {
    describe("constructor", function() {
        it("should have a default name", function() {
            var cow = new Cow();
            assert.equal(cow.name, "Anon cow");
        });

        it("should set cow's name if provided", function() {
            var cow = new Cow("Kate");
            assert.equal(cow.name, "Kate");
        });
    });

    describe("#greets", function() {
        it("should throw if no target is passed in", function() {
            // assert.equal(new Cow().greets(), );
            assert.throws(
                new Cow().greets,
                Error,
                "missing target"
            );

        });


        it("should greet passed target", function() {
            var greetings = (new Cow("Kate")).greets("Baby");
            assert.equal(greetings, "Kate greets Baby");
        });
    });
});
