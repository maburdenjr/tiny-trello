import Ember from 'ember';

export default Ember.Component.extend({
  showAddItemForm: false,
  actions: {
    addTask(text) {
      if (text != undefined && text != null) {
        this.toggleProperty('showAddItemForm');
      } else {
        alert('Please enter a title for this task.')
      }

    },
    toggleForm() {
      this.toggleProperty('showAddItemForm');
    }
  }
});
