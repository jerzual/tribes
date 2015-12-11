
'use strict';

var browserify = require('browserify');
var watchify = require('watchify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var less = require('gulp-less');
var connect = require('gulp-connect');
//var cordova = require('gulp-cordova');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var util = require('gulp-util');
var jade = require('gulp-jade');
var path = require('path');
var del = require('del');

var paths = {
    src: './src',
    out: './www'
};

gulp.task('clean', function () {
    del(paths.out+'/*');
});
/* compiles less to css
 ------------------------------- */
gulp.task('less', function () {
    return gulp.src(paths.src + '/less/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.out + '/css/'))
        .pipe(connect.reload());
});

/* compiles jade to html
 ------------------------------- */
gulp.task('jade', function () {
    return gulp.src(paths.src + '/*.jade')
        .pipe(sourcemaps.init())
        .pipe(jade())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.out + '/'))
        .pipe(connect.reload());
});

/* browserify  js code
 ------------------------------- */
gulp.task('javascript', function () {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: paths.src +'/js/main.js',
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
        .pipe(gulp.dest(paths.out+'/js/'))
        .pipe(connect.reload());
});

gulp.task('connect', function () {
    connect.server({
        root: 'www',
        livereload: true,
        port:9001
    });
});

gulp.task('build', ['jade','less', 'javascript']);

gulp.task('watch', function () {
    gulp.watch([paths.src + '/**/*.jade'], ['jade']);
    gulp.watch([paths.src + '/**/*.js'], ['javascript']);
    gulp.watch([paths.src + '/**/*.less'], ['less']);
});

gulp.task('default', ['connect', 'watch']);