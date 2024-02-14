const startingPrompts = [
    {
        type: 'input',
        message: `Welcome to Coll-hub! What is your team name?\n`,
        name: 'teamName',
        validate(x) {
            if (x) {
                return true;
            }
            return '❌ the Team name is mandatory.';
        },
    },
    {
        type: 'input',
        message: `Please enter the Team's Manager Name\n`,
        name: 'managerName',
        validate(x) {
            if (/^[a-zA-Z-'` ]{2,}$/.test(x)) {
                return true;
            }
            return '❌ Please enter a valid name';
        },
    },
    {
        type: 'input',
        message: `What's the Employee ID?\n`,
        name: 'managerID',
        validate(x) {
            if (x) {
                return true;
            }
            return '❌ The Employee ID is mandatory.';
        },
    },
    {
        type: 'input',
        message: `Please enter the Team's Manager email:\n`,
        name: 'managerEmail',
        validate(x) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x)) {
                return true;
            }
            throw Error('❌ Please provide a valid email.');
        },
    },
    {
        type: 'input',
        message: `Please enter the Team's Manager office number:\n`,
        name: 'managerOfficeNumber',
        validate(x) {
            if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(x)) {
                return true;
            }
            return '❌ Please enter a valid phone number.';
        },
    }
]

const nextPrompts = [
    {
        type: 'list',
        message: `Please choose one from the options below.\nYou can add as many Engineers and Interns as you want.\nWhen you are done select "Finish building the team".`,
        name: 'nextStep',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
        loop: false,
    },
    {
        type: 'input',
        message: `Please enter the Engineer's Name\n`,
        name: 'engineerName',
        validate(x) {
            if (/^[a-zA-Z-'` ]{2,}$/.test(x)) {
                return true;
            }
            return '❌ Please enter a valid name';
        },
        when: (answer) => answer.nextStep === 'Add an engineer'
    },
    {
        type: 'input',
        message: `What's the Employee ID?\n`,
        name: 'engineerID',
        validate(x) {
            if (x) {
                return true;
            }
            return '❌ The Employee ID is mandatory.';
        },
        when: (answer) => answer.nextStep === 'Add an engineer'
    },
    {
        type: 'input',
        message: `Please enter the Engineer's Email address:\n`,
        name: 'engineerEmail',
        validate(x) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x)) {
                return true;
            }
            throw Error('❌ Please provide a valid email.');
        },
        when: (answer) => answer.nextStep === 'Add an engineer'
    },
    {
        type: 'input',
        message: `Enter the Engineer's GitHub username:\n`,
        name: 'engineerGithub',
        validate(x) {
            if (/^[0-9A-Za-z\-]{3,39}$/.test(x)) {
                return true;
            }
            throw Error('❌ Please provide a valid Github username.');
        },
        when: (answer) => answer.nextStep === 'Add an engineer'
    },
    {
        type: 'input',
        message: `Please enter the Intern's Name\n`,
        name: 'internName',
        validate(x) {
            if (/^[a-zA-Z-'` ]{2,}$/.test(x)) {
                return true;
            }
            return '❌ Please enter a valid name';
        },
        when: (answer) => answer.nextStep === 'Add an intern'
    },
    {
        type: 'input',
        message: `What's the Employee ID?\n`,
        name: 'internID',
        validate(x) {
            if (x) {
                return true;
            }
            return '❌ The Employee ID is mandatory.';
        },
        when: (answer) => answer.nextStep === 'Add an intern'
    },
    {
        type: 'input',
        message: `Please enter the Intern's Email address:\n`,
        name: 'internEmail',
        validate(x) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x)) {
                return true;
            }
            throw Error('❌ Please provide a valid email.');
        },
        when: (answer) => answer.nextStep === 'Add an intern'
    },
    {
        type: 'input',
        message: `Enter the Intern's School:\n`,
        name: 'internSchool',
        validate(x) {
            if (x) {
                return true;
            }
            return '❌ the School Name is mandatory.';
        },
        when: (answer) => answer.nextStep === 'Add an intern'
    },
]

module.exports = { startingPrompts, nextPrompts }