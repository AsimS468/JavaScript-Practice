let arr1 = [5, 3, 6, 8, 9, 7, 6, 2, 8, 4, 4, 7]
let arr2 = []; // should become [12, 16, 12, 4, 16, 8, 8]
//for-loop
for (let i = 0; i < arr1.length; i++){
    if (arr1[i] % 2 === 0){
        arr2.push(arr1[i]*2);
    }
}
console.log(`With for-loop: ${arr2}`);


/** What I've learned:
 * Arrays (especially empty arrays) have to be declared similar to python
 * likely the same goes for strings
 * adding values into an array uses the push function instead of add or append
 *
 */



//Function for this code
function doubledEvens(arr){
    let returnArr = [];

    let i = 0;
    while (i < arr1.length){
        if (arr[i] % 2 === 0){
            returnArr.push(arr[i]*2);
        }
        i++;
    }
    return returnArr;
}

console.log('With Function: ' + doubledEvens(arr1));