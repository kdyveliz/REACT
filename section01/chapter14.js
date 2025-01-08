// 스코프
// 1. 전역스코프 : 전역스코프
// 2. 지역스코프 : 지역스코프

// 함수선언식은 for, if문 내에서는 전역스코프이나, 
// 함수 내에 있는 함수 선언식은 지역스코프이다

let a = 1;

function funcA() {
  let b = 2;
  console.log(a);
}

funcA();
// console.log(b); 오류 발생

if (true) {
  let c = 1;
}

for (let i = 1; i < 10; i++) {
  let d = 1;
}

 