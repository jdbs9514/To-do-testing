/**
 * @jest-environment jsdom
 */
import displaytask from './modules/DisplayTask.js';
import adding from './modules/add.js';
import edit from './modules/Edittask.js';

// setting up html enviroment

document.body.innerHTML = `
<input type="text" id="input" value ='Adding things' >
<ul class= 'list'></ul>`;


describe('We are testing the Add function', () => {
  test(' add one task in list ', () => {
    adding();
    expect(JSON.parse(localStorage.baseData).length).toBe(1);
  });
  test(' display the task in list ', () => {
    displaytask();
    const displayList = document.querySelector('.list');
    expect(displayList.children.length).toBe(1);
  });
});

describe('We are testing the remove function', () => {
  test('remove the task in list', () => {
    const removeicon = document.querySelector('.remove');
    removeicon.click();
    expect(JSON.parse(localStorage.baseData).length).toBe(0);
  });
  test('remove the task from HTML', () => {
    const displayList = document.querySelector('.list');
    expect(displayList.children.length).toBe(0);
  });
});

describe('We are testing the edit function', () => {
  test('edit the task in list', () => {
    adding();
    displaytask();
    const editTask = document.querySelector('.span');
    editTask.value = 'editText';
    edit(editTask);

    expect(JSON.parse(localStorage.getItem('baseData'))[0].description).toBe('editText');
  });
  
});