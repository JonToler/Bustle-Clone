import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogForm: false,
  actions: {
    updateBlogForm() {
      this.set('updateBlogForm', true);
    },
    update(blog) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        description: this.get('description'),
        image: this.get('image'),
        link: this.get('link'),
        type: this.get('type'),
      };
      this.set('updateBlogForm', false);
      this.sendAction('update', blog, params);
    }
  }
});
