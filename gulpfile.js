'use strict';

var build = require('./gulp-tasks/build')
var clean = require('./gulp-tasks/clean');
var gulp = require('gulp');
var run = require('./gulp-tasks/run');
var shell = require('gulp-shell');

gulp.task('build', gulp.series(clean.artifactsDirectory, gulp.parallel(build.source, build.vendors)));
gulp.task('run', gulp.series('build', gulp.parallel(run.watch, shell.task(['npm run start']))));
