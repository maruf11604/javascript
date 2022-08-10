

function reverse(sen) {
    const words = sen.split(' ')
    // console.log(words);
    let newWord = [];
    for (let i = words.length - 1; i >= 0; i--) {
        let ele = words[i];
        newWord.push(ele);


    }
    const reversed = newWord.join(' ');
    return reversed;
    // console.log(newWord);

}

const sen = "i am a boy.";
const rev = reverse(sen);
console.log(rev);

// function reverse(sen) {
//     // const words = sen.split(' ')
//     // console.log(words);
//     let newWord = '';
//     for (let i = sen.length - 1; i >= 0; i--) {
//         let ele = sen[i];
//         // newWord.push(ele);
//         newWord = newWord + ele;
//         console.log(newWord);

//     }
//     return newWord;

// }

// const sen = "i am a boy";
// const rev = reverse(sen);
// console.log(rev);