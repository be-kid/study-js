//const loginForm = document.getElementById("login-form");
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//일반적으로 string만 포함된 변수는 대문자로 표기

function onLoginSubmit(event){
    //console.log(loginInput.value);
    //console.log("click");
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);

    //greeting.innerText = "Hello " + username;
    paintGreeings(username);
}
// .preventDefault() event의 기본 행동이 발생되지 않도록 막는다
// 어떤 function에 대해 브라우저가 기본적으로 수행하는 동작을 막음
// 예를들어 form을 submit하면 페이지를 새로고침하는 동작

//loginButton.addEventListener("click", onLoginBtnClick);

loginForm.addEventListener("submit", onLoginSubmit);

// 함수 이름 뒤에 ()를 붙이면 바로 실행된다
// event 발생시 발동하게 하려면 () 없이

function paintGreeings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreeings(savedUsername);
}