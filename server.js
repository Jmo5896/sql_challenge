const inquirer = require('inquirer');

const connection = require('./connect');
const add = require('./add');
const init = require('./init');
const orm = require('./orm');
// const crud = require('./crud');


function q1(choice) {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            choices: ['employee', 'department', 'role'],
            message: `Which db would you like to ${choice}?`
        }
    ])
}

const crud = {
    viewQ: () => {
        q1('view').then(({ choice }) => {
            orm.view(choice, function (result) {
                console.table(result);
                init(crud);
            });
        });
    },

    addQ: () => {
        q1('add to').then(({ choice }) => {
            switch (choice) {
                case 'employee':
                    add.emp(result => {
                        console.table(result);
                        init(crud);
                    });
                    break;
                case 'department':
                    add.dept(result => {
                        console.table(result);
                        init(crud);
                    });
                    break;
                case 'role':
                    add.role(result => {
                        console.table(result);
                        init(crud);
                    });
                    break;
            }
        });
    },

    updateQ: () => {
        q1('make an update to').then(({ choice }) => {

        });
    },

    deleteQ: () => {
        q1('delete from').then(({ choice }) => {

        });
    }
}




init(crud);