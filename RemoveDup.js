// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'






//My Solutions

function removeDuplicateWords(str) {
    return [...new Set(str.split(' '))].join(' ')
}



function removeDuplicateWords(s) {
    const words = s.split(' ')
    const uniqueWords = [...new Set(words)]
    return uniqueWords.join(' ')  
}

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')