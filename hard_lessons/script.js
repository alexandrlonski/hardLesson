
let arr = [
  '234',
  '348', 
  '458', 
  '789',
  '257',
  '589',
  '439'
];

// arr.forEach((item) => {
//   if (item.startsWith('2') || item.startsWith('4')) {
//     console.log(item);
//   }
// });

 for (let i = 0; i < arr.length; ++i) {
   if (arr[i].substr(0, 1) == 2 || arr[i].substr(0, 1) == 4 ){
     console.log(arr[i]);
   }
 }

let n = 100;

firstFor:
for ( let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue firstFor; 
  }
  
  let arr = [1, i];
  console.log(`${i} Делитель этого числа: ${arr[0]} и ${arr[1]}`);
}