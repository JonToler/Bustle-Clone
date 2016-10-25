import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  link: DS.attr(),
  title: DS.attr(),
  type: DS.attr(),
});
