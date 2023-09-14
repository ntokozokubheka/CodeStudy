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
