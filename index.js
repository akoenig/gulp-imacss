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

    function cache (image) {
        images.push(image);
    }

    function transform () {
        /*jshint validthis:true */
        var self = this,
            selectors = [];

        imacss
            .transform(lodash.pluck(images, 'path'), namespace)
            .on('data', function (selector) {
                selectors.push(selector);
            })
            .once('error', this.emit.bind(this, 'error'))
            .once('finish', function ()  {
                var css = new gutil.File({
                    path: filename,
                    contents: new Buffer(selectors.join(gutil.linefeed))
                });

                self.emit('data', css);
                self.emit('end');
            });
    }

    if (!filename) {
        throw new gutil.PluginError(PLUGIN_NAME,  'Missing CSS filename.');
    }

    return through(cache, transform);
};