function* myGenerator() {
  yield* insideGenerator1();
  yield* insideGenerator2();
  yield* insideGenerator3();
}
function* insideGenerator1() {
  for (var i = 1; i <= 5; i++) {
    yield (x = i);
  }
}
function* insideGenerator2() {
  for (var i = 10; i <= 15; i++) {
    yield (x = i);
  }
}
function* insideGenerator3() {
  for (var i = 6; i <= 9; i++) {
    yield (x = i);
  }
}
let iterator = myGenerator();
let fifteenArray = [];
let text = "";
for (let i = 0; i <= 15; i++) {
  let { value } = iterator.next();
  fifteenArray.push(value);
  if (value) {
    text = text + value + "#, ";
  } else {
    text = text + value + "!";
  }
}
console.log(text);
module.exports = { fifteenArray, myGenerator };
