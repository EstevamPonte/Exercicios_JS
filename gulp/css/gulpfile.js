const gulp = require('gulp')
const sass = require('gulp-sass')
const unglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('copiarHtml', (done) => {
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
    done()
})

gulp.task('default', gulp.series('copiarHtml'), function (done) {
    gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(unglifycss({ "uglyComments": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
    done()
})