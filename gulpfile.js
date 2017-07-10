const gulp = require('gulp');

const cmd = require('node-cmd');
const fs = require('fs');

gulp.task('watch', watch);
gulp.task('pdf', pdf);
gulp.task('default', gulp.series('watch'));

function watch(done) {
  gulp.watch([
    '**/*.md'
  ], gulp.series('pdf'));

  done();
}

function pdf(done) {
  fs.readdir(__dirname, function(err, files) {
    if (err) return;

    files.forEach(function(file) {
      var sub = file.substring(0, file.length - 3);
      var ext = file.substring(file.length - 3, file.length);

      if (ext !== '.md' || file === 'README.md') return;

      cmd.run(`pandoc ${file} -o ${sub}.pdf`);
    });
  });

  done();
}
