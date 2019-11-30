var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('serve', () => {
	browserSync.init({
        server: "."
    });

	gulp.watch('*.js').on('change', browserSync.reload);
	gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series(
	'serve'
));
