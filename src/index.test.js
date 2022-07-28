/**
 * @jest-environment jsdom
 */

// setting up html enviroment
document.body.innerHTML = `
<input type="text" id="input" value ='Adding things' >
<ul class= 'list'></ul>
<button id="clear" type="button">Clear All Complete</button>`;

import displaytask from './modules/DisplayTask.js';
import adding from './modules/add.js';
import edit from './modules/Edittask.js';

const clearAllBtn = document.getElementById('clear');

describe('We are testing the Add function', () => {
  test(' add one task in list ', () => {
    adding();
    expect(JSON.parse(localStorage.baseData).length).toBe(1);
  });
  test(' display the task in list ', () => {
    displaytask(clearAllBtn);
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
    displaytask(clearAllBtn);
    const editTask = document.querySelector('.span');
    editTask.value = 'editText';
    edit(editTask);

    expect(JSON.parse(localStorage.getItem('baseData'))[0].description).toBe('editText');
  });

});

describe('we are testing the status of the task', () => {
  test('status changes', () => {

    const statusTask = document.querySelector('.check');
    statusTask.click();
    expect(statusTask.checked).toBe(true);
  });
  test('status to local storage', () => {
    expect(JSON.parse(localStorage.baseData)[0].completed).toBe(true);
  })
});

describe("We are testing the 'Clear All Completed' function", () => {
  test('remove from localStorage', () => {
    adding();
    adding();
    displaytask(clearAllBtn);
    clearAllBtn.click();
    displaytask(clearAllBtn);
    expect(JSON.parse(localStorage.baseData).length).toBe(2);
  });
  test('remove from HTML', () => {
    expect(document.querySelector('.list').children.length).toBe(2);
  });
});