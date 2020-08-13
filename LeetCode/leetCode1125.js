
function primeFunc(num) {
    const primeArr = [];
    for (let i=1; i<=num; i++) {
        let cc = false; // 質數
        for (let j=1; j<i; j++ ) {
            if (j ===1) continue
            // console.log(j)
            if (i % j ===0 ){   
                cc =true    //合數
            } 
        }
        if (i === 1) cc =true
        !cc && primeArr.push(i);
    }
    console.log(primeArr)
}

primeFunc(5);