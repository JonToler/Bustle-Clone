import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
  actions: {
    blogFormShow() {
      this.set('addNewBlog', true);
    },

    saveBlog1() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        description: this.get('description'),
        image: this.get('image'),
        link: this.get('link'),
        type: this.get('type'),
      };
      debugger;
      this.set('addNewBlog', false);
      this.sendAction('saveBlog1', params);
    }
  }
});
