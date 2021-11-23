let x = 0.5;

let fx;

if (x > 0) {
   x = Math.sin(x) * 2;
   fx = x;
} else if (x <= 0) {
   x -= 6;
   fx = x;
}
console.log(fx);