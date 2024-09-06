// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"









//My Solutions

function removeUrlAnchor(url){
    return url.split('#')[0]
}

function removeUrlAnchor(url){
    let indo = url.indexOf('#')
    return url.includes('#') ? url.slice(0,indo) : url
}