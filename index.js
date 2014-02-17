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
    through     = require('through2'),
    imacss      = require('imacss'),
    gutil       = require('gulp-util'),
    PLUGIN_NAME = 'gulp-imacss';

module.exports = function (filename, namespace) {

    var selectors = [];

    function transform (file, enc, callback) {
        imacss
            .transform(file, namespace)
            .on('data', function (selector) {
                selectors.push(selector.trim());
            })
            .on('finish', callback)
            .once('error', this.emit.bind(this, 'error'));
    }

    function finalize (callback) {
        var css = new gutil.File({
            path: filename,
            contents: new Buffer(selectors.join(gutil.linefeed))
        });

        this.push(css);

        return callback();
    }

    if (!filename) {
        throw new gutil.PluginError(PLUGIN_NAME,  'Missing CSS filename.');
    }

    return through.obj(transform, finalize);
};