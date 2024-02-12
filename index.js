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

let team = {
    name: 'My Team',
    employees: []
};

const main = () => {

    inquirer
        .prompt(startingPrompts)
        .then((answers) => {

            const { teamName, managerName, managerID, managerEmail, managerOfficeNumber } = answers
            const manager = new Manager(managerName, managerID, managerEmail, managerOfficeNumber)

            team.name = teamName
            team.employees.push(manager)
            add2Team();

        }).catch((err) => console.error(err))

    const add2Team = async () => {

        let buildTeam = true;

        while (buildTeam) {
            await inquirer
                .prompt(nextPrompts)
                .then((answers) => {

                    const { nextStep, engineerName, engineerID, engineerEmail, engineerGithub, internName, internID, internEmail, internSchool } = answers
                    switch (nextStep) {
                        case "Add an engineer":
                            const engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGithub)
                            team.employees.push(engineer)
                            break;
                        case "Add an intern":
                            const intern = new Intern(internName, internID, internEmail, internSchool)
                            team.employees.push(intern)
                            break;
                        default:
                            buildTeam = false
                    }
                }).catch((err) => console.error(err))
        }
    }
}

main()