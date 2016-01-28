module.exports = function(karma) {
    karma.set({

        frameworks: [ 'browserify', 'mocha' ],
        files: ['test/**/*.js'],
        preprocessors: {
            'test/**/*Spec.js': [ 'browserify' ]
        },

        browserify: {
            debug: true,
            transform: [ ['babelify', { presets: ['es2015','react']}] ]
        },
        logLevel: 'LOG_DEBUG',

        singleRun: true,
        autoWatch: false,
        plugins: [
            'karma-browserify',
            'karma-mocha',
            'karma-mocha-reporter'
        ]
    });
}