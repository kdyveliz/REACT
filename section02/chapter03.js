// 1. 배열의 구조분해 할당
let arr = [1, 2, 3];
let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

// 2. 객체의 구조분해 할당
let person = {
  name: "김도연",
  age: 26,
  hobby: "군고구마먹기",
};

let { name, age: myAge, hobby, extra = "hello" } = person;
// console.log(name, myAge, hobby, extra);

// 3. 객체 구조분해할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
