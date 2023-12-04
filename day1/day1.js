
const values = require("./calibrationValues.json")

const convertTextToNumber = (value) => {
    switch(value) {
        case "one":
            return 1
        case "two":
            return 2
        case "three":
            return 3
        case "four":
            return 4
        case "five":
            return 5
        case "six":
            return 6
        case "seven":
            return 7
        case "eight":
            return 8
        case "nine":
            return 9
        default:
            return value
    }
}

// Task 1
const pattern_1 = /([1-9]{1})/g
const answer = (data, pattern) => data.reduce((sum, value) => {
    numbers = value.match(pattern)
    first = convertTextToNumber(numbers.at(0))
    last = convertTextToNumber(numbers.at(-1))
    combined = `${first}${last}`
    return sum += parseInt(combined)
}, 0)
console.log(answer(values, pattern_1))

// Task 2
const pattern_2 = /([1-9]{1})|(one|two|three|four|five|six|seven|eight|nine)/g

const intersectedTextNumbers = /(on|thre|fiv|nin)eight|twone|sevenine|eight(wo|hree)/g
const cleanIntersectedTextNumbers = (data) => {
    switch(data) {
        case "oneight":
            return "oneeight"
        case "threeight":
            return "threeeight"
        case "fiveight":
            return "fiveeight"
        case "nineight":
            return "nineeight"
        case "twone":
            return "twoone"
        case "sevenine":
            return "sevennine"
        case "eightwo":
            return "eighttwo"
        case "eighthree":
            return "eightthree"
        default:
            return data
    }
}
const cleanValues = values.map((value) => {
    const matches = value.match(intersectedTextNumbers)
    if(matches) {
        matches.forEach((match) => {
            value = value.replace(match, cleanIntersectedTextNumbers(match))
        })
    }
    return value
})

console.log(answer(cleanValues, pattern_2))