document.addEventListener('DOMContentLoaded', () => {
  function createDivElementToContainer(text, className) {
    const container = document.getElementById('container');
    // const container = document.querySelector('#container');
    const newElement = document.createElement('div');
    newElement.innerHTML = text;
    newElement.classList.add(className);
    container.appendChild(newElement);
  }

  createDivElementToContainer('I am blueviolet', 'container-child-1');
  createDivElementToContainer('I am red', 'container-child-2');
  createDivElementToContainer('I am green', 'container-child-3');
});
