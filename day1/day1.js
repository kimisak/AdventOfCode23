const values = require("./calibrationValues.json")

// Task 1
const answer_1 = values.reduce((sum, value) => {
    numbers = value.match(/([1-9]{1})/g)
    first = numbers.at(0)
    last = numbers.at(-1)
    combined = `${first}${last}`
    return sum += parseInt(combined)
}, 0)

console.log(answer_1)