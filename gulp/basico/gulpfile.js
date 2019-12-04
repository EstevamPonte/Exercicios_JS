const gulp = require('gulp')


gulp.task('antes1', (done) => {
    console.log('Antes 1!!!')
    done()
})

gulp.task('antes2', (done) => {
    console.log('Antes 2!!!')
    done()
})

gulp.task('copiar', gulp.series('antes1', 'antes2', (done) => {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB'))
    done()
}))

gulp.task('fim1', (done) => {
    console.log('Fim 1!!!')
    done()
})

gulp.task('fim2', (done) => {
    console.log('Fim 2!!!')
    done()
})

gulp.task('fim', gulp.series('fim1', 'fim2'))

gulp.task('default', gulp.series('copiar', 'fim'))

