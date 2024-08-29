// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types











//My Solutions

function findShort(s){
    return Math.min(...s.split(' ').map(x => x.length))
}



function findShort(s){
	let splitz = s.split(' ')
	let shortest = splitz[0]
	for (let i = 0; i < splitz.length; i++){
		if(splitz[i].length < shortest.length){
			shortest = splitz[i]
		}
	}
	return shortest.length
}