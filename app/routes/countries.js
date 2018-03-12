import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return ['India', 'USA', 'France', 'Italy'];
  }
});
