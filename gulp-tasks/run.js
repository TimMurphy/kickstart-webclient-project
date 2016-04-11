'use strict';

var $ = require('./helpers');
var build = require('./build');
var gulp = require('gulp');

module.exports.watch = function watch() {
    gulp.watch($.files.source, build.source)
}
