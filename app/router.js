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
  this.route('countries', function() {
    this.route('country', { path: '/:country_id' });
  });
  
});

export default Router;
