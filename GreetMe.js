// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"




//My Solutions

const greetz = function(name) {
    let first = name.charAt(0).toUpperCase()
    let slicer = name.slice(1).toLowerCase()
    return 'Hello' +' '+ first + slicer + '!'
}



const greet = (name) => 'Hello' + ' ' + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + '!'