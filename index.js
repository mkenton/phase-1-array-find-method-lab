
// function findW(game){
//     return game.result === "W"
// }

// function superbowlWin(array){
//     const record = array.find(findW)
//     return record ? record.year : undefined;
// }

function superbowlWin(array){
    const record = array.find(game => game.result === "W")
    return record ? record.year : undefined;
}