// const promise = new Promise((resolve, reject) => {
//   // 비동기 작업 실행하는 함수
//   // executor
//   setTimeout(() => {
//     console.log("안녕");
//     // resolve("안녕!");
//     reject("왜 실패했는지 이유 ...");
//   }, 2000);
// });

// console.log(promise);

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 실행하는 함수
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num은 숫자가 아닙니다");
      }
    }, 2000);
  });

  return promise;
}

add10(10)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("num이 숫자가 아닙니다");
  });
