/*
alert("hi");
*/
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