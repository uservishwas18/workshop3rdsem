function result(...values) {
    let result;
    let sum = 0;
    let count = 0;
    for (let n in values) {
        sum = sum + values[n];

        count = count + 1;
    }
    result = sum / count;
    console.log(result, "%");
}
let arr = [1, 2, 3, 4, 5];
result(...arr);