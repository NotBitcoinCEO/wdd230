const entry = document.querySelector('input');
const btn =document.querySelector('button');
const list = document.querySelector('ul');

btn.addEventListener('click', function() {
    const chapter =  entry.value;
    entry.value= "";
    const newList = document.createElement('li');
    const newBtn = document.createElement('button');
    const newSpan = document.createElement('span');
    newSpan.textContent = chapter;
    newBtn.textContent = '❌';
    newList.appendChild(newSpan)
    newList.appendChild(newBtn);
    list.appendChild(newList);
    newBtn.addEventListener('click', function(){
        list.removeChild(newList);
    })

    
})