const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const sourcemaps = require('gulp-sourcemaps');
const copy = require('gulp-htmlcpr');

const path_dest = 'dist';

gulp.task('scss', () =>
    sass('scss/main.scss', {
        sourcemap: true,
        precision: 6
        })// for inline sourcemaps | ,{ sourcemap: true} | after src.
        .on('error', sass.logError)

        .pipe(sourcemaps.write())
        // for file sourcemaps
        .pipe(sourcemaps.write('', {
            includeContent: true
        }))
        .pipe(gulp.dest('src/css'))
);

gulp.task('copy', () => {
    return gulp.src(['src/index.html', 'src/img/**'])
            .pipe(copy({norecDir: 'vendor'}))
            .pipe(gulp.dest('dist'));
});

gulp.task('default', ['scss', 'copy']);