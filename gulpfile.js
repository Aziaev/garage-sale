// including plugins
var gulp = require('gulp')
var minifyCSS = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')
var gp_concat = require('gulp-concat')
var gp_rename = require('gulp-rename')
var gp_uglify = require('gulp-uglify')
var sass = require('gulp-sass')
// var less = require('gulp-less')
var to5 = require('gulp-6to5')
var path = require('path')
var googleWebFonts = require('gulp-google-webfonts')
var options = {};

gulp.task('css', ['sass'], function () {
  return gulp.src(
    [
      './public/css/bootstrap.min.css',
      './public/css/material-dashboard.css',
      './public/css/demo.css',
      'http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css'
    ]
  )
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(gp_concat('style.min.css'))
    .pipe(gulp.dest('./public/dist/css/'))
})

gulp.task('sass', function () {
  return gulp.src('./public/sass/material-dashboard.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
})

gulp.task('fonts', function () {
  return gulp.src('./fonts.list')
    .pipe(googleWebFonts(options))
    .pipe(gulp.dest('./public/dist/css/fonts/'))
    ;
});

gulp.task('style', ['css', 'fonts'], function () {
})


gulp.task('js', function () {
  return gulp.src(
    [
      './public/js/jquery-3.2.1.min.js',
      './public/js/bootstrap.min.js',
      './public/js/material.min.js',
      './public/js/chartist.min.js',
      './public/js/arrive.min.js',
      './public/js/perfect-scrollbar.jquery.min.js',
      './public/js/bootstrap-notify.js',
      './public/js/material-dashboard.js',
      './public/js/demo.js'
    ]
  )
    .pipe(gp_concat('vendor.min.js'))
    .pipe(gulp.dest('./public/dist/js/'))
    .pipe(gp_rename('vendor.min.js'))
    .pipe(gp_uglify())
    .pipe(gulp.dest('./public/dist/js/'))
});

gulp.task('es6-es5', ['js'], function () {
  return gulp.src([
      './src/*/**.js',
      './src/*/*/**.js'
    ]
  )
    .pipe(to5())
    .pipe(gulp.dest('./public/dist/es5/'))
});

gulp.task('watch', function () {
  gulp.watch(['./src/*/**.js', './src/*/*/**.js', './public/js/**.js'], ['es6-es5'])
})

gulp.task('prod', ['style', 'es6-es5'], function () {
})

gulp.task('default', ['es6-es5', 'watch'], function () {
})
