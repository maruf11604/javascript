

// function maxTal(num) {
//     let largest = num[0];
//     for (let i = 0; i < num.length; i++) {

//         const index = i;
//         const ele = num[index];
//         if (ele > largest) {
//             largest = ele;
//         }
//     }
//     return largest;
// }

// let num = [167, 190, 120, 165, 137];
// const tall = maxTal(num);
// console.log(tall);


function maxIn(num) {
    let tall = num[0];
    for (let i = 0; i < num.length; i++) {
        let index = i;
        let ele = num[index];
        if (ele.length > tall.length) {
            tall = ele;
        }
        // console.log(index, ele);

    }
    return tall;

}


const height = ["dfigfo", "maruf", "masum", "dina", "mna", "ertyuiop"];
const tallest = maxIn(height);
console.log(tallest);



