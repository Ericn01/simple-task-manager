// 

const formItem = document.querySelectorAll('.form-item');
// Randomly color them
formItem.forEach(item => { 
    item.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
});