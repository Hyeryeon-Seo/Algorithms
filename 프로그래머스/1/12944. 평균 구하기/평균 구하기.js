function solution(arr) {
    let sum = 0;
    arr.forEach (element => {
        sum += element;
    })
    return sum / arr.length;
}