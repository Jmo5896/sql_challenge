const inquirer = require('inquirer');

const orm = require('./orm');

module.exports = {
    emp: (cb) => {
        orm.view('role', result => {
            const roles = result.map(row => row);
            orm.view('employee', result => {
                const managers = result.filter(row => row.role_id <= 3);
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'first_name',
                        message: "What is the Employee's first name?"
                    },
                    {
                        type: 'input',
                        name: 'last_name',
                        message: "What is the Employee's last name?"
                    },
                    {
                        type: 'list',
                        name: 'role_id',
                        message: "What will be the employees role?",
                        choices: roles.map(row => `${row.id} ${row.title}`)
                    },
                    {
                        type: 'list',
                        name: 'manager_id',
                        message: "Who is the employees manager?",
                        choices: [...managers.map(row => `${row.id} ${row.first_name}`), 'no manager']
                    },
                ]).then((ans) => {
                    ans.role_id = parseInt(ans.role_id.split(' ')[0]);
                    ans.manager_id = ans.manager_id !== 'no manager' ? parseInt(ans.manager_id.split(' ')[0]) : null;
                    orm.add('employee', ans, result => {
                        cb(result);
                    })
                });
            });
        });
    },
    dept: (cb) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the name of the new department?"
            }
        ]).then((ans) => {
            orm.add('department', ans, result => {
                cb(result);
            })
        });
    },
    role: (cb) => {
        orm.view('department', result => {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: "What is the title of this new role?"
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: "What is the salary of this new role?"
                },
                {
                    type: 'list',
                    name: 'department_id',
                    message: "Which department will this new role be in?",
                    choices: result.map(row => `${row.id} ${row.name}`)
                },
            ]).then((ans) => {
                ans.department_id = parseInt(ans.department_id.split(' ')[0]);
                orm.add('role', ans, result => {
                    cb(result);
                })
            });
        });
    }
}