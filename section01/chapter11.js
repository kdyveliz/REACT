// 함수선언

function greeting() {
  console.log("안녕하세요!");
}

console.log("호출 전");
// 함수는 반드시 호출하고, 소괄호와 함께 작성해야한다.
greeting();
console.log("호출 후");

// 매개변수를 선언하면 let이나 const를 통해 선언할 필요가 없음
function getArea(width, height) {
  //   let width = 10;
  //   let height = 20;
  let area = width * height;

  console.log(area);
  // return : 반환값 or 결과값
  // return문 밑에 console.log를 작성해도 반환되지 않는다.
  return area;
}

// 호출시, 매개변수의 값 인수를 전달해주면 된다.

let area1 = getArea(10, 20);
console.log(area1)
getArea(30, 20);
getArea(120, 200);
