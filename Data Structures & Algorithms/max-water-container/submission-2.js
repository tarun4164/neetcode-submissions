class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // a + b = maximum
        // array not in order 
        //distance(indexOfa - indexOfb) * min(h1,h2)
        let maxUnits = 0;
        let left = 0;
        let right = heights.length-1;

        let waterUnits = 0
        while(left < right){
            if(heights[right] > heights[left]){
                 waterUnits = (right-left) * (heights[left])
                left++
            }else{
                 waterUnits = (right-left) * (heights[right])
                right--
            }
            if(waterUnits > maxUnits){
                maxUnits = waterUnits
            }


        }
        return maxUnits
    }
}
