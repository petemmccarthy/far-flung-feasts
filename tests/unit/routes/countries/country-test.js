import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | countries/country', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:countries/country');
    assert.ok(route);
  });
});
