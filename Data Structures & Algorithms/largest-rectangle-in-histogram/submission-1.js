class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0

        let stack = [] //[[index,height]]

        for(let i = 0 ; i < heights.length ; i++){

            let start = i

            while(stack.length > 0 && stack[stack.length-1][1] > heights[i] ){
                let [index,height] = stack.pop()
                let area = height * (i-index)
                maxArea = Math.max(maxArea,area)
                start = index

            }

            stack.push([start,heights[i]])
        }
        for(let [i,h] of stack ){
            let area = h * (heights.length-i)

            maxArea = Math.max(maxArea,area)
        }
        return maxArea
        
    }
}
