// function compare(x, y){
//     if (x>y){
//         return x;
//     }
//     else if (x<y){
//         return y;
//     }
//     else{
//         return "the numbers are equal"
//     }
// }
// console.log(compare(5, 5))

/*const a = {
    1:i
}

const b = {
    btn1: {
        1:i
    },
    btn2: {
        2:ii
    }
}*/

let arr=[]
let arr2=[]
const roman = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x', 'xi']

for(let x=0; x<11; x++){
    let y='number' + (x+1);
    arr2.push(y)}

for(let x=0; x<11; x++){
    arr.push({
    'number':roman[x],
    'value':arr2[x],
    'numberValue':x+1
})
}

let screen=document.querySelector('#screen')
console.log(arr);
console.log(arr2);
