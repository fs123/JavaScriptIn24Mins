'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var $$ = require('gulp-load-plugins')({lazy: true});
var del = require('del');
var path = require('path');
var filter = require('gulp-filter');

gulp.task('clean', function (cb) {
    del(['dist/*'], cb);
});

gulp.task('analyze', function () {
    var basePath = path.resolve('./src/app/');
    $$.util.log('Analyzing sources in ' + basePath);

    return gulp.src([basePath + '/**/00_*.js'])
        .pipe(filter(['*', '!*functions.js']))
        .pipe($$.jshint())
        .pipe($$.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($$.jshint.reporter('fail'));
});

gulp.task('test', function() {
    var testPath = path.resolve('./src/test/**/*.js');
    return gulp.src(testPath, {read: false})
        .pipe(mocha({
            reporter: 'nyan'
            }));
});

gulp.task('default', ['analyze', 'test']);
