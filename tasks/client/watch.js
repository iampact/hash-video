const PORT = process.env.PORT || 3000;

import gulp from "gulp";
import Server from "aliv";
import {base, tasks} from "./const";

let aliv = new Server({
  watch: false,
  port: PORT,
  root: process.cwd()
});

gulp.task(tasks.CLIENT_RELOAD, () => {
  return aliv.reload();
});

gulp.task(tasks.CLIENT_WATCH, [tasks.CLIENT_BUILD_TS,  tasks.CLIENT_COMPILE_TO_CSS ], () => {
  aliv.start();

  let _watchable = [];

  _watchable.push(base.DEV + "**/*.ts");
  _watchable.push(base.DEV + "**/*.css");
  _watchable.push(base.DEV + "**/*.html");
  _watchable.push(base.DEV + "**/*.scss");


  return gulp.watch(_watchable, [
    tasks.CLIENT_BUILD_TS,

    tasks.CLIENT_COMPILE_TO_CSS,

    tasks.CLIENT_RELOAD,
  ]);
});
