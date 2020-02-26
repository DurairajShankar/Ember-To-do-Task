/* eslint-disable no-undef */
import Controller from '@ember/controller';

export default Controller.extend({
    // eslint-disable-next-line ember/new-module-imports
    task: Ember.computed.alias('model')
});
