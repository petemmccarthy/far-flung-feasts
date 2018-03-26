import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByCountry(param) {
      if (param !== '') {
        return this.get('store')
          .query('country', { name: param }).then((results) => {
            return { query: param, results: results };
          });
      } else {
        return this.get('store')
          .findAll('country').then((results) => {
            return { query: param, results: results };
          });
      }
    }
  }
});
