import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  beforeModel () {
  	this.replaceWith('invoices.index');
  },
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  
  this.route('invoices');
});

export default Router;
