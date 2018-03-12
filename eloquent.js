//Exercise: Minimum
function min(a,b){
  if (a <= b) return a;
  return b;
 }

 console.log(min(0, 10));
 // → 0
 console.log(min(0, -10));
 // → -10



//Exercise: Recursion
function isEven(n) {
  //Make n positive
  if (n < 0) n *= -1;
  //Check if n is even
  if (n === 0) return true;
  else if (n === 1) return false;
  else return isEven(n-2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false



//Exercise: Bean Counting
function countBs(str){
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "B") count++;
  }
  return count;
}

function countChar(str, target){
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === target) count++;
  }
  return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4