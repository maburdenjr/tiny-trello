import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      const text = this.get('text');
      this.get('onAdd')(text);
    },
    cancel() {
      const text = this.get('text');
      this.get('cancelAdd')(text);
    }
  }
});
