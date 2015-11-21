
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var sass = require('gulp-sass');
var del = require('del');
var ngAnnotate = require('gulp-ng-annotate');
var browserSync = require('browser-sync');
var chalk = require('chalk');
var minifyHTML = require('gulp-minify-html');
var inlinesource = require('gulp-inline-source');
var packageJson = require('./package.json');
var sourcemaps = require('gulp-sourcemaps');
// var babel = require('gulp-babel');

gulp.task('browser-sync', function() {
    browserSync({
        open: false,
        server: {
            baseDir: './dist'
        }
    });
});

gulp.task('bs-reload', function() {
    browserSync.reload();
});

gulp.task('images', function() {
    gulp.src('./img/*')
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/img/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('styles', function() {
    gulp.src('sass/*.scss')
        .pipe(plumber({
            errorHandler: function(error) {
                console.log(chalk.black.bgRed('Error!') + ' ' + error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('scripts', function() {

    var scripts = [
        'bower_components/qrcode.js/lib/qrcode.js',
        'bower_components/qrcode-generator/js/qrcode.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-qrcode/angular-qrcode.js',
        'bower_components/autobahn/autobahn.js',
        'bower_components/angular-wamp/release/angular-wamp.js',
        'js/*.js',
        'js/**/*.js'
    ];

    gulp.src(scripts)
        // .pipe(babel({
        //     presets: ['es2015']
        // }))
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        // .pipe(ngAnnotate())
        // .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({
            stream: true
        })
    );
});

gulp.task('assets', function() {
    return gulp.src(['assets/*/**'], { base: 'assets'})
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('minify-html', function() {

    return gulp.src('*.html')
        // .pipe(inlinesource())
        .pipe(minifyHTML({
            conditionals: true,
            spare:true
        }))
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({
            stream: true
        })
    );

});

gulp.task('transfer-partials', function () {
    return gulp.src(['./views/*'], { base: '.'})
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('clean', function () {
    return del([
        'dist/'
    ]);
});

gulp.task('build', ['clean'], function() {
    gulp.start(
        'images',
        'scripts',
        'styles',
        'assets',
        'transfer-partials',
        'minify-html'
    );
});

gulp.task('watch', function() {

    gulp.start('build', 'browser-sync');

    gulp.watch(['sass/*.scss', 'sass/**/*.scss'], ['styles']);
    gulp.watch(['js/*.js', 'js/**/*.js'], ['scripts']);
    gulp.watch(['assets/*', 'assets/**/*'], ['assets']);
    gulp.watch(['*.html'], ['minify-html']);
    gulp.watch(['views/*.html'], ['transfer-partials']);

});
