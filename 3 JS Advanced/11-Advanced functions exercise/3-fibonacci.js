function getFibonator() {
    let [a, b] = [0, 1];
    // 0 ,1 ,2 ,3 ,5 ,8 ,13
    return () => {
        c = a + b;
        a = b;
        b = c;
        return a
    }
}



let fib = getFibonator();

console.log(fib()); // 1

console.log(fib()); // 1

console.log(fib()); // 2

console.log(fib()); // 3

console.log(fib()); // 5

console.log(fib()); // 8

console.log(fib()); // 13


// Write a JS function that when called, returns the next Fibonacci number, starting at 0, 1. Use a closure to keep the current number.

// Input

// There will be no input.

// Output

// The output must be a Fibonacci number and must be returned from the function