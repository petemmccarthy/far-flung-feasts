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

});
