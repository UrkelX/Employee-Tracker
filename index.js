const inquirer = require("inquirer");
const connection = require("./mysql-connection/connection");
const logo = require("asciiart-logo");
const config = require("./package.json");
const cTable = require("console.table")

init();

function init() {
    console.log(
        logo({
            name: 'Employee Management System',
            font: 'Doom',
            lineChars: 10,
            padding: 2,
            margin: 3,
            borderColor: 'grey',
            logoColor: 'bold-green',
            textColor: 'green',
        })
        .render()
    );

    generatePrompts()

};

async function generatePrompts(){
    const userInput = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Add Department",
                "Add Role",
                "Add Employee",
                "View Department",
                "View Role",
                "View Employee", 
                "View Employee's By Manager", 
                "Delete Department",
                "Delete Role",
                "Delete Employee",
                "Update Employee Role",
                "Update Employee Manager",
                "View the total utilized budget of a department",
                "Exit"
            ],

        }

    ])

    switch (userInput) {
        case "Add Department":
            
            break;
        case "Add Role":
            
            break;
        case "Add Employee":

            break;
        case "View Department":

            break;
        case "View Role":

            break;
        case "View Employee": 

            break;
        case "View Employee's By Manager": 

            break;
        case "Delete Department":

            break;
        case "Delete Role":

            break;
        case "Delete Employee":

            break;
        case "Update Employee Role":

            break;
        case "Update Employee Manager":

            break;
        case "View the total utilized budget of a department":

            break;
        default: 
            return exit();
    }



};

function exit() {
    console.log("Thanks for using the Employee Management System!");
    process.exit();
}