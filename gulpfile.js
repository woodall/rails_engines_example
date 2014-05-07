var gulp       = require('gulp'),
    coffee     = require('gulp-coffee'),
    gutil      = require('gulp-util'),
    uglify     = require('gulp-uglify'),
    sass       = require('gulp-sass'),
    concat     = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    lr         = require('tiny-lr'),
    server     = lr(),
    watch      = require('gulp-watch'),
    slim       = require('gulp-slim'),
    markdown = require('gulp-markdown');


gulp.task('slim', function(){
  gulp.src('./build/slim/*.slim')
  .pipe(slim({
    pretty: true
  }))
  .pipe(gulp.dest('.'));
});

gulp.task('sass', function(){
  gulp.src('build/scss/*.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('src'));
});

gulp.task('markdown', function () {
    gulp.src('README.md')
        .pipe(markdown())
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function(){
  var server = livereload();
  gulp.watch('build/scss/*.scss', ['sass']);
});

gulp.task('default', [ 'sass', 'slim', 'markdown','watch']);
