// 1.묵시적 형변환
// -> 자바스크립트 엔진이 알아서 형변환 하는 것

let num = 10;
let str = "20";

// num type이 암묵적으로 str형으로 변환된다
const result = num + str;
console.log(result);

// 2. 명시적 형변환
// 프로그램 내장함수를 이용해서 직접 형 변환을 명시
let str1 = "10";
let str1ToNum1 = Number(str1);
console.log(10+str1ToNum1);

// 단위가 붙어있거나, 숫자만 있는것이 아닐때
let str2 = "10개";
let str2ToNum2 = parseInt(str2);
console.log(str2ToNum2);

// 숫자를 문자열로
let num1 = 20;
let num1ToStr1 = String(num1);
console.log(num1ToStr1);
