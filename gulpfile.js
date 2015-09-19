
'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var less = require('gulp-less');
var connect = require('gulp-connect');
var cordova = require('gulp-cordova');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var util = require('gulp-util');
var path = require('path');

var paths = {src: './src', out: './www/'};

/* compiles less to css
 ------------------------------- */
gulp.task('less', function () {
    return gulp.src(paths.out + '/stylesheets/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.out + '/stylesheets/'))
        .pipe(connect.reload());
});


/* browserifynpm  js code
 ------------------------------- */
gulp.task('javascript', function () {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: paths.out +'/javascripts/main.js',
        debug: true
    });

    return b.bundle()
        .pipe(source('./bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.out+'/javascripts/'));
});

/* copy html filenpm install
 ------------------------------- */
gulp.task('html', function () {
    // place code for your default task here
});


gulp.task('connect', function () {
    connect.server({
        root: 'www',
        livereload: true
    });
});

gulp.task('build', ['html','less', 'javascript']);

gulp.task('watch', function () {
    gulp.watch([paths.src + '/**/*.html'], ['html']);
    gulp.watch([paths.out + '/**/*.js'], ['uglify']);
    gulp.watch([paths.out + '/**/*.less'], ['less']);
});

gulp.task('default', ['connect', 'watch']);