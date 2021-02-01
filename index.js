// CHALLENGE ONE:
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
function truthCheck(collection, pre) {
  const check = collection.every(item => item[pre])
  return check
}

const output1 = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")

console.log('output 1: ', output1)

// CHALLENGE TWO: INCOMPLETE
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
function dropElements(arr, func) {
  const dupArr = []
  const newArr = arr.filter((item, i) => {
    if (arr.filter(num => num === item).length > 1) {
      dupArr.push(i)
    }
    return func(item)
  })
  const newDupArr = [...new Set(dupArr)]
  const ridOffDup = newDupArr.filter(item => !newArr.includes(item))
  return newArr.concat(ridOffDup)
}

const output2 = dropElements([1, 2, 3, 9, 2], function(n) {return n > 2})

console.log('output2: ', output2)


// CHALLENGE 3:
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  if (str.includes('_')) {
    return str.toLowerCase().split('_').join('-')
  }
  if (str.includes(' ') && str.includes('-')) {
    return str.split(/(?=[A-Z])/).join(' ').split('-').join(' ').replace('  ', ' ').split(' ').join('-').toLowerCase()
  }
  if (!str.includes(' ')) {
    return str.split(/(?=[A-Z])/).join('-').toLowerCase()
  }
  return str.toLowerCase().split(' ').join('-')
}

const output3 = spinalCase('Teletubbies say Eh-oh')
console.log('output3: ', output3)

// CHALLENGE 4:
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
function whatIsInAName(collection, source) {
  const collectionArr = collection.flat()
  console.log('source', Object.entries(source).forEach(object => object.toString()))
  let res = collectionArr.filter(obj => {
    console.log(obj)
    return Object.entries(obj).toString().includes(Object.entries(source).toString())
  })
  return res

}

const output4 = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })

console.log('output4: ', output4)