import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    description: DS.attr('string'),
    deadline: DS.attr('string'),
    isCompleted: DS.attr('boolean',{defaultValue:false})
});
