"use strict";

function Cow(name) {
    this.name = name || "Anon cow";
}
exports.Cow = Cow;

Cow.prototype = {
    greets: function(target) {
        if (!target)
            throw new Error("missing target");
        return this.name + " greets " + target;
    },
    run: function() {
        return function(speed) {
            return 'run@' + speed;
        }
    },
    lateGreets: function(target, cb) {
        setTimeout(function(self, msg) {
            console.log(msg);
            try {
                cb(null, self.greets(target));
            } catch (err) {
                cb(err);
            }
        }, 1000, this, 'hello, world'); // use this form to pass additinal parameter
    },
    sing: function(song) {
        return 'I am singing:' + song.name;
    },
    sing2: function(song) {
        return new Song(song);
    }
};


function Song(name) {
    this.name = name;
}

Song.prototype.getName = function() {
    return 'song name:' + this.name;
};

exports.Song = Song;
