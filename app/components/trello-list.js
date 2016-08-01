import Ember from 'ember';

export default Ember.Component.extend({
  showAddItemForm: false,
  actions: {
    addItem() {
      this.toggleProperty('showAddItemForm');
    },
    cancelAdd() {
      this.toggleProperty('showAddItemForm');
    },
    saveItem() {
      this.toggleProperty('showAddItemForm');
    }
  }
});
