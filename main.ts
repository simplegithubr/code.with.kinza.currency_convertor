#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t welcome to codewithkinza - currancy converter\n"))


let exchange_rate: any = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.70

}
let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
        message: "Enter from currency"
    },
    {
        name: "to",
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
        message: "Enter to currency"
    },
    {
        name: "amount",
        type: "input",
         message: "Enter your amount"
    }
])

let fromAmount = exchange_rate[user_answer.from]
let toamount = exchange_rate[user_answer.to]
let amount = user_answer.amount
let basamount = amount / fromAmount
let convertedamount = basamount * toamount
console.log(`converted amount ${chalk.green(convertedamount.toFixed(2))}`)