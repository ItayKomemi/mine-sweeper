'use strict'

const G_Rows = 4
const G_COLS = 4
const MINE = '💣'


var gBoard = {

    minesAroundCount: 0,
    isShown: false,
    isMine: false,
    isMarked: false
}



function initGame() {
    gBoard = buildBoard()
    renderBoard(gBoard)
    gBoard.isShown = false

}

function buildBoard() {
    var board = []
    for (var i = 0; i < G_Rows; i++) {
        board[i] = []
        for (var j = 0; j < G_COLS; j++) {
        // gBoard.push(board[i][j])
        if (board === MINE) gBoard.isMine = true
        board[i][j] = (Math.random() > 1) ? MINE : ' '
            
        }
    }
    // console.log(board)
    
    return board
}

function renderBoard(board) {
    var strHtml = '<table><tbody >\n'
    
    for (var i = 0; i < board.length; i++) {
        strHtml += `\n<tr>\n`
        var rows = board[i]
        for (var j = 0; j < board[0].length; j++) {
            
            board[0][0] = MINE
            board[1][1] = MINE
            
            var cell = rows[j]
            const className = `cell ${i} + cell- ${j}` 
            strHtml += `\t<td onclick="cellClicked(cell, i , j)}" class="${className}style="not-seen">${cell = setMinesNegsCount(gBoard , i , j) }</td>\t`
            // if (cell[j] === MINE) gBoard.isMine = true
            // if (i === 0 && j === 0 || i === 1 && j === 1)
        }
        strHtml += '</tr>\n'
    }
    // console.log(setMinesNegsCount(gBoard , i , j));
    // console.log(gBoard.isMine);
    strHtml += '</tbody></table>'
    // console.table(cell);
    
    var elMat = document.querySelector('div')
    elMat.innerHTML = strHtml
    gBoard.isShown = document.querySelector('tbody')
    gBoard.isShown.classList.add('.not-seen')

}


function cellClicked(cell, i , j){
    var cell = gBoard[i][j]
    gBoard.isShown = true
    checkGameOver()
    var cell = document.querySelector('tbody')
    cell.classList.add('is-clicked')
    console.log(cell, i , j);
    
}

function checkGameOver(){
    
    if (clickedCell === MINE){
        
        gBoard.isMine = true
        console.log(cell , i , j)
        return console.log('game-over');
    } 
}