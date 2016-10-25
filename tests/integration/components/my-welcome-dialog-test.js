import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('my-welcome-dialog', 'Integration | Component | my welcome dialog', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{my-welcome-dialog}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#my-welcome-dialog}}
      template block text
    {{/my-welcome-dialog}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
