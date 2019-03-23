const $ = require('jquery');
import I18n from './element/i18n'
import Dialog from './element/dialog';
import Button from './element/button';
import Loading from './element/loading';
import Progress from './element/progress';
import './element/theme-chalk/src/index.scss';

const extend = [
  I18n,
  Dialog
];
extend.forEach( e => e.init($, e.componentName, e.optionsName, I18n.optionsName));

const fn = [
  Loading,
  Progress,
  Button
];
fn.forEach( f => f.init($, f.componentName, I18n.optionsName));
