import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

EmberRouter.IndexRoute = EmberRouter.extend({
  redirect: function() {
    return this.transitionTo('invoices');
  }
});

Router.map(function() {
  this.route('invoices');
});

export default Router;
