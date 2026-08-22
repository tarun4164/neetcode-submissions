class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sortedArr = nums.sort((a,b)=>a-b)


        let result = []
        let hashMap = new Map()
        console.log(sortedArr)
        for (let i = 0; i < sortedArr.length; i++) {
            if(i > 0 && (sortedArr[i] === sortedArr[i-1])){
                continue
            }
            let second = i+1
            let third = sortedArr.length-1
            while(second < third){
                let sum = sortedArr[i] + sortedArr[second] + sortedArr[third]
                if(sum > 0){
                    third--
                }
                if(sum < 0){
                    second++
                }
                if(sum == 0){
                console.log(sortedArr[i], sortedArr[second] , sortedArr[third])

                    result.push([sortedArr[i],sortedArr[second],sortedArr[third]])
                    third--
                    second++
                while(second < third &&(sortedArr[second] === sortedArr[second-1])){
                    second++
                }
                while(third  > second && (sortedArr[third] === sortedArr[third+1])){
                    third--
                }
                }
            }
        }

        return result
       
    }
}
