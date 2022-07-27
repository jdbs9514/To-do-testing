/**
 * @jest-environment jsdom
 */
import { displaytask } from './modules/DisplayTask.js';
import { adding } from './modules/add.js';

// setting up html enviroment

document.body.innerHTML = `
<input type="text" id="input" value ='Adding things' >
<ul class= 'list'></ul>`
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
// describe('We are testing the remove function', () => {
//     test(' remove one task in list ', () => {
//         displaytask();
//         expect(JSON.parse(localStorage.baseData).length).toBe(1);

//     });
// });