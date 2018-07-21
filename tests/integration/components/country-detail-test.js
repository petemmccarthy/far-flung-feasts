import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | country-detail', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.model = EmberObject.create({
      name: 'test-name',
      capital: 'test-capital',
      dish: 'test-dish',
      ingredients: 'test-ingredients',
      step1: 'test-recipe-step1',
      step2: 'test-recipe-step2',
      food: 'test-food'
    });
  });

  test('Should display the sections', async function(assert) {

    await render(hbs`{{country-detail model=model}}`);

    assert.equal(this.$('.country-name').text(), 'test-name', 'displays the country name');
    assert.equal(this.$('.capital').text().trim(), 'Capital: test-capital', 'displays the capital');
    assert.equal(this.$('.dish').text().trim(), 'test-dish', 'displays the dish');
    assert.equal(this.$('.recipe .step1').text().trim(), 'test-recipe-step1', 'displays the recipe step1');
    assert.equal(this.$('.recipe .step2').text().trim(), 'test-recipe-step2', 'displays the recipe step2');
    assert.equal(this.$('.other-foods').text().trim(), 'Other favourite dishes: test-food', 'displays other foods');
  });
});
