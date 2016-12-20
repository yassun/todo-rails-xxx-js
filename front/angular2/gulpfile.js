const del = require('del');
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const colors  = require('colors');
const concat = require('gulp-concat');
const liveServer = require('gulp-live-server');
const plumber = require('gulp-plumber');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const sourcemaps = require('gulp-sourcemaps');
const sysBuilder = require('systemjs-builder');
const tslint = require('gulp-tslint');
const tsc = require('gulp-typescript');
const uglify = require('gulp-uglify');

const tscConfig = require('./tsconfig.json');

// Clean the js distribution directory
gulp.task('clean:dist:js', function () {
  return del('/public/angular2/dist/js/*');
});

// Clean the css distribution directory
gulp.task('clean:dist:css', function () {
  return del('public/angular2/dist/css/*');
});

// Clean library directory
gulp.task('clean:lib', function () {
  return del('public/angular2/lib/**/*');
});

gulp.task('clean:rails', function () {
  return del('../../public/angular2/angular2/**/*', {force: true});
});

// Lint Typescript
gulp.task('lint:ts', function() {
  return gulp.src('app/**/*.ts')
   .pipe(tslint({
      formatter: "verbose"
    }))
    .pipe(tslint.report())
});

// Compile TypeScript to JS
gulp.task('compile:ts', function () {
  return gulp
    .src(tscConfig.filesGlob)
    .pipe(plumber({
      errorHandler: function (err) {
        console.error('>>> [tsc] Typescript compilation failed'.bold.green);
        this.emit('end');
      }}))
    .pipe(sourcemaps.init())
    .pipe(tsc(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/angular2/dist/js'));
});

// Generate systemjs-based builds
gulp.task('bundle:js', function() {
  var builder = new sysBuilder('public/angular2', './system.config.js');
  return builder.buildStatic('app', 'public/angular2/dist/js/app.min.js', { minify: true, sourceMaps: true })
    .then(function () {
      //return del(['public/angular2/dist/js/**/*', '!public/angular2/dist/js/app.min.js']);
    })
    .catch(function(err) {
      console.error('>>> [systemjs-builder] Bundling failed'.bold.green, err);
    });
});

// Minify JS bundle
gulp.task('minify:js', function() {
  return gulp
    .src('public/angular2/dist/js/app.min.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/angular2/dist/js'));
});

// Lint Sass
gulp.task('lint:sass', function() {
  return gulp.src('app/**/*.scss')
    .pipe(plumber({
      errorHandler: function (err) {
        console.error('>>> [sass-lint] Sass linting failed'.bold.green);
        this.emit('end');
      }}))
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

// Compile SCSS to CSS, concatenate, and minify
gulp.task('compile:sass', function () {
  gulp
    .src('app/*.scss')
    .pipe(plumber({
      errorHandler: function (err) {
        console.error('>>> [sass] Sass global style compilation failed'.bold.green);
        this.emit('end');
      }}))
    .pipe(sourcemaps.init())
    .pipe(sass({ errLogToConsole: true }))
    .pipe(concat('styles.min.css'))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/angular2/dist/css/'));

  gulp
    .src('app/components/*.scss')
    .pipe(plumber({
      errorHandler: function (err) {
        console.error('>>> [sass] Sass components style compilation failed'.bold.green);
        this.emit('end');
      }}))
    .pipe(sourcemaps.init())
    .pipe(sass({ errLogToConsole: true }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/angular2/dist/css/components'));
});

// Concat and minify CSS
gulp.task('minify:css', function() {
  gulp
    .src('public/angular2/dist/css/*.css')
    .pipe(concat('styles.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/angular2/dist/css/'));

  // minify component css files
  gulp
    .src('public/angular2/dist/cs/components/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/angular2/dist/css/components'));
});

// Copy dependencies
gulp.task('copy:libs', function() {
  gulp.src(['node_modules/rxjs/**/*'])
    .pipe(gulp.dest('public/angular2/lib/js/rxjs'));

  // concatenate non-angular2 libs, shims & systemjs-config
  gulp.src([
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/systemjs/dist/system.src.js',
    'system.config.js'
  ])
    .pipe(concat('vendors.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/angular2/lib/js'));

  // copy source maps
  gulp.src([
    'node_modules/reflect-metadata/Reflect.js.map',
    'node_modules/systemjs/dist/system-polyfills.js.map'
  ]).pipe(gulp.dest('public/angular2/lib/js'));

  return gulp.src(['node_modules/@angular/**/*'])
    .pipe(gulp.dest('public/angular2/lib/js/@angular'));
});

gulp.task('copy:rails', function() {
  gulp.src( 'app/html/index.html'  ).pipe( gulp.dest( '../../public/angular2') );
  gulp.src( 'public/angular2/dist/css/**'  ).pipe( gulp.dest( '../../public/angular2/dist/css' ) );
  gulp.src( 'public/angular2/dist/js/app.min.js'  ).pipe( gulp.dest( '../../public/angular2/dist/js' ) );
  return gulp.src( 'public/angular2/lib/js/vendors.min.js'  ).pipe( gulp.dest( '../../public/angular2/lib/js' ) );
});

// Watch src files for changes, then trigger recompilation
gulp.task('watch:app', function() {
  gulp.watch('app/**/*.ts', ['scripts']);
  gulp.watch('app/**/*.scss', ['styles']);
});

// Run Express, auto rebuild and restart on src changes
gulp.task('server', ['watch:app'], function () {
  var server = liveServer.new('server.js');
  server.start();

  gulp.watch('server.js', server.start.bind(server));
});

gulp.task('lint', ['lint:ts', 'lint:sass']);

gulp.task('clean', ['clean:dist:js', 'clean:dist:css', 'clean:lib']);

gulp.task('copy', function(callback) {
  runSequence('clean:lib', 'copy:libs', callback);
});
gulp.task('scripts', function(callback) {
  runSequence([ 'clean:dist:js'], 'compile:ts', 'bundle:js', 'minify:js', callback);
});
gulp.task('styles', function(callback) {
  runSequence(['lint:sass', 'clean:dist:css'], ['compile:sass', 'minify:css'], callback);
});
gulp.task('build', function(callback) {
  runSequence('copy', 'scripts', 'styles', callback);
});

gulp.task('deploy', function(callback) {
  runSequence('clean:rails', 'copy:rails', callback);
});

gulp.task('default', function(callback) {
  runSequence('build', 'server', callback);
});
