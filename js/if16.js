let a = 12;


if (a < 100) {
   let b = a % 10; // 5
   let c = (a - b) / 10; // 4
   let sum = b + c;

   console.log(sum);
} else if (a >= 100 && a < 1000) {
   let b = a % 10; // 3
   let c = (a - b) / 10; // 12
   let d = c % 10; // 2
   let e = (c - d) / 10; // 1
   let sum = b + d + e;
   
   console.log(sum);
} else if (a >= 1000) {
   let b = a % 10; // 4
   let c = (a - b) / 10; // 123
   let d = c % 10; // 3
   let e = (c - d) / 10; // 12
   let f = e % 10; // 2
   let g = (e - f) / 10; // 1
   let sum = b + d + f + g;

   console.log(sum);
}
