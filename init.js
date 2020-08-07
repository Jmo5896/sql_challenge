const inquirer = require('inquirer');

function selectDb(choice,obj){
    switch(choice) {
        case 'view':
            obj.viewQ();
        break;
        case 'add':
            obj.addQ();
        break;
        case 'update':
            obj.updateQ();
        break;
        case 'delete':
            obj.deleteQ();
        break;
    }
}

module.exports = function(obj) {
    inquirer.prompt([
        {
            type:'list',
            name:'choice',
            choices: ['view', 'add', 'update', 'delete', 'quit'],
            message:'What would you like to do?'
        }
    ]).then(({ choice }) => choice==='quit'? process.exit(0): selectDb(choice,obj));
}