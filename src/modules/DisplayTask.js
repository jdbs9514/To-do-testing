/* eslint-disable no-loop-func  */

export default (clearButton) => {
  let dataBase = JSON.parse(localStorage.getItem('baseData'));

  const unsortedList = document.querySelector('.list');
  unsortedList.innerHTML = '';

  for (let i = 0; i < dataBase.length; i += 1) {
    const list = document.createElement('li');
    list.id = i + 1;
    unsortedList.appendChild(list);

    const checkbox = document.createElement('input');
    checkbox.classList.add('check');
    checkbox.type = 'checkbox';
    list.appendChild(checkbox);

    const span = document.createElement('input');
    span.classList.add('span');
    span.type = 'text';
    span.value = dataBase[i].description;
    list.appendChild(span);

    const removeicon = document.createElement('button');
    removeicon.classList.add('remove');
    removeicon.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    list.appendChild(removeicon);

    removeicon.addEventListener('click', () => {
      dataBase.splice(i, 1);
      list.remove();
      for (let i = 0; i < dataBase.length; i += 1) {
        dataBase[i].index = i + 1;
      }
      localStorage.setItem('baseData', JSON.stringify(dataBase));
    });

    span.addEventListener('change', () => {
      const index = i;
      dataBase.forEach((newInput, i) => {
        if (index === i) {
          newInput.description = span.value;
        }
      });

      localStorage.setItem('baseData', JSON.stringify(dataBase));
    });

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        dataBase[i].completed = true;
      } else {
        dataBase[i].completed = false;
      }
      localStorage.setItem('baseData', JSON.stringify(dataBase));
    });

    clearButton.addEventListener('click', () => {
      if (checkbox.checked && true) {
        dataBase = JSON.parse(localStorage.getItem('baseData'));
        dataBase = dataBase.filter((task) => !task.completed);
        list.remove();
        for (let i = 0; i < dataBase.length; i += 1) {
          dataBase[i].index = i + 1;
        }
        localStorage.setItem('baseData', JSON.stringify(dataBase));
      }
    });
  }
};