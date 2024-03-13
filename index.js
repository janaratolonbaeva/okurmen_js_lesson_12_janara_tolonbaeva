// document.addEventListener('DOMContentLoaded', () => {
//   function createDivElementToContainer(text, className) {
//     const container = document.getElementById('container');
//     // const container = document.querySelector('#container');
//     const newElement = document.createElement('div');
//     newElement.innerHTML = text;
//     newElement.classList.add(className);
//     container.appendChild(newElement);
//   }

//   createDivElementToContainer('I am blueviolet', 'container-child-1');
//   createDivElementToContainer('I am red', 'container-child-2');
//   createDivElementToContainer('I am green', 'container-child-3');
// });

$(function () {
  function createDivElementToContainer(text, className) {
    const container = $('#container');
    const newElement = $(`<div class="${className}">${text}</div>`);
    container.append(newElement);
  }

  // createDivElementToContainer('I am blueviolet', 'container-child-1');
  // createDivElementToContainer('I am red', 'container-child-2');
  // createDivElementToContainer('I am green', 'container-child-3');

  const listItems = $('.list-item');

  listItems.each(function (index) {
    $(this).text(`Item ${index}`);
  });

  const input = $('input[type="text"]');

  input.val('I love JS');
});
