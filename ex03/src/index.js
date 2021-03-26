function* myGenerator() {
  yield* [1, 2, 3, 4, 5];
  yield* "Arena";
  yield* arguments;
}
let iterator = myGenerator(6, 7, 8);
let generatorArray = [];
for (let i = 0; i < 13; i++) {
  let { value } = iterator.next();
  generatorArray.push(value);//vraca vrijednost u array 
}
console.log(generatorArray);
module.exports = { generatorArray, myGenerator };
