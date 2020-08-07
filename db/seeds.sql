insert into department (name) values
('Sales'),
('Engineering'),
('Retail');

insert into role (title, salary, department_id) values
	('Manager',80000,1),
    ('Manager',80000,2),
    ('Manager',80000,3),
    ('Salesman',40000,1),
	('Engineer',60000,2),
    ('Cashier',20000,3);

insert into employee (first_name, last_name, role_id) values
('Bob','Builder',2),
('Doug','Benson',1),
('Chad','Brad',3);