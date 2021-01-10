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

async function generatePrompts() {
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

    switch (userInput.options) {
        case "Add Department":
            addDepartment();
            break;
        case "Add Role":
            addRole();
            break;
        case "Add Employee":
            addEmployee();
            break;
        case "View Department":
            viewDepartment();
            break;
        case "View Role":
            viewRole();
            break;
        case "View Employee":
            viewEmployee();
            break;
        case "View Employee's By Manager":
            viewByManager();
            break;
        case "Delete Department":
            deleteDepartment();
            break;
        case "Delete Role":
            deleteRole();
            break;
        case "Delete Employee":
            deleteEmployee();
            break;
        case "Update Employee Role":
            updateRole();
            break;
        case "Update Employee Manager":
            updateManager();
            break;
        case "View the total utilized budget of a department":
            viewBudget();
            break;
        default:
            exit();
            break;
    }



};
// FUNCTIONS TO ADD, VIEW, DELETE //
function addDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "departmentTitle",
                message: "Enter Department"
            }

        ])
}

function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "jobTitle",
                message: "Enter Job Title"
            },
            {
                name: "salary",
                message: "What is the salary of the role?"
            },

        ])
}

function addEmployee() {

}

function viewDepartment() {

}

function viewRole() {

}

function viewEmployee() {

}

function viewByManager() {

}

function deleteDepartment() {

}

function deleteRole() {

}

function deleteEmployee() {

}

function updateRole() {

}

function updateManager() {

}

function viewBudget() {

}

// EXIT FUNCTION //
function exit() {
    console.log("Thanks for using the Employee Management System!");
    process.exit();
}