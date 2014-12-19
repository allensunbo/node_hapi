var assert = require('assert');
var Cow = require('./cow').Cow;

describe('Cow', function() {
    describe('constructor', function() {
        it('shold return default value if no name is passed in', function() {
            assert.equal(new Cow().name, "Anon cow");
        });

        it('shold return given value if name is passed in', function() {
            assert.equal(new Cow('Alex').name, "Alex");
        });

        it('should throw exception is not target is passed in', function() {
            assert.throws(new Cow().greets, Error, 'missing target');
        });

        it('should greet passed target', function() {
            assert.equal(new Cow().greets('John'), 'Anon cow greets John');
        });
    });
});
