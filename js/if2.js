let a = 2;
let b = 5;
let c = 8;

if (a > b && a < c) {
   console.log(a + ' orta');
} else if (b > a && b < c) {
   console.log(b + ' orta');
} else if (c > a && c < b) {
   console.log(c + ' orta');
} else {
   console.log('notori');
}