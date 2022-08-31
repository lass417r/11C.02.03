`use strict`;

window.addEventListener("DOMContentLoaded", init);

let i = 0;
let maxLeng = 10;
let result = [];

function init() {
  console.log("initLoop");
  loop();
}

function loop() {
  //   console.log("loop");
  i++;
  if (i < maxLeng) {
    result.unshift(i);
    console.log(result);
    // console.log("I nr.:", i);
    setTimeout(loop, 1000);
    // loop();
  } else {
    i - 2;
    result.pop(i);
    result.unshift(i);
    console.log(result);
    setTimeout(loop, 1000);
    // console.log("done");
  }
}
