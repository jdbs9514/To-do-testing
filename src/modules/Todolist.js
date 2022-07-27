export class Todolist {
    constructor(description, completed, index) {
      this.description = description;
      this.completed = completed;
      this.index = index;
    }
  
    addtask(dataBase) {
      dataBase.push(this);
    }
  }