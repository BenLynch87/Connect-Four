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

function stateUpdate(e){
    let currentColumn = e.currentTarget.id
    for (let i = 5; i > -1; i--){
        if (boardState[i][currentColumn] === null){
            boardState[i][currentColumn] = isPlayerOne ? 'black' : 'red'
            return
        }
    }
}

function token(e){
    let newToken = document.createElement('div')
    newToken.classList.add('token')
    newToken.style.backgroundColor = isPlayerOne ? 'black' : 'red'
    e.currentTarget.append(newToken)
    isPlayerOne = !isPlayerOne
}

for (const column of columns){
    column.addEventListener('click', token)
}
