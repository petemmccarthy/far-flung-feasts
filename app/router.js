import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/countries' });
  this.route('about');
  this.route('countries', { path: '/' });
  this.route('country', { path: '/:country_id' });

});

export default Router;
