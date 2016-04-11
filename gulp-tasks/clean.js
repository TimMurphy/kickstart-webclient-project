'use strict';

var $ = require('./helpers');
var del = require('del');

module.exports = {
    artifactsDirectory: function artifactsDirectory(cb) {
        var directory = $.directories.artifacts;
        $.log('Cleaning', $.quote(directory));
        del(directory).then(p => cb());
    }
}
