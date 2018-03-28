import { module, test } from 'qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | far flung feasts', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting the home page', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/', 'displays the home page');
  });

  test('visiting the home page should list available countries', async function(assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.flag').length, 12, 'should display 3 country flags');
  })

  test('visiting the about page', async function(assert) {
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'takes the user to the about page');
  });

  test('Selecting the logo displays all the countries', async function(assert) {
    await visit('/');
    await click(".menu-logo");
    assert.equal(currentURL(), '/', 'takes the user to the countries page');
    assert.equal(this.element.querySelectorAll('.flag').length, 12, 'should display 12 country flags');
  });

  test('Selecting the tag-line displays all the countries', async function(assert) {
    await visit('/');
    await click(".menu-countries");
    assert.equal(currentURL(), '/', 'takes the user to the countries page');
    assert.equal(this.element.querySelectorAll('.flag').length, 12, 'should display 12 country flags');
  });

});
