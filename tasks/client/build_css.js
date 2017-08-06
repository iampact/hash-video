import gulp from "gulp";
import cssmin from "gulp-clean-css";
import {join} from "path";
import {base, tasks} from "./const";
import sass from "gulp-sass";
import sassUnicode from "gulp-sass-unicode";

const CSS = base.DIST + "**/*.css";

const SASS = [
  base.DEV + "**/*.scss",
  "!" + base.DEV + "bower_components/**/*.scss",
  "!node_modules/**/*.scss",
];


gulp.task(tasks.CLIENT_COMPILE_TO_CSS, () => {

  return gulp.src(SASS)
    .pipe(sass())
    .pipe(sassUnicode())
    .on("error", sass.logError)
    .pipe(gulp.dest(base.DEV));
});


gulp.task(tasks.CLIENT_BUILD_CSS_DIST, () => {
  return gulp.src(CSS, {base: base.DIST})
             .pipe(cssmin())
             .pipe(gulp.dest(base.DIST));
});
