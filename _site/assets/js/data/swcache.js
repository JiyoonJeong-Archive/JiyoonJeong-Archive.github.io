const resource = [
    /* --- CSS --- */
    '/assets/css/style.css',

    /* --- PWA --- */
    '/app.js',
    '/sw.js',

    /* --- HTML --- */
    '/index.html',
    '/404.html',

    
        '/About/',
    
        '/Research/',
    
        '/CV/',
    
        '/categories/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/assets/img/favicons/android-chrome-192x192.png',
        '/assets/img/favicons/android-chrome-512x512.jpg',
        '/assets/img/favicons/android-icon-144x144.png',
        '/assets/img/favicons/android-icon-192x192.png',
        '/assets/img/favicons/android-icon-36x36.png',
        '/assets/img/favicons/android-icon-48x48.png',
        '/assets/img/favicons/android-icon-72x72.png',
        '/assets/img/favicons/android-icon-96x96.png',
        '/assets/img/favicons/apple-icon-114x114.png',
        '/assets/img/favicons/apple-icon-120x120.png',
        '/assets/img/favicons/apple-icon-144x144.png',
        '/assets/img/favicons/apple-icon-152x152.png',
        '/assets/img/favicons/apple-icon-180x180.png',
        '/assets/img/favicons/apple-icon-57x57.png',
        '/assets/img/favicons/apple-icon-60x60.png',
        '/assets/img/favicons/apple-icon-72x72.png',
        '/assets/img/favicons/apple-icon-76x76.png',
        '/assets/img/favicons/apple-icon-precomposed.png',
        '/assets/img/favicons/apple-icon.png',
        '/assets/img/favicons/apple-touch-icon.png',
        '/assets/img/favicons/favicon-16x16.png',
        '/assets/img/favicons/favicon-32x32.png',
        '/assets/img/favicons/favicon-96x96.png',
        '/assets/img/favicons/favicon.ico',
        '/assets/img/favicons/ms-icon-144x144.png',
        '/assets/img/favicons/ms-icon-150x150.png',
        '/assets/img/favicons/ms-icon-310x310.png',
        '/assets/img/favicons/ms-icon-70x70.png',
        '/assets/img/favicons/mstile-150x150.png',
        '/assets/js/dist/categories.min.js',
        '/assets/js/dist/commons.min.js',
        '/assets/js/dist/home.min.js',
        '/assets/js/dist/misc.min.js',
        '/assets/js/dist/page.min.js',
        '/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'localhost:4000',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

