const gulp = require('gulp');
const gp_concat = require('gulp-concat');
const gp_rename = require('gulp-rename');
const gp_uglify = require('gulp-uglify');
const debug = require("gulp-debug");
const gp_babel = require('gulp-babel');

var srcPaths = [
    './public/app/ServerApp.{js,jsx}',
    './public/app/**/*.{js,jsx}',
];

gulp.task('transpile', function () {
    return gulp.src(srcPaths)
        .pipe(debug({
            title: 'Input:'
        }))
        .pipe(gp_babel({
            presets: ['es2015', "react"]
        }))
        .pipe(gulp.dest('./public/build/es5/'))
        .pipe(debug({
            title: 'Output:'
        }));
});

gulp.task('build', function () {
    return gulp.src(
            [
                './public/js/jquery.js',
                './public/js/plugins.js',
                './public/js/functions.js'
            ]
        )
        .pipe(gp_concat('gulp-concat.js'))
        .pipe(gulp.dest('./public/min/'))
        .pipe(gp_rename('vendor.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('./public/build/'));
});

gulp.task('watch', function () {
    gulp.watch(srcPaths, ['transpile']);
});

gulp.task('default', ['transpile', 'build', 'watch'], function () {});