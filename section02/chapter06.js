// 1. 배열순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i])
}

let arr2 = [4, 5, 6, 7, 8];

for (let i = 0; i < arr2.length; i++) {
  //   console.log(arr2[i]);
  //   console.log(i)
}

// 1.2 for of 반복문 : 배열 순회
for (let item of arr) {
  console.log(item);
}

// 2. 객체 순회

let person = {
  name: "김도연",
  age: 26,
  hobby: "군고구마먹기",
};

// 2.1 Object.keys
// key값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
// console.log(keys);
for (let key of keys) {
  let value = person[key];
  //   console.log(key, value);
}

// 2.2 Object.values
// value 값들만 뽑아서 새로운 배열로 반환

let values = Object.values(person);

for (let value of values) {
  console.log(value);
}

// 2.3 for in : 객체 순회
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}