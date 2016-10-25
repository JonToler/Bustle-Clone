import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('movie-blog-tile', 'Integration | Component | movie blog tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{movie-blog-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#movie-blog-tile}}
      template block text
    {{/movie-blog-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
