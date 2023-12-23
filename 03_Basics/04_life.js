// Immediately Invoked Function Expressions (IIFE)

// Without IIFE
function message() {
  // Named IIFE
  console.log(`DB Connected`);
}
message(); // DB Connected

// With IIFE

(function print() {
  // Named IIFE
  console.log(`DB Connected`);
})(); // DB Connected

(() => {
  console.log(`DB Connected two`);
})(); // DB Connected two

// we can pass the arguments also
((name) => {
  console.log(`DB Connected two ${name}`);
})("Raju"); // DB Connected two Raju
