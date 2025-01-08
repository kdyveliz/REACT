// 단락평가
function returnFalse() {
  console.log("False함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

// console.log(returnFalse() && returnTrue());
// console.log(returnTrue() && returnFalse());
console.log(returnTrue() || returnFalse());


// 단락평가 활용사례
function printName(person) {
  const name = person && person.name;
  console.log (name||"person의 값이 없음")
}

printName();
printName({name:"김도연"})