function add(num) {
    let sum = 0;

    function inner(number) {
        sum += number;
        return inner;
    }
    inner.toString = () => {
        return sum;
    }
    return inner(num)
}

console.log(add(2)(3)(-2).toString());