const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { startingPrompts, nextPrompts } = require("./lib/prompts")

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

let team = [];

inquirer
        .prompt(startingPrompts)
        .then((answers) => {

            const { teamName, managerName, managerID, managerEmail, managerOfficeNumber } = answers
            const manager = new Manager(managerName, managerID, managerEmail, managerOfficeNumber)

            team.push(manager)
            console.log(team)

        }).catch((err) => console.error(err))