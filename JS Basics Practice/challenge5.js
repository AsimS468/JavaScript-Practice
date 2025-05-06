const vowels = ['a', 'e', 'i', 'o', 'u'];
let str = 'javascript';

let arr1 = Array.from(str);

let count = 0;

for (let i = 0; i < arr1.length; i++){
    if (vowels.includes(arr1[i])){
        count++;
    }
}

console.log(count);

function vowelCounter(string){
    const vwls = ['a', 'e', 'i', 'o', 'u'];
    let arr = Array.from(string);
    let vwlCount = 0;

    for (let i = 0; i < arr.length; i++){
        if (vwls.includes(arr[i])){
            vwlCount++;
        }
    }

    return vwlCount;

}
console.log(vowelCounter(str));