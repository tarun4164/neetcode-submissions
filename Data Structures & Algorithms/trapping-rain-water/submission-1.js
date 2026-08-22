class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        //need find waters trapped between bars
        // to store water we need left support right support
        //for each bar we need to find out left and right support bars
        let leftMaxHeight = new Array(height.length) 
        let rightMaxHeight = new Array(height.length)
        let totalWaterCapacity = 0

        

            leftMaxHeight[0] = height[0]
            for(let j = 1 ; j<height.length;j++){
                if(height[j] > leftMaxHeight[j-1]){
                    leftMaxHeight[j] = height[j]
                }else{
                    leftMaxHeight[j] = leftMaxHeight[j-1]
                }
            }

            rightMaxHeight[height.length-1] = height[height.length-1]

            for(let j = height.length-2 ; j >=0;j--){
                if(height[j] > rightMaxHeight[j+1] ){
                    rightMaxHeight[j] = height[j]
                }else{
                    rightMaxHeight[j] = rightMaxHeight[j+1]
                }
            }
        
            
            for(let i =0 ; i <height.length ; i++){
                let water = Math.min(leftMaxHeight[i],rightMaxHeight[i])-height[i]
                totalWaterCapacity +=water
            }
            return totalWaterCapacity

    }
}
