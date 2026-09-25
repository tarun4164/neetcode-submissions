class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;

        let stack = []; //[index,height]

        for (let i = 0; i < heights.length; i++) {
            let startInd = i;
            let height = heights[i];

            while (stack.length > 0 && stack[stack.length-1][1] > height) {
                let [prevIndex, prevHeight] = stack.pop();
                let area = prevHeight * (i - prevIndex);
                maxArea = Math.max(area, maxArea);
                startInd = prevIndex;
            }
            stack.push([startInd, height]);
        }
        for (let [index, height] of stack) {
            let area = height * (heights.length - index);
            maxArea = Math.max(area, maxArea);
        }
        return maxArea;
    }
}
