class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // starting bar holds no water no matter what the height same with last bar
        //  next is lesthan max height holds water
        let len = height.length;
        let left = 0;
        let right = len - 1;
        let totalWater = 0;

        let leftLarHeight = 0;
        let rightLarHeight = 0;
        while (left < right) {
            let water = 0;
            if (height[left] < height[right]) {
                if (height[left] > leftLarHeight) {
                    leftLarHeight = height[left];
                } else {
                    water = (leftLarHeight - height[left]) * 1;
                    totalWater += water;
                }
                left++;
            } else {
                rightLarHeight = Math.max(rightLarHeight, height[right]);
                water = rightLarHeight - height[right];
                totalWater += water;
                right--;
            }
        }
        return totalWater;
    }
}
