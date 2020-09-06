// rotate Array;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const cpArr = [...nums];
    const newK = k % nums.length;

    const orderArr = [];

    const arrLen = nums.length
    for (let i = 0; i < arrLen; i++) {
        if (arrLen - newK + i < arrLen) {
            orderArr.push(arrLen - newK + i);
        } else {
            orderArr.push(arrLen - newK + i - arrLen);
        }
    }
    if (newK === 0) {
        console.log(nums);
        return;
    }
    for (let i = 0; i < cpArr.length; i++) {
        nums[i] = cpArr[orderArr[i]];
    }
    console.log(nums);
}

rotate([1], 98);

//  無法把原本的nums賦值
// var rotate = function (nums, k) {

//     if (nums.length === 1) {
//         console.log('nums', nums);
//         return;
//     }

//     let duplicateArr;
//     for (let i = 0; i < k; i++) {
//         duplicateArr = nums.concat(nums);
//     }
//     console.log('duplicateArr', duplicateArr);
//     const newArr = []
//     for (let i = 0; i < nums.length; i++) {
//         console.log(duplicateArr[nums.length - k + i]);
//         newArr.push(duplicateArr[nums.length - k + i]);
//     };
//     console.log(newArr);
//     nums = newArr;
//     console.log('nums', nums);

// };

// rotate([1, 1, 2, 3, 3, 3,], 2);


/**
 *     const finalArr = [...nums];
    
    if (nums.length === 1) {
        return;
    } else {
        finalArr.map((ele,i)=>{
        const lastIndex = nums.length -1  
        if (i+k > lastIndex) {
                 nums[i + k -lastIndex -1 ] = ele;         
        } else {
            nums[i+k] = ele;
        }
    });
        
    }
 * 
 */