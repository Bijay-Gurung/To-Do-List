let input = document.getElementById('input');
let Lists = document.getElementById('node');

function add(){
    let newList = document.createElement('li');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = check;

    let task = document.createElement('p');
    task.textContent = input.value;

    let removebtn = document.createElement('button');
    removebtn.onclick = remove;
    removebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    newList.appendChild(checkbox);
    newList.appendChild(task);
    newList.appendChild(removebtn);

    Lists.appendChild(newList);
    input.value = '';
}

function check(){
    let task = event.target.nextSibling;
    if(event.target.checked){
        task.style.textDecoration = 'line-through';
    }else{
        task.style.textDecoration = 'none';
    }
}

function remove(){
    let listItem = this.parentNode;
    listItem.parentNode.removeChild(listItem);
}