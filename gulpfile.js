
// SASS
// ============================================================

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('_src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./_public/_css'));
});

// WATCH
// ============================================================

gulp.task('default',function() {
    gulp.watch('_src/sass/**/*.scss',['sass']);
});
