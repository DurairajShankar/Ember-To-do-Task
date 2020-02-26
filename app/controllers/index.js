/* eslint-disable ember/new-module-imports */
import Controller from '@ember/controller';

export default Controller.extend({
  
    actions: {
      showTask(status){
        isCompleted: false;
        var tasks = this.get('model');
        const model = this.get('model');
        let newFetchModel = this.get('store').findAll('task');
          this.set('model', newFetchModel);
        if (status === 'true')
          {
         let newModelValue = model.filter((task)=> {
              return task.get('isCompleted') === true;
            });
         this.set('model',newModelValue);	
          }
        else if(status === 'false')
          {
          let newModelValue = model.filter((task)=> {
              return task.get('isCompleted') === false;
            });
          this.set('model',newModelValue);	
          return tasks;
        
        }
      },
  
    editTask(task) {
        this.transitionToRoute('edit', task.get('id'));
      }

}});
