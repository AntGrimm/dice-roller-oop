class Dice {
  constructor(sides, name) {
    this.sides = sides
    // this is not in the constructor parentheses because we are not telling what currentResult is, it is created from function.
    this.currentResult = 0
    this.name = name
    this.pastRolls = []
    // this.anythingIwant = 'hello' - example of what we can put in here
    // if (sides % 2 === 0) {
    //   console.log('the dice is even!')
    // }
  }

  roll() {
    // this.currentResult = Math.ceil(Math.random() * this.sides) - This is valid, but may not be modular enough for multiple purposes.
    this.currentResult = Math.ceil(Math.random() * this.sides)
    this.pastRolls.push(this.currentResult)
    // console.log(randomResult)
    // this.currentResult = randomResult - moved to displayResult function
  }

  displayResult() {
    document.querySelector('.result').textContent = this.currentResult
  }

  displayPastResults() {
    // console.log('past results') - This was used to make reading the console easier when testing past results
    const parent = document.querySelector('.past-results')
    parent.textContent = ''
    this.pastRolls.reverse().forEach(roll => {
      const li = document.createElement('li')
      li.textContent = roll
      parent.appendChild(li)
    })
  }

  doTheRoll() {
    this.roll()
    this.displayResult()
    this.displayPastResults()
  }
}

// const diceTray = [new Dice(6, 'damage dice'), new Dice(20, 'lucky dice')] // - new Dice (sides, name)

const d6 = new Dice(6)
// const d6 = new Dice(6) - refactoring again, moving dice that we would copy/paste and declare over and over, instead moving into an array
// const d20 = new Dice(20)

const main = () => {
  // const d6 = new Dice(6)
  // d6.doTheRoll()
  // // d6.roll() - These were 2 separate functions that we will routinely call together
  // // d6.displayResult() - So we made a new function to stack both functions
  // console.log(d6)
}

// const rollDice = () => {
//   const d6 = new Dice(6) - example of refactoring by declaring const d6 and moving function to event listener
//   d6.doTheRoll()
// }
// const rollDice20 = () => {
//   const rand = Math.ceil(Math.random() * 20)
//   document.querySelector('.result-20').textContent = rand - same as rollDice function
// }

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.roll-d6').addEventListener('click', () => {
  d6.doTheRoll()
}) // ^^ This used to be ('click', rollDice), but we created a const d6 and moved function directly to event listener
//document.querySelector('.roll-d20').addEventListener('click', rollDice20)
