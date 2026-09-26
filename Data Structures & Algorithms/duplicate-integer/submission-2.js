class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let inputData = nums;

        let seen = {}

        for (let num of inputData){
            if(num in seen){
                return true
            }
            seen[num] = num
        }
        return false
    }
}
