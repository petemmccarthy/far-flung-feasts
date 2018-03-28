import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | country-list', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.country = EmberObject.create({
      img: 'test-img.png',
      name: 'test-name'
    });
  });

  test('Should display a flag and name', async function(assert) {

    await render(hbs`{{country-list country=country}}`);

    assert.ok(this.element.querySelector('.country .flag'), 'displays the country flag');
    assert.equal(this.$('.country p').text(), 'test-name', 'displays the country name')
  });
});
