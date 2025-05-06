let str = "Hello World"
let strArr = Array.from(str);

let reversedStrArr = [];

for (let i = strArr.length; i >= 0; i--){
    reversedStrArr.push(strArr[i]);
}


console.log(reversedStrArr.join(""))

/** What I've learned:
 * using Array.from(stringName) will return an array from the inputted string
 * 
 * using arrayName.join("") will join the elements in an array from the quotation
 * marks
 *
 */

function reverseStr(string){
    let Arr = Array.from(string);

    let rvrsdStrArr = [];

    for (let i = Arr.length; i >= 0; i--){
        rvrsdStrArr.push(Arr[i]);
    }
    return rvrsdStrArr.join("")
}
console.log(reverseStr(str));