import Ember from 'ember';

export default Ember.Component.extend({
  showAddItemForm: false,
  actions: {
    addTask(text) {
      if (text != undefined && text != null) {
        this.toggleProperty('showAddItemForm');
        console.log(this.get('list'));
      }
    },
    toggleForm() {
      this.toggleProperty('showAddItemForm');
    }
  }
});
