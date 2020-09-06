//     1 
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1
//1 5 10 10 5 1

//  [ 1, 1 ,1 ,1, 2, 1, 1, 3, 3, 1  // 
    
//     , 1, 4, 6, 4, 1]



function barseCa(rows) {
    let temp;
    for (let i =1; i<= rows; i++) {
        const arr = [];
        for (let j=1; j<=i; j++) {
            // (j=== 1 || j===1 ) ? arr.push(i) : arr.push(temp[j-1] + temp[j-2])
            if (j === 1 || j === i) {
                arr.push(1);
            } else {
                // if (typeof temp[i+1])
                const newEle = temp[j-1] + temp[j-2]
                arr.push(newEle)
            }
            
            // console.log(1)
        }
        temp = arr

        console.log(arr)
    }
}

barseCa(5);

