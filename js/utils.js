'use strict'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  function setMinesNegsCount(gBoard){
     gBoard.minesAroundCount = 0

    for (var i = rows.length - 1; i <= rows.length + 1; i++) {
        if (i < 0 || i >= gBoard.length) continue;
        for (var j = rows[i].length - 1; j <= rows[i].length + 1; j++) {
            if (j < 0 || j >= rows[i].length) continue;
            if (i === rows.length && j === rows[i].length) continue;
            if (cell === MINE) gBoard.minesAroundCount++;
        }
    }
    return gBoard.minesAroundCount;
}

