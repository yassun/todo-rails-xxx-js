const gulp = require('gulp');
const browerSync = require('browser-sync');
const historyFallback = require('connect-history-api-fallback');

gulp.task('server', () => {
  browerSync.init({
    port: 8080,
    server: {
      baseDir: 'public/redux',
      index  : "index.html",
      middleware: [
        historyFallback()
      ]
    }
  });
});

