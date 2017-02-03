const gulp = require('gulp');
const browserSync = require('browser-sync');
const historyFallback = require('connect-history-api-fallback');

gulp.task('server', () => {
  browserSync.init({
    port: 8080,
    server: {
      baseDir: 'public/redux',
      index  : "index.html",
      middleware: [
        historyFallback()
      ]
    }
  });

  gulp.watch("public/redux/*", ['bs-reload']);

});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

