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
const title = document.getElementById("title");
console.log(title);
console.dir(title); //더 자세히 보여주는 dir

//html  element를 가지고 오는 것을 js에서 할 수 있다는 것

title.innerText = "Got you!";

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

