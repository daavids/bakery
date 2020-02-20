window.Popper = require('popper.js');
window.$ = window.jQuery = require('jquery');
require('bootstrap');

import LazyLoad from 'vanilla-lazyload';

let lazyload = new LazyLoad({
    elements_selector: '.lazy'
});