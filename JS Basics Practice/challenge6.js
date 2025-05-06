const sentence = 'i am muhammad asim salman.';
// const words = sentence.split(" "); //turn the sentence into an array of words
// let newSentence = "";
// for(let i = 0; i < words.length; i++){
//     let chars = Array.from(words[i]);

//     if (chars[0] != chars[0].toUpperCase()){
//         chars[0] = chars[0].toUpperCase();
//         newSentence = newSentence + chars.join("") + " ";
//     } else {
//         newSentence = newSentence + chars.join("") + " ";
//     }
// }//.toUpperCase()

// console.log(newSentence)

function firstWordCap(input){
    const word = input.split(" "); //turn the sentence into an array of words
    let output = "";
    for(let i = 0; i < word.length; i++){
        let chars = Array.from(word[i]);
    
        if (chars[0] != chars[0].toUpperCase()){
            chars[0] = chars[0].toUpperCase();
            output = output + chars.join("") + " ";
        } else {
            output = output + chars.join("") + " ";
        }
    }
    return output;
}

console.log(firstWordCap(sentence));

