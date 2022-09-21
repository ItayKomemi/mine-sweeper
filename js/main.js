'use strict'

var gRows = 4
var gCols = 4
var gBoard = {

    minesAroundCount: 0,
    isShown: true,
    isMine: false,
    isMarked: false
}

const MINE = '💣'


function initGame() {
    gBoard = buildBoard()
    renderBoard(gBoard)
    gBoard.isShown = false
    gBoard.minesAroundCount = 0

}

function buildBoard() {
    var board = []
    for (var i = 0; i < gRows; i++) {
        board[i] = []
        for (var j = 0; j < gCols; j++) {
            board[i][j] = (Math.random() > 0.9) ? MINE : setMinesNegsCount(gBoard)
            // gBoard = board[i][j]
            
            if (i === 0 && j === 0 || i === 1 && j === 1)
            board[i][j] = MINE
            gBoard.isShown = true
        }
    }
    console.table(board)
   
    return board
}

function renderBoard(board) {
    var strHtml = '<table border="0"><tbody>\n'

    for (var i = 0; i < board.length; i++) {
        strHtml += `\n<tr>\n`
        var rows = board[i]
        for (var j = 0; j < board[0].length; j++) {
            var cell = rows[j]
            const className = 'cell cell-' + i + '-' + j
            strHtml += `\t<td class="${className}">${cell}</td>\t`
        }
        strHtml += '</tr>\n'
    }
    strHtml += '</tbody></table>'
    console.table(strHtml);
    
    var elMat = document.querySelector('.cells')
    elMat.innerHTML = strHtml
    
}


// cellClicked(elCell, i, j) {
    
//     if (elCell[i][j] === MINE) return
//     else { elCell.innerText = minesAroundCount }
//     return elCell
// }

