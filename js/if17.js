let a = 45;

if (a < 100) {
   let b = a % 10; // 5
   let c = (a - b) / 10; // 4

   if (b % 2 !== 0 && c % 2 !== 0) {
      let sum = b + c;

      console.log(sum);
   } else if (b % 2 !== 0 && c % 2 == 0) {
      console.log(b);
   } else if (b % 2 == 0 && c % 2 !== 0) {
      console.log(c);
   } else {
      console.log(0);
   }
} else if (a >= 100) {
   let b = a % 10; // 3
   let c = (a - b) / 10; // 45
   let d = c % 10; // 5
   let e = (c - d) / 10; // 4

   if (b % 2 !== 0 && d % 2 !== 0 && e % 2 !== 0) {
      let sum = b + d + e;

      console.log(sum);
   } else if (b % 2 !== 0 && d % 2 !== 0 && e % 2 == 0) {
      let sum = b + d;

      console.log(sum);
   } else if (b % 2 == 0 && d % 2 !== 0 && e % 2 !== 0) {
      let sum = d + e;

      console.log(sum);
   } else if (b % 2 !== 0 && d % 2 == 0 && e % 2 !== 0) {
      let sum = b + e;

      console.log(sum);
   } else if (b % 2 !== 0 && d % 2 == 0 && e % 2 == 0) {
      console.log(b);
   } else if (b % 2 == 0 && d % 2 !== 0 && e % 2 == 0) {
      console.log(d);
   } else if (b % 2 == 0 && d % 2 == 0 && e % 2 !== 0) {
      console.log(e);
   } else {
      console.log(0);
   }
}