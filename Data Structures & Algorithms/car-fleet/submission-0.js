class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = [];
        let previousTime = 0;
        let fleet = [];

        for (let i = 0; i < position.length; i++) {
            cars.push([position[i], speed[i]]);
        }
        cars.sort((a, b) => b[0] - a[0]);
        //above will sort the cars in descending order because the cars can only catch the //fleet ahed of them
        //to find out the how many fleet cars can form need time of each car to reach the target

        for (let i = 0; i < cars.length; i++) {
            let currentPos = cars[i][0];
            let currentSpeed = cars[i][1];
            let time = (target - currentPos) / currentSpeed;

            if (time > previousTime) {
                previousTime = time
                fleet.push(time);
            }
        }
        return fleet.length;
    }
}
