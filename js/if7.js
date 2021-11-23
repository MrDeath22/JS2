let x = 5;
let fx;

if(x <= 0) {
   x *= -1;
   fx = x;
} else if (0 < x && x < 2) {
   x = x ** 2;
   fx = x;
} else if (x >= 2) {
   x = 4;
   fx = x;
}

console.log(fx);