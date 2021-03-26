let rockStar = new Map([
  ["artist", "The Rolling Stones"],
  ["song", "Angie"],
  ["album", "Goats Head Soup"],
  ["stinger", "Mick Jagger"],
]);
let newRock = new Map([...rockStar].filter(([k, v]) => k[0] > "a"));
console.log(newRock);

