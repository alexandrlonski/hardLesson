let num = 266219,
  i;
num = num.toString().split('');


num = num.reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator * currentValue
}, 1)
console.log(num);

function pow(a, n) {
  return a ** n;
}

num = pow(num, 3)
console.log(num);

console.log(num.toString().substr(0, 2));