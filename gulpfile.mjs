import gulp from 'gulp';
import { src, dest, series, watch } from 'gulp';
import concat from 'gulp-concat';
import terser from 'gulp-terser';
import rigger from 'gulp-rigger';

import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import imageminWebp from 'imagemin-webp';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';

import avif from 'gulp-avif';
import svgSprite from 'gulp-svg-sprite';
import svgmin from 'gulp-svgmin';

import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import stripCssComments from 'gulp-strip-css-comments';
import cleancss from 'gulp-clean-css';
import strip from 'gulp-strip-comments';
import newer from 'gulp-newer';
import { rm } from 'node:fs/promises'; // Використовуємо нативний модуль Node.js замість del
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import cheerio from 'gulp-cheerio';
import replace from 'gulp-replace';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';
import include from 'gulp-include';
import htmlhint from 'gulp-htmlhint';

const sass = gulpSass(dartSass);

export const pages = () => {
  return src('app/pages/*.html')
    .pipe(
      include({
        includePaths: 'app/components',
      })
    )
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter())
    .pipe(dest('app'))
    .pipe(browserSync.stream());
};

export const styles = () => {
  return src([
    'app/libs/grid/normalise.css',
    'app/libs/grid/grid.css',
    'app/scss/main.scss',
  ])
    .pipe(
      plumber({
        errorHandler: notify.onError(function (err) {
          return {
            title: 'Styles',
            message: err.message,
          };
        }),
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('libs.css'))
    .pipe(rename('libs.min.css'))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 10 versions'], // Виправлено описку в очікуваному ключі
        grid: true,
      })
    )
    .pipe(stripCssComments())
    .pipe(
      cleancss({
        level: { 2: { specialComments: 0 } },
        format: 'keep-breaks',
      })
    )
    .pipe(sourcemaps.write(''))
    .pipe(dest('app/css/'))
    .pipe(browserSync.stream());
};

export const browsersync = () => {
  browserSync.init({
    server: { baseDir: 'app/' },
    notify: false,
    online: false,
    reloadDelay: 300, // Дає браузеру 300мс на завершення фонових запитів перед оновленням
  });
};

export const scripts = () => {
  return (
    src('app/libs/jscommon.js')
      .pipe(
        plumber({
          errorHandler: notify.onError(function (err) {
            return {
              title: 'Scripts',
              message: err.message,
            };
          }),
        })
      )
      .pipe(strip())
      .pipe(rigger())
      .pipe(concat('scripts.min.js'))
      //* .pipe(terser()) //* Застосовуємо мініфікацію JS
      .pipe(dest('app/js/'))
      .pipe(browserSync.stream())
  );
};

export const sprite = () => {
  return src('app/img/sprite/*.svg')
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      })
    )
    .pipe(
      cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: { xmlMode: true },
      })
    )
    .pipe(replace('&gt;', '>'))
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: '../sprite.svg',
            render: {
              scss: {
                dest: 'app/scss/_sprite.scss',
                template: 'app/scss/templates/_sprite_template.scss',
              },
            },
            example: true,
          },
        },
      })
    )
    .pipe(dest('app/img/'))
    .pipe(browserSync.stream());
};

export const fonts = () => {
  return src('app/fonts/src/*.*')
    .pipe(
      fonter({
        formats: ['woff', 'ttf'],
      })
    )
    .pipe(src('app/fonts/*.ttf'))
    .pipe(ttf2woff2())
    .pipe(dest('app/fonts'))
    .pipe(browserSync.stream());
};

// Видалення через нативний fs/promises
export const cleaning = () => {
  return rm('dest/img/', { recursive: true, force: true });
};

export const cleandest = () => {
  return rm('dest', { recursive: true, force: true });
};

// Робота з картинками
const paths = {
  src: 'app/images/*.{jpg,jpeg,png}',
  srccom: 'app/images/*.{jpg,jpeg,png,svg}',
  srcwebp: 'app/images/*.webp',
  dest: 'app/img',
  destwebp: 'app/images',
};

export const optimizeImages = () => {
  return gulp
    .src(paths.srcwebp)
    .pipe(
      newer({
        dest: paths.dest,
        map: function (relativePath) {
          return relativePath.replace(/(\.\w+)$/, '.webp');
        },
      })
    )
    .pipe(
      imagemin([
        imageminWebp({
          quality: 50,
          lossless: true,
          nearLossless: 80,
          sharpness: 4,
          alphaQuality: 50,
          method: 5,
        }),
      ])
    )
    .pipe(gulp.dest(paths.dest));
};

export const convertToWebp = () => {
  return gulp
    .src(paths.src)
    .pipe(
      newer({
        dest: paths.dest,
        map: function (relativePath) {
          return relativePath.replace(/(\.\w+)$/, '.webp');
        },
      })
    )
    .pipe(webp())
    .pipe(gulp.dest(paths.dest));
};

export const compressImages = () => {
  return gulp
    .src(paths.srccom)
    .pipe(
      imagemin([
        imageminMozjpeg({ progressive: true }),
        imageminPngquant({ quality: [0.6, 0.8] }),
        imageminSvgo({
          plugins: [{ removeViewBox: false }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest(paths.dest));
};
// Конвертація у формат AVIF
export const convertToAvif = () => {
  return gulp
    .src(paths.src)
    .pipe(
      newer({
        dest: paths.dest,
        map: function (relativePath) {
          return relativePath.replace(/(\.\w+)$/, '.avif');
        },
      })
    )
    .pipe(avif({ quality: 50 })) // Стиснення з якістю 50%
    .pipe(gulp.dest(paths.dest));
};

export const pic = series(
  compressImages,
  convertToWebp,
  convertToAvif,
  optimizeImages
);

export const startwatch = () => {
  browsersync();
  watch('app/fonts/src/*.*', fonts);
  watch('app/img/*.*', pic);
  watch('app/images/*.*', pic);
  watch(['app/components/*.*', 'app/pages/*.*'], pages);
  watch('app/img/favicon/*.*').on('change', browserSync.reload);
  watch('app/scss/**/*.scss', styles);
  watch('app/**/*.html').on('change', browserSync.reload);
  watch('app/**/*.php').on('change', browserSync.reload);
  watch('app/css/*.css').on('change', browserSync.reload);
  watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
};

export const buildcopy = () => {
  return src(
    [
      'app/css/**/*.min.css',
      'app/js/**/*.min.js',
      'app/*.html',
      'app/*.php',
      'app/**/ht.access',
    ],
    { base: 'app' }
  ).pipe(dest('dest'));
};

export const build = series(cleandest, styles, scripts, buildcopy);
export default series(styles, scripts, startwatch);
