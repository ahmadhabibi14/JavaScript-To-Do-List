let addButton = document.getElementById('addButton');
let clearButton = document.getElementById('clearButton');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

function add(){
	var listContainer = document.createElement('div');
	listContainer.classList.add('listContainer');
	toDoContainer.appendChild(listContainer);
	var list = document.createElement('p');
	list.classList.add('list');
	list.innerText = inputField.value;
	listContainer.appendChild(list);
	var removeButton = document.createElement('button');
	removeButton.classList.add('removeButton');
	// removeButton.innerText = "REMOVE";
	listContainer.appendChild(removeButton);
	removeButton.addEventListener('click', function(){
		toDoContainer.removeChild(listContainer);
	})
	var iconTrash = document.createElement('i');
	iconTrash.classList.add('fa-solid', 'fa-trash-can');
	removeButton.appendChild(iconTrash);
	inputField.value = "";
}

clearButton.addEventListener('click', function() {
	toDoContainer.innerHTML = "";
})