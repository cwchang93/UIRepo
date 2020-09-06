// 寫一個same的function 
// input 兩個array => 其中一個array為另一個array element對應的element值 => true (順序可顛倒)
// 
function same(arr1, arr2) {
    const squareArr = []
    const newArr=[...arr1]
    newArr.sort();
    let flag = false;
    for (let i =0; i< newArr.length; i++) {
        squareArr.push(newArr[i]*newArr[i])
    }

    if ( squareArr.join() === arr2.join() ) {
        flag = true
    }
        return flag
}

console.log(same([1,2,3], [1,4,9]));