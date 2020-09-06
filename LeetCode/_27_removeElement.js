/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/**
 * Example 1:

Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.

It doesn't matter what you leave beyond the returned length.
Example 2:

Given nums = [0,1,2,2,3,0,4,2], val = 2,

Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.

Note that the order of those five elements can be arbitrary.

It doesn't matter what values are set beyond the returned length.

 */

var removeElement = function (nums, val) {
    // leetCode不接受function的nums附值
    // nums = nums.filter((ele, i) => {
    //     return ele !== val;
    // })
    let valNum = 0;
    nums.forEach((ele, i) => {
        if (ele === val) {
            nums[i] = 'a';
            valNum += 1;
        }
    })
    nums.sort();
    for (let i = 0; i < valNum; i++) {
        nums.pop();
    }

    console.log(nums);
    return nums.length;
};

removeElement(
    [0, 1, 2, 2, 3, 0, 4, 2], 2);


    //feedback: 如果用splice會有順序問題