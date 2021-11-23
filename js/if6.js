let x = 6;
let fx;

if (x < -2 || x > 2) {
   x *= 2;
   fx = x;
} else {
   x *= -3;
   fx = x;
}

console.log(fx);