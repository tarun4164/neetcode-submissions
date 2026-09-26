class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // a+b = target 
        //two for loops wach number is added to all the other numbers ewxcept self 

        for (let i = 0 ; i < nums.length ; i++){
            for(let j=i+1 ; j < nums.length ; j++){
                if( nums[i]+nums[j] === target ){
                    return [i,j]
                }
            }
        }
    }
}
