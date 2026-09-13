class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length %2 ==1)return false
        //
        let stack = [];
        let isValidBracket = {
            "{": "}",
            "[": "]",
            "(": ")",
        };
        //iterate over the char of str

        for (let char of s) {
            if (char in isValidBracket) {
                stack.push(char);
            } else {
                let lastBracket = stack.pop();
                if (isValidBracket[lastBracket] !== char) {
                    return false;
                }
            }
        }
        if(stack.length === 0){
            return true
        }else{
            return false
        }
    }
}
