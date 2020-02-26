/* eslint-disable ember/new-module-imports */
import Controller from '@ember/controller';

export default Controller.extend({
  /*

  current: '',

  // eslint-disable-next-line no-undef
  completed: Ember.computed( 'model', 'current', function() {
    var tasks = this.get('model');
    var current = this.get('current');

    //let finished = current === 'complete';
    //let unfinished = current === 'incomplete';

    if (finished) {
      return tasks.filter((task) => {
        return task.get('isCompleted') === true;
      });
    }

    if (unfinished) {
      return tasks.filter((task) => {
        return task.get('isCompleted') === false;
      });
    }
    // eslint-disable-next-line no-undef
    return tasks;
  }),*/
 
    actions: {

   
      showTask(status){
        isCompleted: false;
        //var tasks = this.get('model');
        const model = this.get('model');
        let newFetchModel = this.get('store').findAll('task');
          this.set('model', newFetchModel);
        if (status === 'true')
          {
         let newFetchModel = this.get('store').findAll('task');
         this.set('model', newFetchModel);
         let newModelValue = model.filter((task)=> {
              return task.get('isCompleted') === true;
            });
         this.set('model',newModelValue);	
          }
        else if(status === 'false')
          {
            // eslint-disable-next-line no-redeclare
            let newFetchModel = this.get('store').findAll('task');
          this.set('model', newFetchModel);
          let newModelValue = model.filter((task)=> {
              return task.get('isCompleted') === false;
            });
          this.set('model',newModelValue);	

          }
          // eslint-disable-next-line no-undef
          //return tasks;
        
        },
        markComplete(task){
          // this.get('store').findRecord('post', task.id).then(function(post) {
            
          //   post.set('isComplete', true);
    
          //   post.save();
          // });
          task.get('isComplete') === 'Incomplete' ? task.set('isComplete', 'Completed') : task.set('isComplete', 'Incomplete');
        },
  
    editTask(task) {
        this.transitionToRoute('edit', task.get('id'));
      }

}});
