'use strict'

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
//   }

//   function setMinesNegsCount(gBoard){
//      var countingMines = 0

//     for (var i = gBoard.length - 1; i <= gBoard.length + 1; i++) {
//         if (i < 0 || i >= gBoard.length) continue;
//         for (var j = gBoard[i].length - 1; j <= gBoard[i].length + 1; j++) {
//             if (j < 0 || j >= gBoard[i].length) continue;
//             if (i === gBoard.length && j === gBoard[i].length) continue;
//             if (gBoard[i][j] === MINE) countingMines++;
//         }
//     }
//     console.log(countingMines);
//     return countingMines
// }

function setMinesNegsCount(board, rowIdx, colIdx) {
    var countingMines = 0
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length) continue

        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j >= board[0].length) continue
            if (i === rowIdx && j === colIdx) continue

            if (board[i][j] === MINE) countingMines++ 
            
            // board[i][j] = countingMines
        }
    }
    // console.log(countingMines);
    return countingMines
}
