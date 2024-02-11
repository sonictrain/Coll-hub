const startingPrompts = [
    {
        type: 'input',
            message: `Welcome to Coll-hub! What is your team name?\n`,
            name: 'teamName',
            validate(tName) {
                if (tName) {
                  return true;
                }
                return '❌ the Team name is mandatory.';
            },
    },
    {
        type: 'input',
            message: `Please enter the Team's Manager Name\n`,
            name: 'managerName',
            validate(mName) {
                if (/^[a-zA-Z-'` ]{2,}$/.test(mName)) {
                  return true;
                }
                return '❌ Please enter a valid name';
            },
    },
    {
        type: 'input',
            message: `What's the Employee ID?\n`,
            name: 'managerID',
            validate(ID) {
                if (ID) {
                  return true;
                }
                return '❌ The Employee ID is mandatory.';
            },
    },
    {
        type: 'input',
            message: `Please enter the Team's Manager Name\n`,
            name: 'managerEmail',
            validate(email) {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                    return true;
                }
                throw Error('❌ Please provide a valid email.');
            },
    },
    {
        type: 'input',
            message: `Please enter the Team's Manager Name\n`,
            name: 'managerOfficeNumber',
            validate(officeNumber) {
                if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(officeNumber)) {
                  return true;
                }
                return '❌ Please enter a valid phone number.';
            },
    }
]

const nextPrompts = [
    {
        type: 'list',
            message: `Please choose one fromt the options below.\nYou can add as many as Engineers and Interns you want.\nWhen you are done select "Finish building the team".`,
            name: 'nextStep',
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
            loop: false,
    },
]