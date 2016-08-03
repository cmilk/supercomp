'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', () =>
  gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'))
);

gulp.task('sass:watch', () =>
  gulp.watch('./src/sass/**/*.scss', ['sass'])
);

gulp.task('imagemin', () =>
  gulp.src('src/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'))
);

var concat = require('gulp-concat');

gulp.task('scripts', function() {
  gulp.src(['./src/js/jquery.min.js',
           './src/js/jquery.scrollex.js',
           './src/js/jquery.scrolly.js',
           './src/js/jquery.waypoints.js',
           './src/js/countUp.min.js',
           './src/js/skel.min.js',
           './src/js/util.js',
           './src/js/main.js'])
    .pipe(concat('build.js'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('default', ['imagemin', 'scripts', 'sass', 'sass:watch']);
