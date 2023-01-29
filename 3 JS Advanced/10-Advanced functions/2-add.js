function solution(input) {
    let counter = input;

    function add5(num) {
        let result = counter + num;
        return result;
    }
    return add5
}

let add5 = solution(5);

console.log(add5(2));

console.log(add5(3));