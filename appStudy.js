/*
//alert("hi");

console.log(34523465);
//로그에 출력하기

//변수 만들기
const a = 5;    // const는 값을 바꿀 수 없음
let b = 2;      // let은 값을 바꿀 수 있음, 업데이트 가능
// 업데이트할 때는 let을 붙이지 않음
let myName = "legu";

console.log(a+b);

b = 3;

console.log(a*b);
console.log(a/b);

myName = "daramzy";

console.log("hello "+myName);

//옛날엔 var로 변수 선언했는데 변수 보호가 안되기때문에 const와 let을 만들었다.
//여전히 사용은 가능하다.
//주로 const를 쓰고 let은 필요할 때, var은 쓰지 않는다.


const amIFat = true;
console.log(amIFat);

const something = null;
console.log(something);

let something2;
//변수는 만들었지만 값을 주지 않음 - undefined
console.log(something2);


//210703 note
//배열 array
const daysOfWeek = ['mon','tue','wed','thu','fri','sat'];

const nonsense = [1,2,'hello',false,null,true,undefined,'legu'];

console.log(daysOfWeek, nonsense);

console.log(daysOfWeek[3]);
//배열에서 아이템 가져오기
//thu
//컴퓨터는 숫자를 0부터 센다

daysOfWeek.push('sun');
//배열에 아이템 추가하기

console.log(daysOfWeek);


//object
const playerName = 'legu';
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = 'little bit';


//player.name 
//player.points 
//player.handsome

//위에 변수로 따로 만드는거보다 아래꺼처럼 나타내는게 보기좋다.

//const player = ['legu',1212,false,'little bit'];
//이렇게 하면 하나로 나타냈지만 의미를 모른다.
//이럴 때 필요한게 object
//의미가 서로 다른 property를 저장한다
const player = {
    name : 'legu',
    points : 10,
    fat : true,
};
console.log(player);
console.log(player.name);
console.log(player['name']);
player.fat = false; //update
console.log(player);
player.lastname = 'lee'; //add
console.log(player);

//파이썬의 딕셔너리랑 비슷한듯하면서 다른 느낌


//function
//function은 내가 계속해서 재사용할 수 있는 코드 조각
//코드의 반복을 최소한으로 줄이고 싶다
//코드를 캡슐화해서 다시 사용할 수 있게

function sayHello(nameOfPerson, age){
    console.log('hello! my name is '+nameOfPerson+' I\'m '+age);
}

//argument 인수 보내기
sayHello('legu',27);
sayHello('winter',21);
sayHello('karina',22);

function plus(a, b){
    console.log(a+b);
}
function divide(a, b){
    console.log(a/b);
}
//function 안에 있는 a, b는 function 안에서만 존재한다
plus(3, 5);
divide(3, 5);

const player2 = {
    name : 'legu',
    sayHello2 : function (otherPersonName){
        console.log('hello '+otherPersonName);
    },
};

console.log(player2.name);
player2.sayHello2('legu');


//210704 note
//return

const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

*/
//conditionals 조건문
// if else
/*
const age = prompt('How old are you?')
//prompt -> 사용자에게 창을 띄워주고 물어보기
//이건 이제 별로여서 안쓴다
//답을 할때 까지 실행을 멈추기때문
//입력받는 값은 무조건 string type

//숫자가 필요할 때
parseInt('15');
parseInt(age);

// NaN -> Not a Number
//parseInt 에 'blahblah' 같은 문자열을 넣으면 NaN
//아예 입력받을 때 숫자로 받기
const age2 = parseInt(prompt('how old are u?'));

console.log(isNaN(age));
console.log(isNaN(age2));
//숫자인지 판단 isNaN -> true -> 숫자가 아니다

if(isNaN(age)){
    console.log('Please write a number');
}else if (age<18){
    console.log('You are too young');
}else if (age>=18 && age<=50){
    console.log('You can drink');
}else{
    console.log('Thank you for writing your age. You can drink');
}
*/

//210705 note
//The Document Object
//js가 브라우저를 어떻게 움직이는지
//브라우저의 콘솔창에 document를 치면 html을 볼 수 있다

//document.title 을 치면 title을 보여준다
//document.title = "hi" 라고 치면 즉시 타이틀이 바뀐다
//js는 이미 html에 연결되어있다

//마찬가지로 document.body 를 치면 body부분을 보여준다

//HTML in js
//const title = document.getElementById("title");
//console.log(title);
//console.dir(title); //더 자세히 보여주는 dir

//html  element를 가지고 오는 것을 js에서 할 수 있다는 것

//title.innerText = "Got you!";

const getClass = document.getElementsByClassName("hello");
console.log(getClass);
console.dir(getClass);

/*
const hihello = document.getElementsByTagName("h1");

console.log(title);
//별로인 방법
*/

const hihello = document.querySelector(".hihello h1");
console.log(hihello);
//css 처럼
//여러개가 있으면 처음 element만 가지고 온다

//모두 가지고 오려면 querySelectorAll 을 사용


//document.getElementById("hello");
//document.querySelector("#hello");
//둘은 같은 역할

//210707 note
//app.js 를 html에서 import했기 때문에 건들 수 있다
//querySelector 는 최고다. css selector처럼

//title.style.color = "blue";

//event를 listen하기 -> 주로 할 일
/*
function handleTitleClick(){
    if (title.style.color === "blue"){
        title.style.color = "black";
    }else{
        title.style.color = "blue";
    }
}
*/

//title.addEventListener("click", handleTitleClick);

//어떤 event를 listen할 것인가
//구글에 검색하기 또는
//console.dir() 로 상세내용보고 on붙은 애들 보기
//event로 쓸 때는 on은 떼어내고 사용

function handleMouseEnter(){
    title.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}

//title.addEventListener("mouseenter", handleMouseEnter);
//title.addEventListener("mouseleave", handleMouseLeave);

const red = document.getElementById("red");
const orange = document.getElementById("orange");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

function handleRed(){
    if (red.style.color === "black"){
        red.style.color = "red";
    }else{
        red.style.color = "black";
    }
}
function handleOrange(){
    if (orange.style.color === "black"){
        orange.style.color = "orange";
    }else{
        orange.style.color = "black";
    }
}
function handleYellow(){
    if (yellow.style.color === "black"){
        yellow.style.color = "yellow";
    }else{
        yellow.style.color = "black";
    }
}
function handleGreen(){
    if (green.style.color === "black"){
        green.style.color = "green";
    }else{
        green.style.color = "black";
    }
}

//red.addEventListener("mouseenter", handleRed);
orange.addEventListener("mouseenter", handleOrange);
yellow.addEventListener("mouseenter", handleYellow);
green.addEventListener("mouseenter", handleGreen);

//title.addEventListener("click", handleTitleClick);
//위에서 이렇게 썼던 것을 아래처럼 쓸 수 있음
//title.onclick = handleTitleClick;
red.onmouseenter = handleRed;

//하지만 addEeventListener를 쓰면 
//나중에 removeEventListener를 통해 event listener를 제거할 수 있다

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

window.addEventListener("resize", handleWindowResize);

function handleWindowCopy(){
    alert("copier!");
}

window.addEventListener("copy", handleWindowCopy);

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOD");
}
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

// title.style.color 매번 힘들게 쓰지 말고 변수 선언해서 쓰기
// const currenColor = title.style.color;
// let newColor; 이런식으로
/*
function handleTitleClick(){
    const currenColor = title.style.color;
    let newColor;
    if (currenColor === "black"){
        newColor = "tomato";
    }else{
        newColor = "black";
    }
    title.style.color = newColor;
}
*/
// 근데 css에서 할 수 있는건 css에서 하는게 깔끔

const h1 = document.querySelector("h1");
/* 별로 안좋은 방법
function handleTitleClick(){
    const activeClass = "active";
    if(h1.className===activeClass){
        h1.className = "";
    }else{
        h1.className = activeClass;
    }
}
// "active" 같은 문자열을 여러번 쓰는 것 보다는
// 변수로 만들어서 쓰면 error를 줄일 수 있다
h1.addEventListener("click", handleTitleClick);
*/
// 근데 위와 같은 방법은 기존의 class를 지워버림
// 먼저 있는 것을 보존하면서 쓸 수 있어야 한다

// classList 사용하기
function handleTitleClick(){
    /*
    const activeClass = "active";
    if (h1.classList.contains(activeClass)){
        h1.classList.remove(activeClass);
    }else{
        h1.classList.add(activeClass);
    }
    */
   h1.classList.toggle("active");
}
h1.addEventListener("click",handleTitleClick);
//근데 toggle을 사용하면 더 간단하다
//classList에 해당 class가 있으면 제거, 없으면 추가

//정리
//js 에서 css 직접 바꾸지 않는다
//css에서 할 수 있는건 css에서.
//js에서는 정의된 css를 적용시켜주는 일을 하는게 깔끔