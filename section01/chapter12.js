// 1. 함수 표현식
// 선언문 : 식으로써 함수를 생성하는 것것
function funcA() {
  console.log("funcA");
}

let varA = funcA;
varA();

// 익명함수 : 변수로써 함수를 생성하는 것.
// 함수 이름 그 자체로는 호출이 되지 않음. 생략해도 무방함
let varB = function () {
  console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = (value) => {
  return value + 1;
};

console.log(varC(10));
