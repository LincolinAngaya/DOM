//what the Dom is- used to manipulate content ,style and structure
//methods to select elements in the Dom
//how to traverse the DOM
//how to manipulatethe DOM
//Event Handling

//getelementbyid()
const title = document.getElementById('main-heading');
// console.log(title)
//get elementbyclassname()
const list = document.getElementsByClassName('listites');
// console.log(list)
//getelementbytagname()
const tag = document.getElementsByTagName('li');
// console.log(list)
//queryselector()-selects  the first item
const container = document.querySelector('div');
// console.log(container)
//queryselectorAll()
const containers = document.querySelectorAll('div');
console.log(containers)