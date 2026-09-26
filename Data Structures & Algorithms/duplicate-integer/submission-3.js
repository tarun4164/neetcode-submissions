class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let inputData = nums

        let seen = new Set();

        for(let i=0; i < inputData.length ; i++){
            if(seen.has(inputData[i])){
                return true
            }
            seen.add(inputData[i])

        }
        return false
    }
}
