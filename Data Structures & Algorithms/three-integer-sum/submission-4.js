class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let inputArr = nums;
        // a+b+c = 0
        // array is not sorted
        //need to remove duplicates of [a,b,c] but array is not sorted order --need
        let result = [];

        let usedFirstNum = new Set();
        let trpLetKey = new Set();

        for (let i = 0; i < inputArr.length; i++) {
            if (usedFirstNum.has(inputArr[i])) {
                continue;
            }
            usedFirstNum.add(inputArr[i]);
            let seen = new Set();
            for (let j = i + 1; j < inputArr.length; j++) {
                let third = -inputArr[i] - inputArr[j];
                if (seen.has(third)) {
                    let trplet = [inputArr[i], inputArr[j], third].sort((x, y) => x - y).join("");
                    if (trpLetKey.has(trplet)) {
                        continue;
                    }
                    trpLetKey.add(trplet);

                    result.push([inputArr[i], inputArr[j], third]);
                }
                seen.add(inputArr[j]);
            }
        }
        return result;
    }
}
