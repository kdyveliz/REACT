// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 방식 (대부분 사용)

// 2. 객체 프로퍼티 ( 객체 속성 )
let person = {
  name: "김도연",
  age: 26,
  hobby: "음악듣기",
  "like cat": true, // 띄어쓰기를 하고싶은 경우 따옴표로 감싸기
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근하는 방법 (점표기법, 괄호표기법)
let name = person.name;
console.log(name);
// let name = person.name2;
// 존재하지 않는 프로퍼티에 접근하려고 하면 undefined가 반환됨

let age = person["age"];
console.log(age);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "student";
person["favoriteFood"] = "마라탕";

// 3.3 프로퍼티를 수정하는 방법
person.job = "developer";
person["favoriteFood"] = "초콜렛";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

console.log(person);

// 3.5 프로퍼티 존재의 유무를 확인하는 방법 (in)
let result1 = "name" in person;
let result2 = "cat" in person;

console.log(result1)
console.log(result2)
