function solve(arr) {
    let lastNum = arr.pop();
    let resultArr = [];
    for (let index in arr) {
        if (index % lastNum === 0) {
            resultArr.push(arr[index]);
        }
    }
    console.log(resultArr.join(' '));
}
print(['5', '20', '31', '4', '20', '2'])