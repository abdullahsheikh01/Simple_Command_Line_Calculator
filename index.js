#! /usr/bin/env node
import inquirer from "inquirer";
const calc = await inquirer.prompt([
    {
        message: "Enter First Number to perform operation",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "Enter Second Number to perform operation",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "Select your operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Division", "Multiplication"]
    }
]);
if (calc.operator === "Addition") {
    console.log(calc.firstNumber + calc.secondNumber);
}
else if (calc.operator === "Subtraction") {
    console.log(calc.firstNumber - calc.secondNumber);
}
else if (calc.operator === "Multiplication") {
    console.log(calc.firstNumber * calc.secondNumber);
}
else if (calc.operator === "Division") {
    console.log(calc.firstNumber / calc.secondNumber);
}
else {
    console.log("Invalid operator found!");
}
