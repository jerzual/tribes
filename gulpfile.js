var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    less = require('gulp-less'),
    connect = require('gulp-connect'),
    minifyCSS = require('gulp-minify-css'),
    rjs = require('gulp-requirejs'),
    bowerFiles = require('main-bower-files'),
    bowerRequireJS = require('bower-requirejs'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    jade = require('jade'),
    gulpJade = require('gulp-jade'),
    path = require('path');
    util = require('gulp-util'),
    bower = require('gulp-bower');

var paths = {src: './src', out: './www/'};

/* run a simple bower install
------------------------------- */
gulp.task('bower', function() {
    return bower();
});
/*copy bower dependencies to js libs dir
------------------------------- */
gulp.task('bower-requirejs', function () {
    gulp.src(bowerFiles())
        .pipe(
            gulp.dest(paths.out + '/javascripts/vendor')
        );
    //generate require.js config file
    var options = {
        baseUrl: 'js/',
        config: 'www/javascripts/config.js',
        transitive: true,
        'exclude-dev' : true
    };

    bowerRequireJS(options, function (rjsConfigFromBower) {
        util.log("Updated www/javascripts/config.js !");
        util.log(rjsConfigFromBower);
    });
});

gulp.task('requirejs', function () {
    var bowerConfig = require('www/javascripts/config.js');
    rjs({
        baseUrl: 'www/javascripts/',
        name:'main',
        out: 'tribes.min.js',
        shim: {
            // standard require.js shim options
        }
        // ... more require.js options
    })
        .pipe(gulp.dest(paths.out + '/js/')); // pipe it to the output DIR
});
gulp.task('less', function () {
    return gulp.src(paths.out + '/stylesheets/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.out + '/stylesheets/'))
        .pipe(connect.reload());
});
gulp.task('uglify', function () {
    return gulp.src(paths.out + '/**/*.js')
        //.pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({'extname': '.min.js'}))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.out +'/../dist'))
        .pipe(connect.reload());
});
gulp.task('html', function () {
    // place code for your default task here
});


gulp.task('connect', function () {
    connect.server({
        root: 'www',
        livereload: true
    });
});

gulp.task('build', ['html','less', 'uglify']);
gulp.task('watch', function () {
    gulp.watch([paths.src + '/**/*.html'], ['html']);
    gulp.watch([paths.out + '/**/*.js'], ['uglify']);
    gulp.watch([paths.out + '/**/*.less'], ['less']);
});

gulp.task('default', ['connect', 'watch']);