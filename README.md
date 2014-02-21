# gulp-[imacss](http://github.com/akoenig/imacss) [![Build Status](https://travis-ci.org/akoenig/gulp-imacss.png?branch=master)](https://travis-ci.org/akoenig/gulp-imacss)

> imacss (the image to datauri to CSS transformer) plugin for gulp


## Usage

First, install `gulp-imacss` as a development dependency:

```shell
npm install --save-dev gulp-imacss
```

Then, add it to your `gulpfile.js`:

```javascript
var imacss = require('gulp-imacss');

gulp.task('imacss', function () {
    gulp.src('./images/**/*.svg')
        .pipe(imacss('images.svg.css'))
        .pipe(gulp.dest('./build/'));
});
```

You're are also able to do something different before piping it to `imacss`:

```javascript
var svg2png = require('gulp-svg2png');
    imacss  = require('gulp-imacss');

gulp.task('imacss', function () {
    gulp.src('./images/**/*.svg')
        .pipe(svg2png())
        .pipe(imacss('images.png.css'))
        .pipe(gulp.dest('./build/'));
});
```

In this case the result would be first a transformation from SVG to PNG images and then the production of the CSS file `images.png.css`.

## API

### imacss(filename [, namespace])

#### filename
Type: `String`
Default: undefined

Name of the CSS file that should be generated, e.g. `images.svg.css`.

#### namespace (optional)
Type: `String`  
Default: undefined

Namespace of the CSS classes.

## Changelog

### Version 0.2.3 (20140221)

- Added more files to .npmignore.

### Version 0.2.1 and 0.2.2 (20140217)

- Fixed some documentation problems.

### Version 0.2.0 (20140217)

- Refactored the index file and integrated 'imacss' v0.2.0

### Version 0.1.2 (20140215)

- Refactoring in order to remove the lodash dependency.

### Version 0.1.1 (20140211)

- Fixed test runner call in the package.json

### Version 0.1.0 (20140211)

- Initial Release.

## Author

Copyright 2014, [André König](http://iam.andrekoenig.info) (andre.koenig@posteo.de)
