var assert = require('assert');
var sinon = require('sinon');
var q = require('q');

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
