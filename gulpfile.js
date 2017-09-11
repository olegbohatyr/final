const gulp = require('gulp')
const less = require('gulp-less')
const autoprefix = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const sourcemap = require('gulp-sourcemaps')
const qcmq = require('gulp-group-css-media-queries')
/*const browserSync = require('browser-sync').create()*/

gulp.task('build', function () {
    return gulp.src('./src/precss/style.less')
        .pipe(sourcemap.init())
        .pipe(less())
        .pipe(autoprefix({
            browsers: ['> 0.01%'],
            cascade: false
        }))
        .pipe(qcmq())
        .pipe(csso({
            restructure:false
        }))
        .pipe(sourcemap.write())
        .pipe(gulp.dest('./build/css/'))
        .pipe(gulp.dest('./src/css/'))
})
gulp.task('html', function () {
    return gulp.src('./src/*.html')
    .pipe(gulp.dest('./build'))
})
gulp.task('js', function () {
    return gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./build/js'))
})
/*gulp.task('browser', function () {
    browserSync.init({
        proxy:'shop.loc',
        open:false,
        notify:false
    })
})*/
gulp.task('watch', function () {
    gulp.watch('./src/precss/*.less', gulp.series('build'))
    gulp.watch('./src/*.html', gulp.series('html'))
    gulp.watch('./src/js/*.js', gulp.series('js'))
})
/*gulp.task('dev',gulp.parallel('watch','browser'))*/