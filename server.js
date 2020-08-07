const connection = require('./connect');
const inquirer = require('inquirer');

function init() {
    inquirer.prompt([
        {
            type:'list',
            name:'choice',
            choices: ['view', 'add', 'update', 'delete', 'quit'],
            message:'What would you like to do?'
        }
    ]).then(({ choice }) => choice==='quit'? false: selectDb(choice));
}

function selectDb(choice){
    switch(choice) {
        case 'view':
            viewQ();
        break;
        case 'add':
            addQ();
        break;
        case 'update':
            updateQ();
        break;
        case 'delete':
            deleteQ();
        break;
    }
}

function q1 (choice) {
    return inquirer.prompt([
        {
            type:'list',
            name:'choice',
            choices: ['employee','department','role'],
            message:`Which db would you like to ${choice}?`
        }
    ])
}

function viewQ() {
    q1('view').then(({ choice }) => {
        
    });
}

function addQ() {
    q1('add to').then(({ choice }) => {
        
    });
}

function vupdateQiewQ() {
    q1('make an update to').then(({ choice }) => {
        
    });
}

function deleteQ() {
    q1('delete from').then(({ choice }) => {
        
    });
}