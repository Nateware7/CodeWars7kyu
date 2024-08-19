// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


//My Solutions

function XO(str){
    const splitz = str.toLowerCase().split('')
    let Xz = splitz.filter(function(M){ return M =='x'}).length
    let Oz = splitz.filter(function(M){ return M =='o'}).length
    return Xz == Oz
 }

 function XO(str) {
    let x = str.match(/x/gi)
    let o = str.match(/o/gi)
    return (x && x.length) === (o && o.length)
}