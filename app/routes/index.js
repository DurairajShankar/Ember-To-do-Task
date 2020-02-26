import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('task');
      },
      actions:{
        save(description, deadline) {
          this.get('store').createRecord('task', {
            description,
            deadline
          }).save();
        },
        delete(task) {
          task.deleteRecord();
          task.save();
        },
        toggleTask(task) {
          let isCompleted = task.get('isCompleted');
          task.set('isCompleted', !isCompleted);
          task.save();
        }
       
        }
        
});
