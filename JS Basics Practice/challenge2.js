let arr1 = [5, 3, 6, 8, 9, 7, 6, 2, 8, 4, 4, 7]
let arrEven = [];
let arrOdd = [];

for(let i = 0; i < arr1.length; i++){
    if (arr1[i] % 2 === 0){
        arrEven.push(arr1[i]);
    } else if(arr1[i] % 2 != 0){
        arrOdd.push(arr1[i]);
    }
}

console.log('Even: ' + arrEven);
console.log('Odd: ' + arrOdd);

//function for even
function even(arr){
    let evenArr = [];
    for(let i = 0; i < arr1.length; i++){
        if (arr[i] % 2 === 0){
            evenArr.push(arr[i]);
        }
    }
    return evenArr;
}

//function for even
function odd(arr){
    let oddArr = [];
    for(let i = 0; i < arr1.length; i++){
        if (arr[i] % 2 !== 0){
            oddArr.push(arr[i]);
        }
    }
    return oddArr;
}

console.log('Even Function: ' + even(arr1));
console.log('Odd Function: ' + odd(arr1));