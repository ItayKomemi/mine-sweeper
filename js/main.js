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
    
    var elCell = document.querySelector('tbody td')
    elCell.innerHTML = ' '
}

function buildBoard() {
    var board = []
    for (var i = 0; i < G_ROWS; i++) {
        board[i] = []
        for (var j = 0; j < G_COLS; j++) {
            // gBoard.push(board[i][j])
            // if (board[i][j] === MINE) gBoard.isMine = true
            // board[i][j] = (Math.random() > 0.8) ? MINE : ' '
            board[i][j] = gBoard
            
        }
    }
    // console.log(board)

    return board
}

function renderBoard(board) {
    var strHtml = '<table><tbody >\n'


    
    if (gBoard.isShown === false) {
        gBoard.document.querySelector('tbody td')
        gBoard.classList.add('.not-seen')
    }
    
    
    for (var i = 0; i < board.length; i++) {
        strHtml += `\n<tr>\n`
        var rows = board[i]
        for (var j = 0; j < board[0].length; j++) {
            var cell = rows[j]
            
            
            board[0][0] = MINE
            board[1][1] = MINE
            const className = `cell ${i} + cell- ${j}`
            strHtml += `\t<td onclick="cellClicked(gBoard, ${i} , ${j})" class="${className}"
            
            >${cell = setMinesNegsCount(gBoard, i, j)}</td>\t`
            // if (cell === MINE) gBoard.isMine = true
        }
        strHtml += '</tr>\n'
    }
    // console.log(setMinesNegsCount(gBoard , i , j));
    // console.log(gBoard.isMine);
    strHtml += '</tbody></table>'
    // console.table(cell);
    
    
    
    var elMat = document.querySelector('div')
    elMat.innerHTML = strHtml
    
}

function cellClicked(cell, i, j) {
    
    if (gBoard[i][j] === MINE) {
        gBoard.isMine = true
        
        checkGameOver(gBoard[i][j])
        return gBoard[i][j]
    } else {
        
        gBoard.isShown = true
        var cell = gBoard[i][j]
        // cell = document.querySelector('tbody td')
        // cell.innerText = ''
        
        var button = document.querySelector('button')
        button.innerText = '😀'
        console.log(cell, i, j)
        return cell
    }
}

function checkGameOver(board) {

    var button = document.querySelector('button')
    button.innerText = '😭 you lost'
    console.log('Lost')

    initGame()
    return board


}

