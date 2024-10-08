//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// FundamentalsStrings


//My Solutions

function getMiddle(s){
    let result = []
    let n = s.length
    if (n % 2 === 0) {
        result.push(s[n / 2 - 1])
        result.push(s[n / 2])
    } else {
        result.push(s[Math.floor(n / 2)])
    }
    return result.join('')
}


function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1)
}



function getMiddle(s) {
    let middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1)
}