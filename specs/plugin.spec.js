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

var fs     = require('fs'),
    imacss = require('../'),
    gutil  = require('gulp-util');

describe('The "gulp-imacss" plugin', function () {

    it('should convert images to a CSS file', function (done) {
        var filename = 'svg.css',
            stream   = imacss(filename),
            image    = new gutil.File({
                cwd:  './specs/assets/',
                base: './specs/assets/',
                path: './specs/assets/twitter.svg',
                contents: fs.readFileSync('./specs/assets/twitter.svg')
            });

        stream.on('data', function (css) {
            expect(css.path).toBe(filename);
            expect(css.contents).toBeDefined();
            expect(css.contents.toString('utf-8').substring(0, 7)).toBe('.imacss');

            done();
        });

        stream.write(image);
        stream.end();
    });
});