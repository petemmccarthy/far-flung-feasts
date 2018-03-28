import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, triggerKeyEvent, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';

const LIST_ITEMS = [{name: 'Italy'}, {name: 'Germany'}, {name: 'France'}];
const FILTERED_ITEMS = [{name: 'Germany'}];

module('Integration | Component | country-filter', function(hooks) {
  setupRenderingTest(hooks);

  test('it should initially load all countries', async function(assert) {

    this.set('filterByCountry', () => resolve({ results: LIST_ITEMS}));

    await render(hbs`
      {{#country-filter
        filter=(action filterByCountry)
        as |filterResults|}}
        {{#each filterResults as |item|}}
          <ul class="country-list">
            {{item.name}}
          </ul>
        {{/each}}
      {{/country-filter}}
    `);

    return settled().then(() => {
      assert.equal(this.element.querySelectorAll('.country-list').length, 3, 'returns all countries');
      assert.equal(this.element.querySelector('.country-list').textContent.trim(), 'Italy');
    });
  });

  test('Should return a filtered list', async function(assert) {
    this.set('filterByCountry', (inputVal) => {
      if(inputVal === '') {
        return resolve({
          query: inputVal,
          results: LIST_ITEMS
        });
      } else {
        return resolve({
          query: inputVal,
          results: FILTERED_ITEMS
        });
      }
    });

    await render(hbs`
      {{#country-filter
        filter=(action filterByCountry)
        as |filterResults|}}
        {{#each filterResults as |item|}}
          <ul class="country-list">
            {{item.name}}
          </ul>
        {{/each}}
      {{/country-filter}}
    `);

    await fillIn(this.element.querySelector('.country-filter input'), 'g');
    await triggerKeyEvent(this.element.querySelector('.country-filter input'), "keyup", 83);

    return settled().then(() => {
      assert.equal(this.element.querySelectorAll('.country-list').length, 1);
      assert.equal(this.element.querySelector('.country-list').textContent.trim(), 'Germany');
    });
  });

});
