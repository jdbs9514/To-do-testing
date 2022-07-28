export default (input) => {
  const dataBase = JSON.parse(localStorage.getItem('baseData'));
  const index = 0;
  dataBase.forEach((newInput, i) => {
    if (index === i) {
      newInput.description = input.value;
    }
  });
  localStorage.setItem('baseData', JSON.stringify(dataBase));
};