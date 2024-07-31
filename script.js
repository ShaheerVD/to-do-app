document.addEventListener('DOMContentLoaded', () => {
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList= document.getElementById('todoList');

//function to add a new to do
function addTodo(){
    const todoText = todoInput.value.trim();
    if(todoText !==""){
        const li = document.createElement('li');
        li.textContent = todoText;

        //add a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete');
        deleteBtn.addEventListener('click', ()=>li.remove());
        li.appendChild(deleteBtn);

        //Mark as completed on click
        li.addEventListener('click',()=>li.classList.toggle('completed'));

        //Append to the list
        todoList.appendChild(li);

        //clear the input
        todoInput.value = '';
    }
}

//add to do on button click
addBtn.addEventListener('click', addTodo);

//add to do on enter key press
todoInput.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        addTodo();
    }
});
});