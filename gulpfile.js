const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const exorcist = require('exorcist');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref');
const pug = require('gulp-pug');
const path = require('path');
const transform = require('vinyl-transform'); // Vinyl stream support
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer'); // Vinyl stream support

const paths = {src: './app', out: './www/'};


function bundle(bundler) {
    bundler
        .bundle()
        .pipe(exorcist(paths.out+'/bundle.js.map'))
        .pipe(source(paths.src + '/Main.js')) // Set source name
        .pipe(buffer()) // Convert to gulp pinpm outdatedpeline
        .pipe(rename('bundle.js')) // Rename the output file
        .pipe(gulp.dest(paths.out))// Set the output folder
        .pipe(connect.reload());
}
gulp.task('browserify', () => {
    var bundler = browserify('./app/Main.js', {debug: true})
        //.plugin(watchify, {ignoreWatch: ['**/node_modules/**', '**/bower_components/**']})
        .transform(babelify); // Browserify

    bundle(bundler);
});

gulp.task('lint',function(){
    return gulp.src([paths.src+'**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
gulp.task('sass', () =>
    gulp.src(paths.src + '/styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.out + '/'))
        .pipe(connect.reload())
);

gulp.task('uglify',['browserify'], () =>
    gulp.src(paths.out + '/bundle.js')
        .pipe(uglify())
        .pipe(rename({'extname': '.min.js'}))
        .pipe(gulp.dest(paths.out + '/'))
        .pipe(connect.reload())
);
gulp.task('html', () => {
    gulp.src([paths.src + '/*.jade'])
        .pipe(pug())
        .pipe(useref())
        .pipe(gulp.dest(paths.out + '/'))
        .pipe(connect.reload())
});


gulp.task('connect', () => {
    connect.server({
        port: 8888,
        root: 'www',
        livereload: true,
        port:9001
    });
});

gulp.task('build', ['html', 'sass', 'browserify', 'uglify']);
gulp.task('watch', () => {
    gulp.watch([paths.src + '/**/*.jade'], ['html']);
    gulp.watch([paths.src + '/**/*.js'], ['lint','browserify']);
    gulp.watch([paths.src + '/**/*.scss'], ['sass']);
});

gulp.task('default', ['connect', 'watch']);
