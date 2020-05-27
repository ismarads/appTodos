var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos= JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
listElement.innerHTML = "";

    for(todo of todos){
        var todoElement = document.createElement('li'); //criando a lista
        var todoText = document.createTextNode(todo); // conteúdo da lista

        var linkElement = document.createElement('a');
        
        linkElement.setAttribute('href', '#');
        
        var pos =todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')' );

        
        var linkText = document.createTextNode("Excluir");


        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);//"herdando"
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value; //atribuindo valor resgatado no input

    todos.push(todoText); //add no array o valor resgatado pelo input e atribuido ao todoText
    inputElement.nodeValue = ''; //apagando valor atual do input

    renderTodos(); //chamando a função novamente pra atualizar a lista
    saveToStorage();
}

buttonElement.onclick = addTodo; //fazendo valera afunção


function deleteTodo(pos){

    todos.splice(pos,1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){

    localStorage.setItem('list_todos', JSON.stringify(todos));
}