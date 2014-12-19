var assert = require("assert")
var sinon = require('sinon');
var Cow = require('../cow').Cow
var Song = require('../cow').Song
var q = require('q')

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

    describe("#run", function() {
        it("should show speed", function() {
            var run = (new Cow("Kate")).run()('5mph');
            assert.equal(run, "run@5mph");
        });
    });

    describe("#lateGreets", function() {
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

describe('Cow', function() {
    describe('#sing', function() {
        it('should sing passed song', function() {
            var singing = new Cow().sing(new Song('Jingle Bell'));
            assert.equal(singing, "I am singing:Jingle Bell");
        });
    });

    describe('#sing2', function() {
        it('should sing passed song', function() {
            var song = new Cow().sing2('Jingle Bell');
            assert.equal(song.getName(), "song name:Jingle Bell");
        });
    });
});


var Test = {
    do: function(thing) {
        return "no";
    },
    getUserById: function(id) {
        return {
            'id': id,
            'name': 'alex'
        };
    },
    getUserByIdAsync: function(id) {
        var defer = q.defer();
        setTimeout(function() {
            defer.resolve({
                'id': id,
                'name': 'alex'
            });
        }, 1000);
        return defer.promise;
    }
};

describe('Test', function() {
    describe('#do', function() {
        it('should stub do method', function() {
            sinon.stub(Test, "do", function() {
                return "yes";
            });
            assert.equal(Test.do("thing"), "yes");
            Test.do.restore()
            assert.equal(Test.do("thing"), "no");
        });
    });
    describe('#getUserById', function() {
        it('should stub getUserById method', function() {
            sinon.stub(Test, "getUserById", function() {
                return {
                    'id': 1,
                    'name': 'john'
                };
            });
            assert.equal(false, Test.getUserById.calledOnce);
            var user = Test.getUserById();
            assert.equal(user.name, "john");
            assert.equal(user.id, 1);
            assert.equal(true, Test.getUserById.calledOnce);

            Test.getUserById.restore()
            assert.deepEqual(Test.getUserById(99), {
                'id': 99,
                'name': 'alex'
            });
        });
    });

    describe('#getUserByIdAsync', function() {
        it('should stub getUserByIdAsync method', function(done) {
            sinon.stub(Test, "getUserByIdAsync", function() {
                return {
                    'id': 1,
                    'name': 'john'
                };
            });
            assert.equal(false, Test.getUserByIdAsync.calledOnce);
            var user = Test.getUserByIdAsync();
            assert.equal(user.name, "john");
            assert.equal(user.id, 1);
            assert.equal(true, Test.getUserByIdAsync.calledOnce);

            Test.getUserByIdAsync.restore();
            (function() {
                var p = Test.getUserByIdAsync(99);
                done();
                return p;
            })().then(function(data) {
                assert.deepEqual(data, {
                    'id': 99,
                    'name': 'alex'
                });
            });
        });
    });
});
