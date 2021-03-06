const gulp = require('gulp')
const plugins = require('gulp-load-plugins')()

const $ = plugins.configly(__dirname, 'package.json')

gulp.task('build', ['build:js', 'build:sh'])

gulp.task('build:js', () => {
  return gulp.src($.sources.js)
    .pipe(plugins.debug($.debug.js))
    .pipe(plugins.babel($.plugins.babel))
    .pipe(gulp.dest($.destination.lib))
})

gulp.task('build:sh', () => {
  return gulp.src($.sources.sh)
    .pipe(plugins.debug($.debug.sh))
    .pipe(gulp.dest($.destination.lib))
})

gulp.task('clean', () => {
  return gulp.src($.sources.clean)
    .pipe(plugins.debug())
    .pipe(plugins.clean())
})

gulp.task('test', ['build'], () => {
  return gulp.src($.sources.tests)
    .pipe(plugins.mocha($.plugins.mocha))
})

gulp.task('default', ['build'])
