// const arr = [];
// for (let i=9; i>0; i--){
//     for( let j=9; j>0; j--) {
// 		// console.log(`${i} * ${j} = ${i*j}`)
//         arr.push(i*j); 
//     }
// }

const originArr = []
for (let i=1; i<=81; i++ ) {
    originArr.push(i);
}

// console.log(arr)

const finalArr =[]
for (let i =0; i < originArr.length; i ++ ) {

    let cc = false
    for (let j = 0; j <arr.length; j++ ){
        if (originArr[i] === arr[j]) {
            cc =true
        }
    }
    !cc && finalArr.push(originArr[i])
}

console.log(finalArr)
// for (let i=1; i<=originArr.length; i++ ) {
//     for (let j in arr) {
//         // console.log(j);
//     }
// }

// const splitArr = []
// for (let i in arr) {
//     if (i.length <2) splitArr.push(i);
//     else {
//         splitArr.push(i[0])
//         splitArr.push(i[1])
//     } 
// }

// console.log(arr);