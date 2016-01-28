const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const jade = require('gulp-jade');
const path = require('path');
const source = require('vinyl-source-stream'); // Vinyl stream support
const buffer = require('vinyl-buffer'); // Vinyl stream support

const paths = {src: './app', out: './www/'};

function bundle(bundler) {
    bundler
        .bundle()
        .pipe(source(paths.src + '/App.js')) // Set source name
        .pipe(buffer()) // Convert to gulp pipeline
        .pipe(rename('bundle.js')) // Rename the output file
        .pipe(gulp.dest(paths.out)) // Set the output folder
}
gulp.task('js', () => {
    var bundler = browserify('./app/App.js', {debug: true})
        .plugin(watchify, {ignoreWatch: ['**/node_modules/**', '**/bower_components/**']})
        .transform(babelify, {presets: ['es2015', 'react']}); // Browserify

    bundle(bundler);
});

gulp.task('sass', () =>
    gulp.src(paths.src + '/style/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.out + '/css/'))
        .pipe(connect.reload())
);

gulp.task('uglify', () =>
    gulp.src(paths.out + '/**/*.js')
        //.pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({'extname': '.min.js'}))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.out + '/'))
        .pipe(connect.reload())
);
gulp.task('html', () => {
    // place code for your default task here
});


gulp.task('connect', () => {
    connect.server({
        port: 8888,
        root: 'www',
        livereload: true
    });
});

gulp.task('build', ['html', 'sass', 'js', 'uglify']);
gulp.task('watch', () => {
    gulp.watch([paths.src + '/**/*.html'], ['html']);
    gulp.watch([paths.src + '/**/*.js'], ['uglify']);
    gulp.watch([paths.src + '/**/*.scss'], ['sass']);
});

gulp.task('default', ['connect', 'watch']);