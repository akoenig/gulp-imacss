/*
 * gulp-imacss
 *
 * Copyright(c) 2014 - 2015 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

'use strict';

var fs = require('fs');
var imacss = require('../');
var gutil  = require('gulp-util');

var expect = require('expect.js');

describe('The "gulp-imacss" plugin', function suite () {

    it('should convert images to a CSS file', function test (done) {
        var filename = 'svg.css';
        var stream = imacss(filename);
        var image = new gutil.File({
            cwd:  './specs/assets/',
            base: './specs/assets/',
            path: './specs/assets/twitter.svg',
            contents: fs.readFileSync('./specs/assets/twitter.svg')
        });

        stream.on('data', function (css) {
            expect(css.path).to.be(filename);
            expect(css.contents).not.to.be(undefined);
            expect(css.contents.toString('utf-8').substring(0, 7)).to.be('.imacss');

            done();
        });

        stream.write(image);
        stream.end();
    });
});
