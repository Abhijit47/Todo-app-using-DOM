
const inputValue = document.querySelector('.input');
const btn = document.querySelector('.btn');
const itemList = document.querySelector('.item-list');
const search = document.querySelector('.search');

function addData() {
  let currTask = inputValue.value;
  // console.log(currTask);
  // itemList.innerHTML = currTask; // this will be add content to the current element
  // itemList.innerText = currTask; // this will be add content to the current element

  // Guard class
  if (currTask == '') return;

  // create a li node
  const node = document.createElement('li');
  // console.log(node);
  // console.dir(node);

  // add class to this element
  node.classList.add('item');


  // create a text node
  const textNode = document.createTextNode(currTask);


  // Append the text node to the li node
  node.appendChild(textNode);


  // finally display the content
  itemList.appendChild(node);

  // after display clear the input field
  inputValue.value = '';
}

btn.addEventListener('click', addData);