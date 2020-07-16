function horizontalCheck(){
    let inARow = 0
    let player = isPlayerOne ? 'black' : 'red'
    for (const slot of boardState[lastPos[0]]){
        if(slot === player){
            inARow ++
            if (inARow > 3){return true}
        } else {inARow = 0}
    }
    return false
}

function verticalCheck(){
    let inARow = 0
    let player = isPlayerOne ? 'black' : 'red'
    for (let i = 0; i < 5; i++){
        if (boardState[i][lastPos[1]] === player){
            inARow++
            if (inARow > 2){return true}
        } else {inARow = 0}
    }
    return false
}

function diagonalCheck(){
    let inARow = 0
    let player = isPlayerOne ? 'black' : 'red'
    let downStart = [lastPos[0],lastPos[1]]
    while (downStart[0] !== 0 && downStart[1] !== 0){
        downStart[0]--
        downStart[1]--
    }
    for (let i = downStart[0], j = downStart[1]; i < 6 && j < 7; i++, j++){
        if (boardState[i][j] === player){
            inARow++
            if (inARow > 3){return true}
        } else {inARow = 0}
    }
    let upStart = [lastPos[0], [lastPos[1]]]
    while (upStart[0] !== 5 && upStart[1] !== 0){
        upStart[0]++
        upStart[1]--
    }
    for (let i = upStart[0], j = upStart[1]; i > -1 && j < 7; i--, j++){
        if (boardState[i][j] === player){
            inARow++
            if (inARow > 3){return true}
        } else {inARow = 0}
    }
}


function reset(){
    boardState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
    ]
    for (const column of columns){
        while (column.childElementCount > 0){
            column.removeChild(column.lastElementChild)
        }
    }
    isPlayerOne = false
}

function victoryCheck(){
    if (horizontalCheck()|| verticalCheck() || diagonalCheck()){
        let player = isPlayerOne ? 'black' : 'red'
        alert(`The ${player} player has won!`)
        reset()
    } else if (!boardState[5].includes(null)){
        alert(`The game has ended in a tie!`)
        reset()
    }
}