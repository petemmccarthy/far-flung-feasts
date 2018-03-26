import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  capital: DS.attr(),
  description: DS.attr()
});
