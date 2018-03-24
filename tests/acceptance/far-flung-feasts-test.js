import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | far flung feasts', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting the home page', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/', 'displays the home page');
  });

  test('visiting the about page', async function(assert) {
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'takes the user to the about page');
  });

  test('visiting the countries page', async function(assert) {
    await visit('/');
    await click(".menu-countries");
    assert.equal(currentURL(), '/countries', 'takes the user to the countries page');
  });

  test('should list available countries', async function(assert) {
    await visit('/countries');
    assert.equal(this.element.querySelectorAll('.flag').length, 3, 'should display 3 country flags');
  })

});
