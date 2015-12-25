var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat');
    // process = process.env.port || 3031;


gulp.task('browserify', function () {
    gulp.src('src/js/components/main.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(gulp.dest('dist/js'));
});


gulp.task('open', function () {
    var options = {
        url: 'http://localhost:' + port
    };
    gulp.src('index.html')
    .pipe(open('', options));
});

gulp.task('connect', function () {
    connect.server({
        root : '',
        port: port,
        livereload:true
    });
});

gulp.task('js', function () {
    gulp.src('src/*.js')
    .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src('src/*.html')
    .pipe(connect.reload());
});


gulp.task('watch', function () {
    gulp.watch('src/js/**/*.js', ['browserify']);
});

gulp.task('default', ['browserify']);
