var gulp = require('gulp');
var browserSync = require('browser-sync');


var reload = browserSync.reload;
var paths = {
	css: [
    'assets/css/*.css',
    'app/components/**/*.css'
  ],
  html: [
    '*.html',
    'app/components/**/*.html'
  ],
	js: [
    'app/*.js',
    'assets/js/*.js',
    'app/components/**/*.js',
    'app/services/*.js',
    '*.js'
  ]	
};


// //Gulp browerSync
gulp.task('server',function(){
	browserSync({
        notify: false,
        server: {
            baseDir: '.'
        }
    });
 	gulp.watch(paths.html, reload);
	gulp.watch(paths.js, reload);
	gulp.watch(paths.css, reload);
	
});

//Task default
gulp.task('default',[
	'server'
]);

