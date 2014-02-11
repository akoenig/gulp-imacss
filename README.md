# gulp-[imacss](http://github.com/akoenig/imacss)

> imacss (the image to datauri to CSS transformer) plugin for gulp


## Usage

First, install `gulp-imacss` as a development dependency:

```shell
npm install --save-dev gulp-imacss
```

Then, add it to your `gulpfile.js`:

```javascript
var jshint = require('gulp-imacss');

gulp.task('imacss', function () {
    gulp.src('./images/**/*.svg')
        .pipe(imacss('images.svg.css'))
        .pipe(gulp.dest('./build/'));
});
```

## API

### imacss(filename [, namespace])

#### filename
Type: `String`
Default: null

Name of the CSS file that should be generated, e.g. `images.svg.css`.

#### namespace
Type: `String`  
Default: null

Namespace of the CSS classes.

## Changelog

### Version 0.1.0 (20140211)

- Initial Release.

## Author

Copyright 2014, [André König](http://iam.andrekoenig.info) (andre.koenig@posteo.de)