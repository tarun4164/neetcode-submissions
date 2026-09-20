class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // 1 find the next day where temp is more than previos 
        //brurte will be each element is compared with the other elements where themp is more // then we maintain a result array where zeroth index element next large temperature is maintaned 
        // 
        let result = new Array(temperatures.length).fill(0);
        let stack = [];

        for(let i = 0 ; i < temperatures.length ; i++){

            while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]] ){
                let previousIndex = stack.pop()
                result[previousIndex] = i - previousIndex
            }

            stack.push(i)
        }
        return result
    }
}
