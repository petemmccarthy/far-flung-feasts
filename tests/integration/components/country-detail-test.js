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
      description: 'test-description'
    });
  });

  test('Should display the sections', async function(assert) {

    await render(hbs`{{country-detail model=model}}`);

    assert.equal(this.$('.country-detail em').text(), 'A little bit about test-name', 'displays the country name');
    assert.equal(this.$('.capital').text().trim(), 'Capital: test-capital', 'displays the country capital');
    assert.equal(this.$('.country-detail .description').text().trim(), 'test-description', 'displays the country description');
  });
});
