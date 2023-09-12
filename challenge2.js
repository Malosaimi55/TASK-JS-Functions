/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Mohammed");
/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  let checkifOddorEven = n % 2;
  if(checkifOddorEven === 0)
  {
    return false;
  }
  else
  {
    return true;
  }
}

isOdd(10);

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */

function oddsSmallerThan(n) {
  
  let Counter = 0;
  while(n > 0)
  {
    n--;
    if(n % 2 != 0)
    {
      Counter++;
    }
  }
  return Counter;
  
}

console.log(oddsSmallerThan(7));

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if(n % 2 === 0)
  {
    n = n * 2;
    return n;
  }
  else
  {
    n = n * n;
    return n;
  }
}
console.log(squareOrDouble(5));
