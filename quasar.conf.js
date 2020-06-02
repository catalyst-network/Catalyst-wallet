/* eslint-disable */
const envparser = require('./config/envparser');
const path = require('path');

module.exports = (ctx) => {
  return {
    boot: [
      'i18n',
      'CWCrypto',
      'VuexRouterSync',
      'Toaster',
      'ErrorHandler',
      'CryptoWalletSDK',
      'WalletDiscovery',
      'VueTrend',
      'VueSelect',
      'Vuelidate',
      'BackEndService',
      'AccountInitializer',
      'vClipboard',
      'QRScanner',
      'Magic',
    ],
    css: ['app.styl'],
    extras: [
      'roboto-font',
      'material-icons',
      'fontawesome-v5'
    ],
    supportIE: false,
    build: {
      scopeHoisting: true,

      extendWebpack(cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
        });
        
        cfg.resolve.alias = {
          ...cfg.resolve.alias,
          '@': path.resolve(__dirname, './src/'),
        };

        cfg.output.webassemblyModuleFilename = '[hash].wasm';
      },
      chainWebpack: config => {
        config.output
          .globalObject('this')
        /* ... */
      },
      uglifyOptions: {
        mangle: false,
      },
      env: envparser(),
    },
    devServer: {
      open: true,
    },
    framework: {
      components: [
        'QLayout',
        'QHeader',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtnGroup',
        'QBtn',
        'QIcon',
        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QPageSticky',
        'QScrollArea',
        'QFooter',
        'QInput',
        'QTabs',
        'QTab',
        'QTabPanels',
        'QTabPanel',
        'QRouteTab',
        'QPullToRefresh',
        'QTimeline',
        'QTimelineEntry',
        'QInfiniteScroll',
        'QSpinnerDots',
        'QExpansionItem',
        'QDialog',
        'QToggle',
        'QRadio',
        'QSelect',
        'QSlider',
        'QScrollObserver',
        'QBanner',
        'QCarousel',
        'QCarouselSlide',
        'QCarouselControl',
        'QCheckbox',
        'QCard',
        'QCardSection',
        'QCardActions',
        'QSlideItem',
        'QAvatar',
      ],
      directives: ['Ripple', 'ClosePopup'],
      // Quasar plugins
      plugins: ['Notify', 'Dialog', 'BottomSheet'],
      // iconSet: 'material-icons'
      lang: 'en-gb',
    },
    // animations: 'all' --- includes all animations
    animations: ['slideInUp', 'slideOutDown'],

    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {}, // only for NON InjectManifest
      manifest: {
        name: 'Catalyst Wallet',
        // short_name: 'Catalyst Node Dashboard',
        // description: '.',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#0a2d3e',
        theme_color: '#0a2d3e',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },
  };
};
