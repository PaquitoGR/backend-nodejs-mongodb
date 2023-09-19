"use strict";

const counter = () => {
  let count = 0;

  const increment = () => {
    count++;
  };

  const getCount = () => count;

  return {
    increment,
    count: getCount,
  };
};

const contador1 = counter();
const contador2 = counter();
contador1.increment();
contador1.increment();
contador1.increment();
contador1.increment();
contador1.increment();
contador1.increment();
contador2.increment();

console.log(contador1.count());
console.log(contador2.count());
