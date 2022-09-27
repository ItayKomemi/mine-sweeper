'use strict'

const G_ROWS = 4
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
    for (var i = 0; i < G_ROWS; i++) {
        board[i] = []
        for (var j = 0; j < G_COLS; j++) {
            // gBoard.push(board[i][j])
            // var num = Math.random()
            // if(num > 0.92){
                //     board[i][j] = -1 // -1 is the value of a mine.
                // }else{
                    //     board[i][j] = 0
                    // }
                    board[i][j] = gBoard
                    
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
                    
                    // gBoard[i][j] = setMinesNegsCount(board,i,j) 
                    var cell = rows[j]
                    board[0][0] = -1
                    board[1][1] = -1
                    
                    // const className = `cell ${i} + cell- ${j}`
                    strHtml += `\t<td onclick="cellClicked(gBoard, ${i} , ${j})">${cell = ' '}</td>\t`
                    
                    // if (cell === MINE) gBoard.isMine = true
                    // setMinesNegsCount(gBoard,i,j)
                }
                strHtml += '</tr>\n'
            }
            // console.log(setMinesNegsCount(gBoard , i , j));
            // console.log(gBoard.isMine);
            strHtml += '</tbody></table>'
            // console.table(cell);
            
            var elMat = document.querySelector('div')
            elMat.innerHTML = strHtml
            
            // var button = document.querySelector('button')
            // button.innerText = '😀'
            
            
}

function cellClicked(cell, i, j) {
    
    
    // showCell.clsassList.add('not-seen')
    
    gBoard.isMarked = true
    gBoard.isShown = true
    
    var cell = gBoard[i][j]
    
    
    if (cell === -1) {
        checkGameOver()
        // cell = document.querySelector('tbody td')
        // cell.style.color = 'red'
        cell = document.querySelector('tbody td')
        cell.style.color = 'red'
        cell.innerHTML = MINE
        console.log(cell)
    } else {

        // gBoard[i][j].isShown = true
        // var cell = gBoard[i][j]

        cell = document.querySelector('tbody td')
        cell.innerHTML = setMinesNegsCount(gBoard,i,j)
        
        var button = document.querySelector('button')
        button.innerText = '😀'
        console.log( cell, i, j)
        
    }
}

function checkGameOver() {

    var button = document.querySelector('button')
    button.innerText = '😭 you lost'
    console.log('You Lost')

    initGame()

}

