/*
 * gulp-imacss
 *
 * Copyright(c) 2014 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

'use strict';

var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    jasmine = require('gulp-jasmine'),
    imacss  = require('./'),
    paths  = {};

paths.sources = ['./*.js', './specs/**/.js'];
paths.specs    = ['./specs/*.spec.js'];

gulp.task('lint', function () {
    gulp.src(paths.sources)
        .pipe(jshint('./.jshintrc'))
        .pipe(jshint.reporter('default'));
});

gulp.task('test', function () {
    gulp.src(paths.specs)
        .pipe(jasmine());
});

// gulp.task('imacss', function () {
//     gulp.src('./test/*.svg')
//         .pipe(imacss('images.svg.css', 'mooo'))
//         .pipe(gulp.dest('./build/'));
// })

gulp.task('default', ['lint', 'test']);