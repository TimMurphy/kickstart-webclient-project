'use strict';

var config = require('../config');
var chalk = require('chalk');
var File = require('vinyl');
var gulp = require('gulp');
var logger = require('glogg')('gulplog');

module.exports = {
    directories: config.directories,
    files: config.files,

    copyDirectory: function copyDirectory(src, dest) {
        log('Copying', quote(src), 'to', quote(dest));
        return gulp
            .src(src)
            .pipe(gulp.dest(dest));
    },

    getRelative: function getRelative(base, path) {
        var file = new File({ base: base, path: path });
        return file.relative;
    },

    log: log,
    quote: quote
};

// make our log messages standout from gulp by printing in green
function log() {
    var args = Array.prototype.slice.call(arguments);
    var message = chalk.green(args.join(' '));
    logger.info(message);
}

function quote(value) {
    return '\'' + value + '\'';
}