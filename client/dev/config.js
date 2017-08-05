System.config({
	defaultJSExtensions: true,
  paths: {
    // paths serve as alias
    'npm:': './',
  },
  // map tells the System loader where to look for things
  map: {
    // our app is within the app folder
    'app': 'app',

    // angular bundles
    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

    '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
    '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
    '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
    '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
    '@angular/cdk': 'npm:@angular/cdk/bundles/cdk.umd.js',

    '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

    // other libraries
    // elasticsearch
    'elasticsearch': 'npm:elasticsearch-browser/elasticsearch.js',
    // hammarjs
    'hammarjs': 'npm:hammerjs/hammer.js',
    // rxjs
    'rxjs': 'npm:rxjs',
    // lodash
    'lodash': 'npm:lodash',
    // restangular
    'ngx-restangular': 'npm:ngx-restangular/dist/esm/src/index.js',
  },
  meta: {
    elasticsearch: {
      format: 'global',
      exports: 'elasticsearch'
    },
    hammerjs: {
      format: 'global',
      exports: 'hammerjs'
    }
  },
  packages: {
    'rxjs': {
      main: 'Rx.js'
    }
  }
});
