const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const gcmq = require('gulp-group-css-media-queries');

gulp.task('default', function (done) {
    gulp.src('build/*.scss.css')
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(gulp.dest('build'));
    done();
});