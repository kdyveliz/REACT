// 5가지의 요소 순회 및 탐색 메서드

// for Each
// 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isinclude = arr2.includes(3);

console.log(isinclude);

// 3. indexOf
// 특정요소의 인덱스를 찾아서 반환하는 메서드
// 중복되는 수가 있다면 맨 앞에 찾은 수의 인덱스를 반환
let arr3 = [1, 2, 3];
let index = arr3.indexOf(3);

console.log(index);

// 4. findindex
// 모든 요소를 순회하면서 콜백함수를 만족하는 그런
// 특정 요소의 위치를 반환하는 메서드드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex(function (item) {
  if (item % 2 !== 0) return true;
});

console.log(findedIndex);

// [참고] findIndex vs indexOf
let ObjectArr = [{ name: "김도연" }, { name: "춘식이" }];

// console.log(ObjectArr.indexOf({ name: "김도연" }));
// console.log(ObjectArr.findIndex((item) => item.name === "김도연"));

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ name: "김도연" }, { name: "춘식이" }];

const finded = arr5.find((item) => item.name === "김도연");
console.log(finded);
