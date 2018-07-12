import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  capital: DS.attr(),
  food: DS.attr(),
  dish: DS.attr(),
  ingredients: DS.attr(),
  recipe: DS.attr()
});
