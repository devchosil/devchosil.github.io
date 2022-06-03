//log-in form에 입력된게 없으면 log-in form을 표시하고
//있으면 log-in form을 숨긴다.
//일단 log-in form가져오기, 여기 입력된 값 가져오기
//처음에는 greeting이랑 login form 다 숨겨져있음

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greetings = document.querySelector("#greeting");
const question = document.querySelector("#askName");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

// 로그인할때
function onLoginSubmit(event) {
  event.preventDefault();
  loginInput.classList.add(HIDDEN_CLASSNAME);
  loginButton.classList.add(HIDDEN_CLASSNAME);
  question.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

//로그인 후 인사말
function paintGreetings(username) {
  const span = document.createElement("span");
  const button = document.createElement("button");
  
  greetings.appendChild(span);
  greetings.appendChild(button);

  span.innerText = `Hello! ${username}!`;
  button.innerText = `LOGOUT`;
  // greetings.innerHTML = `<span>Hello! ${username}!</span>
  // <button class="logoutBtn">LOGOUT</button>`;
  greetings.classList.remove(HIDDEN_CLASSNAME);
}

//유저네임 저장돼있을때, 없을때 화면 출력
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  loginInput.classList.remove(HIDDEN_CLASSNAME);
  loginButton.classList.remove(HIDDEN_CLASSNAME);
  question.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
} else {
  loginInput.classList.add(HIDDEN_CLASSNAME);
  loginButton.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}




