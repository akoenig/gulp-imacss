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

var path        = require('path'),
    through     = require('through'),
    imacss      = require('imacss'),
    gutil       = require('gulp-util'),
    lodash      = require('lodash'),
    PLUGIN_NAME = 'gulp-imacss';

module.exports = function (filename, namespace) {

    var images = [];

    if (!filename) {
        throw new PluginError(PLUGIN_NAME,  'Missing CSS filename.');
    }

    function cache (image) {
        images.push(image);
    }

    function transform () {
        var self      = this,
            selectors = [];

        imacss
            .transform(lodash.pluck(images, 'path'), namespace)
            .on('data', function (selector) {
                selectors.push(selector);
            })
            .on('error', function (err) {
                throw new PluginError(PLUGIN_NAME,  err);
            })
            .on('finish', function ()  {
                var css = new gutil.File({
                    path: filename,
                    contents: new Buffer(selectors.join(gutil.linefeed))
                });

                self.emit('data', css);
                self.emit('end');
            });
    }

    return through(cache, transform);
};