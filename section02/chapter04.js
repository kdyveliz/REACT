// Spread 연산자
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
// ...: 모든 객체나 배열을 펼쳐줌

console.log(arr2);

let profile = {
  name: "김도연",
  age: 26,
  hobby: "군고구마 먹기",
};

let introduce = {
  locate: "Busan",
  job: "student",
  ...profile,
};

console.log(introduce);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// Rest 매개변수 : 배열로 나머지 인자들을 받아올 수 있음
// rest 매개변수 뒤에는 추가적인 매개변수는 선언할 수 없음
function funcB(one,...rest) {
  console.log(rest);
}

funcB(...arr1);
