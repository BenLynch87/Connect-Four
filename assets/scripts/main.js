let boardState = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
]
const main = document.querySelector('main')
const columns = document.getElementsByClassName('column')
let isPlayerOne = false 
let lastPos = [0, 0]

document.querySelector('button').addEventListener('click', reset)

function stateUpdate(e){
    let currentColumn = e.currentTarget.id
    for (let i = 5; i > -1; i--){
        if (boardState[i][currentColumn] === null){
            boardState[i][currentColumn] = isPlayerOne ? 'black' : 'red'
            lastPos[0] = i
            lastPos[1] = currentColumn
            return
        }
    }
}

function token(e){
    if (boardState[0][e.currentTarget.id] === null){
        let newToken = document.createElement('div')
        newToken.classList.add('token')
        newToken.style.backgroundColor = isPlayerOne ? 'black' : 'red'
        e.currentTarget.append(newToken)
        stateUpdate(e)
        victoryCheck()
        isPlayerOne = !isPlayerOne
    }
}

for (const column of columns){
    column.addEventListener('click', token)
}
