import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {title: "Default list"},
      {title: "Default list 2"}
    ]
  }
});
