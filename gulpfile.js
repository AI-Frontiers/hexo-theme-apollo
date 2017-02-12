var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// 一次性编译 Sass
gulp.task('sass', function() {
  return gulp.src('./source/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./source/css'));
});

gulp.task('install', function() {
  gulp.src('./node_modules/jquery/dist/jquery*')
    .pipe(gulp.dest('./source/js'));
  gulp.src('./node_modules/slick-carousel/slick/slick.min.js')
    .pipe(gulp.dest('./source/js'));
  gulp.src('./node_modules/slick-carousel/slick/slick-theme.scss')
    .pipe(gulp.dest('./source/scss'));
  gulp.src('./node_modules/slick-carousel/slick/slick.scss')
    .pipe(gulp.dest('./source/scss'));
});

// 实时编译
gulp.task('default', ['sass'], function() {
  gulp.watch('./source/scss/_partial/*.scss', ['sass']);
  gulp.watch('./source/scss/*.scss', ['sass']);
});
