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
}