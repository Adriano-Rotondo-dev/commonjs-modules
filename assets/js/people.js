const {fullName} = require('./names')
const {hobbies} = require('./hobbies')

function newPerson() {
return {
    fullName:fullName('Adriano', 'Rotondo'),
    hobbies: hobbies(),
}
}
console.log(newPerson())

module.exports = {
    newPerson
}