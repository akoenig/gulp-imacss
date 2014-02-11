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

var gulp = require('gulp'),
    imacss = require('./');

gulp.task('imacss', function () {
    gulp.src('./test/*.svg')
        .pipe(imacss('images.svg.css', 'mai'))
        .pipe(gulp.dest('./build/'));
})