const gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    babelify = require('babelify'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    util = require('gulp-util'),
    path = require('path'),
    bower = require('gulp-bower');
var source = require('vinyl-source-stream'); // Vinyl stream support
var buffer = require('vinyl-buffer'); // Vinyl stream support

var paths = {src: './app', out: './dist/'};

function bundle(bundler) {
    bundler
        .bundle()
        .pipe(source(paths.src+'/App.js')) // Set source name
        .pipe(buffer()) // Convert to gulp pipeline
        .pipe(rename('bundle.js')) // Rename the output file
        .pipe(gulp.dest(paths.out)) // Set the output folder
}
gulp.task('js', function () {
    var bundler = browserify('./app/App.js', {debug:true})
        .plugin(watchify, {ignoreWatch: ['**/node_modules/**', '**/bower_components/**']})
        .transform(babelify, {presets: ['es2015', 'react']}); // Browserify

    bundle(bundler);
});

gulp.task('sass', function () {
    return gulp.src(paths.src + '/style/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.out + '/css/'))
        .pipe(connect.reload());
});
gulp.task('uglify', function () {
    return gulp.src(paths.out + '/**/*.js')
        //.pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({'extname': '.min.js'}))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.out +'/'))
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

gulp.task('build', ['html','sass','js', 'uglify']);
gulp.task('watch', function () {
    gulp.watch([paths.src + '/**/*.html'], ['html']);
    gulp.watch([paths.src + '/**/*.js'], ['uglify']);
    gulp.watch([paths.src + '/**/*.scss'], ['sass']);
});

gulp.task('default', ['connect', 'watch']);
