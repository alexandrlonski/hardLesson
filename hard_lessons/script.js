
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

for (let i = 1; i <= 100; ++i) {
  let arr = [1, i]
  console.log(`${i} Делители этого числа: ${arr[0]} и ${arr[1]}`);
}