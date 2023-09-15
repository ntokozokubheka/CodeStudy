function pairElement(str) {
    // create object for pair lookup
    const pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };

    return str.split("")
              .map (x  => [x ,pair[x]])  
}

//Problem Explanation .For this problem will find all prime numbers up to the number you are given as a parameter and return their sum. It is a good idea to research algorithms for finding prime numbers.

function sumPrimes(num) {
  // Check all numbers for primality
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}


//The smallest common multiple between two numbers is the smallest number that both numbers can divide into evenly. This concept can be extended to more than two numbers as well.
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // Largest possible value for SCM
  const upperBound = range.reduce((prod, curr) => prod * curr);
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}

//You have to create a program that will convert HTML entities from string to their 
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

// test here
convertHTML("Dolce & Gabbana");

// test here
convertHTML("Dolce & Gabbana");

smallestCommons([1, 5]);
