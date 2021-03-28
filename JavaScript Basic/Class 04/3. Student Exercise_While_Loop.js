function sumPOW(x, y) {
    let result = 0;
    let index = x;
    while (index <= y) {
        result += Math.pow(index, 2);
        index++;
    }
    return(result);
}

console.log(sumPOW(101, 150));