import Todolist from './Todolist.js';

export default () => {
  const taskName = document.getElementById('input').value;
  let dataBase = JSON.parse(localStorage.getItem('baseData'));
  if (dataBase === null) {
    dataBase = [];
  }
  const index = dataBase.length + 1;
  const newTask = new Todolist(taskName, false, index);
  newTask.addtask(dataBase);
  localStorage.setItem('baseData', JSON.stringify(dataBase));
};
