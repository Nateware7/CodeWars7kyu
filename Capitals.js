//Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]





//My Solutions

const capitals = function (word){
    let final = []
    for (let i = 0; i < word.length; i++){
    if (word[i] === word[i].toUpperCase()){
    final.push(i)
    }
    }
    return final
 }

const capitalz = word => { return word.match(/[A-Z]/g).map( x => { return word.indexOf(x) }) }