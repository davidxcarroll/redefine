
// SASS
// ============================================================

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('_src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./_public/static/_css'))
        .pipe(gulp.dest('./_public/wp-local/wp-content/themes/redefine-theme/_css'));
});

// WATCH
// ============================================================

gulp.task('default',function() {
    gulp.watch('_src/sass/**/*.scss',['sass']);
});
