const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
} /* toDo.id는 number타입, li.id는 string타입 */  

/* X버튼을 클릭할 때, 이벤트를 얻게된다.
그 이벤트는 타겟(클릭하는 대상 - 버튼)을 주고. 그 타겟은 부모를 가진다.
우리는 그 타겟(버튼)의 부모에 접근할 수 있다. 여기서 그 부모는 li다. */

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//Todo를 그리는 역할
function paintTodo(newTodo) {     //원래는 text를 바당ㅆ는데 이제 object를 받게됨 -> 수정
  const li = document.createElement("li");
  li.id = newTodo.id;             //추가
  const span = document.createElement("span");
  span.innerText = newTodo.text;  //원래는 text를 바당ㅆ는데 이제 object를 받게됨 -> 수정(이부분..)
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

//Todo submit
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  };
  toDos.push(newTodoObj); 
  paintTodo(newTodoObj);
  saveToDos();        
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}

/*  #7.8 Deleting To Dos 파트3
      - filter함수는 예전 array에 실제로 작업X, 새 array를 줌
*/
