let x = -7;
let y = 3;

if (x > 0 && y > 0) {
   console.log('1-core');
} else if (x < 0 && y > 0) {
   console.log('2-core');
} else if (x < 0 && y < 0) {
   console.log('3-core');
} else if (x > 0 && y < 0) {
   console.log('4-core');
}