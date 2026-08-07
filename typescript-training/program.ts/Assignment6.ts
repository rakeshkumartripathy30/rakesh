function isPrime(n: number): boolean {
    if (n <= 1) {
        return false; // numbers <= 1 are not prime
    }
    for (let i: number = 2; i <= n; i++) {
        if (n % i === 0) {

            return false; // divisible → not prime
        }

        return true; //no divisors found → prime

    }


}
console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(6));