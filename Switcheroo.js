// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'










//My Solutions

function switcheroo(x) {
    return x.split('').map(char => {
      if (char === 'a') return 'b'
      if (char === 'b') return 'a'
      return char
    }).join('')
}



const switcheroo = x => x.split('').map(letter => letter === 'a' ? 'b' : (letter === 'b' ? 'a' : 'c')).join('')