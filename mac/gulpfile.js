var gulp = require('gulp');
var svgmin = require('gulp-svgmin');

gulp.task('default', function() {
  gulp.src('svg/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('svg-min'));
});
