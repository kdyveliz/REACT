// 1. Date 객체를 생성하는 방법
let date1 = new Date();
// console.log(date1);

let date2 = new Date("2000-02-05/12:45:00");
// console.log(date2);

// 2. 타임스탬프
// 특정 시간이 협정세계시UTC(1970-01-01/00:00:00)부터 몇 ms가 지났는지를 의미하는 숫자값

let ts1 = date1.getTime();
// console.log(ts1);

let date4 = new Date(ts1);

// console.log(date1, date4);

// 3. 시간요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // Month는 0부터 시작해서 +1 필수
let date = date1.getDate();

// console.log(year, month, date);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 2를 넣으면 +1이 자동으로 되서 실제는 3월로 변경
date1.setUTCDate(12);

console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); //년-월-일
console.log(date1.toLocaleString()); // 년-월-일-시간
