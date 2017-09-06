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
    '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',

    '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
    '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
    '@angular/material': 'npm:@angular/material/bundles/material.umd.js',

    '@angular/cdk/overlay': 'npm:@angular/cdk/bundles/cdk-overlay.umd.js',
    '@angular/cdk/table': 'npm:@angular/cdk/bundles/cdk-table.umd.js',
    '@angular/cdk/platform': 'npm:@angular/cdk/bundles/cdk-platform.umd.js',
    '@angular/cdk/a11y': 'npm:@angular/cdk/bundles/cdk-a11y.umd.js',
    '@angular/cdk/coercion': 'npm:@angular/cdk/bundles/cdk-coercion.umd.js',
    '@angular/cdk/collections': 'npm:@angular/cdk/bundles/cdk-collections.umd.js',
    '@angular/cdk/keycodes': 'npm:@angular/cdk/bundles/cdk-keycodes.umd.js',
    '@angular/cdk/observers': 'npm:@angular/cdk/bundles/cdk-observers.umd.js',
    '@angular/cdk/portal': 'npm:@angular/cdk/bundles/cdk-portal.umd.js',
    '@angular/cdk/rxjs': 'npm:@angular/cdk/bundles/cdk-rxjs.umd.js',
    '@angular/cdk/scrolling': 'npm:@angular/cdk/bundles/cdk-scrolling.umd.js',
    '@angular/cdk/bidi': 'npm:@angular/cdk/bundles/cdk-bidi.umd.js',

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
    // jquery
    'jquery': 'npm:jquery/dist/jquery.slim.js',
    // restangular
    'ngx-restangular': 'npm:ngx-restangular/dist/esm/src/index.js',
    // font awesome
    'angular2-fontawesome': 'npm:angular2-fontawesome'
  },
  meta: {
    elasticsearch: {
      format: 'global',
      exports: 'elasticsearch'
    },
    hammerjs: {
      format: 'global',
      exports: 'hammerjs'
    },
    lodash: {
      format: 'global',
      exports: 'lodash'
    }
  },
  packages: {
    'rxjs': {
      main: 'Rx.js'
    },
    'angular2-fontawesome': {
      defaultExtension: 'js'
    }
  }
});
