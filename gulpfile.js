const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('gulp-cssnano');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

const templateMainPath = 'assets/templates/main/';
const distMainPath = 'assets/templates/main/';

gulp.task('postcss-main', function() {
  return gulp.src(templateMainPath + 'postcss/main.css')
    .pipe(postcss())
    .pipe(rename('main.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest(distMainPath + 'css'));
});

gulp.task('serve', ['postcss-main'], function() {
    gulp.watch(templateMainPath + 'postcss/*.css', ['postcss-main']);
});

gulp.task('watch-main', ['postcss-main'], function() {
    gulp.watch(templateMainPath + 'postcss/*.css', ['postcss-main']);
});

gulp.task('default', ['serve']);
gulp.task('watch', ['watch-main']);
