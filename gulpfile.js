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

gulp.task('default', ['imagemin', 'sass', 'sass:watch']);
