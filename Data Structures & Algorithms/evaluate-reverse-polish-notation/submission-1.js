class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/") {
                let result = null;
                let right = stack.pop();
                let left = stack.pop();
                if (tokens[i] === "+") {
                    result = left + right;
                }
                if (tokens[i] === "-") {
                    result = left - right;
                }
                if (tokens[i] === "*") {
                    result = left * right;
                }
                if (tokens[i] === "/") {
                    result = Math.trunc(left / right)
                }

                stack.push(result);
            } else {
                stack.push(Number(tokens[i]));
            }
        }
        return stack[0]
    }
}
