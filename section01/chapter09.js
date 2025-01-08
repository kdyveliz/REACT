// if문
// if로 시작해서 else로 끝나야한다.

let num = 9;

if (num >= 10) {
  console.log("num은 10 이상입니다.");
  console.log("조건식은 참입니다.");
} else if (num >= 5) {
  console.log("num은 5이상입니다.");
} else {
  console.log("조건이 거짓입니다.");
}

// 2. switch문

let animal = "안녕녕";

switch (animal) {
  case "cat": {
    console.log("냥");
    break;
  }
  case "dog": {  
    console.log;
    ("멍");
    break;
  }
  case "bear": {
    console.log("으앙");
    break;
  }
  case "snake": {
    console.log("슈슉");
    break;
  }
  case "tiger": {
    console.log("어흥");
    break;
  }
  default: {
    console.log("그런동물은 저는 모릅니다.");
    break;
  }
}
