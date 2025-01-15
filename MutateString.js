// I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

// Example:

// stringOne = 'bubble gum';
// stringTwo = 'turtle ham';

// Result:
// bubble gum
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham


function mutateMyStrings(stringOne, stringTwo) {
    let result = [stringOne]
  
    for (let i = 0; i < stringOne.length; i++) {
      if (stringOne[i] !== stringTwo[i]) {
        stringOne = stringOne.slice(0, i) + stringTwo[i] + stringOne.slice(i + 1)
        result.push(stringOne)
      }
    }
  
    return result.join("\n") + "\n"
}