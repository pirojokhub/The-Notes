const Array = [1, 23, 34, 45, 45]
// const ArrayString = [Array.length]

// console.log(Array.length)
// console.log(Array[0])
console.log(Array[Array.length - 1])

/* Theory
// const array = [1, 2, 3, 5, 20, 42, 111]
// // const arrayStrings = ['a', 'b', 'c', null, 12]
// // const array = new Array(1, 2, 3, 5, 20, 42)

// // console.log(array.length)
// console.log(array[0])
// console.log(array[array.length - 1]) // array[6 - 1]
// // console.log(array[10])
// array[0] = 'Privet!'
// console.log(array)
// array[array.length] = 'becon'
*/

//Object
const UserNPC = {
    firstName:'Alex',
    lastName:'Mine',
    years:'2002',
    hasGirl: false,
    lang:['en', 'japan'],
    FullName: function(){
        console.log(UserNPC.firstName + '' + UserNPC.lastName);
    }
}
console.log(FullName)
/**
 * Object Theory
 
const person = {
  firstName: 'Vladilen',
  lastName: 'Minin',
  year: 1993,
  hasGirlfriend: false,
  languages: ['ru', 'en', 'de'],
  getFullName: function () {
    console.log(person.firstName + ' ' + person.lastName)
  },
}

console.log(person.year)
console.log(person['languages'])
const key = 'hasGirlfriend'
console.log(person[key])
person.hasGirlfriend = true
console.log(person[key])
person.getFullName()
*/