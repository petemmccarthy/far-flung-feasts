import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/home' });
  this.route('home', { path: '/' });
  this.route('about');
  this.route('countries');

});

export default Router;
