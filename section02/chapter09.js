// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링 하여 새로운 배열로 반환

let arr1 = [
  { name: "춘식이", hobby: "고구마먹기" },
  { name: "김도연", hobby: "고구마먹기" },
  { name: "냥냥이", hobby: "똥먹기" },
];

const sweetPotatoPeople = arr1.filter((item) => {
  if (item.hobby === "고구마먹기") {
    console.log(item);
  }
});

// 2. map
// 배열의 모든요소를 순회하면서 각각 콜백함수를 실행하고, 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx) => {
  return item * 2;
});
console.log(mapResult);

let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3);

// 숫자를 정렬할려면 기준을 설정해줘야함
let arr4 = [10, 3, 5];
// 오름차순
arr4.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(arr4);

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "doyeon"];
const joined = arr6.join(" "); //()사이에 연결자를 넣어주면 된다
console.log(joined);
