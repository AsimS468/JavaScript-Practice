let currMax = 0;
let arr1 = [5, 12, 8, 20, 3, 25, 7, 18, 99, 102, 22, 104, 6, 88, 56]

let i = 0;
while(i<arr1.length){
    if (arr1[i] > currMax){
        currMax = arr1[i];
    }
    i++;
}

console.log('Max number is ' + currMax);




function findMax(arr){
    let max = 0;
    let i = 0;
    while(i<arr.length){
        if (arr[i] > max){
            max = arr[i];
        }
    i++;
    }
    return max;
}

console.log('Max number is ' + findMax(arr1));