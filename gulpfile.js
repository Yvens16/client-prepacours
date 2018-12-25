const { src, dest, series } = require('gulp');

const  sass  = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');

const del = require('del');

sass.compiler = require('node-sass');

function compileSass() {
  return src('src/sass/*.scss')
  .pipe(sassGlob())
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('src'));
};

function prefix() {
  return src('src/main.css')
  .pipe(autoprefixer())
  .pipe(dest('src'));
};

function serverPublicClean(){
  return del('../server-prepacours/public/*', { force: true })
};

function clientBuildCopy(){
  return src('./build/**/*')
  .pipe(dest('../server-prepacours/public'))
};

exports.css = series(compileSass, prefix);
exports.transfer = series(serverPublicClean, clientBuildCopy);




/**
 * TOP LEVEL FUNCTIONS
 * src - Point to files to use
 * dest - Point to folder to output
 * watch - Watch files and folders for changes
 *   
 * Write 'gulp --tasks' on the terminal to see which command are available
 * series - Let you chain the tasks
 * 
 * FUNCTIONS EXPLAINATION
 * 'gulp css '|| 'gulp transfer' to run the tasks on the command line
 * 
 * Run 'gulp css' after you're completly done with your css file
 * Run 'npm run build' then 'gulp transfer' after you're completly done with a feature
 */


