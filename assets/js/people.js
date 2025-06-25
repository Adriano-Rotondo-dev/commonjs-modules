const { fullName } = require("./names");
const { hobbies } = require("./hobbies");

function newPerson() {
  return {
    fullName: fullName("firstName", "lastName"),
    hobbies: hobbies("hobbyOne", "hobbyTwo", "hobbyThree"),
  };
}
console.log(newPerson());

// module.exports = {newPerson};
