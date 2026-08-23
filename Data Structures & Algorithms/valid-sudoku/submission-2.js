class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // while iterating each each can we find row, col, Box duplicates
        let rowEle = Array.from({length:board.length},()=>new Set())
        let colEle = Array.from({length:board.length},()=>new Set())
        let boxEle = Array.from({length:board.length},()=>new Set())
        
        for(let i = 0 ; i < board.length ; i++){
            for(let j = 0  ; j<board.length ; j++){
                if(board[i][j] == "."){
                    continue
                }
                let boxIndex = Math.floor(i/3)*3 +Math.floor(j/3)
                // first row 0 0 0 1 1 1 2 2 2 
                //second row 0 0 0 1 1 1 2 2 2
                //third  row 0 0 0 1 1 1 2 2 2
                //fourth row 3 3 3 4 4 4 5 5 5
                // 0 0
                // 1 0
                // 2 0
                // 3 1
                // 4 1
                // 5 1
                // 6 2
                // 7 2
                // 8 2
                if(rowEle[i].has(board[i][j]) || colEle[j].has(board[i][j]) || boxEle[boxIndex].has(board[i][j])){
                    return false
                }
                rowEle[i].add(board[i][j])
                colEle[j].add(board[i][j])
                boxEle[boxIndex].add(board[i][j])


            }
        }
        return true

    }
}
