DROP DATABASE IF EXISTS employeeDB;

CREATE DATABASE employeeDB;

USE employeeDB;

create table department (
	id int not null auto_increment,
    name varchar(30) not null,
    primary key (id)
);

create table role (
	id int not null auto_increment,
    title varchar(30) not null,
    salary decimal not null,
    department_id int not null,
    primary key (id),
    foreign key (department_id) references department(id)
);

create table employee (
	id int not null auto_increment,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int not null,
    manager_id int,
    primary key (id),
    foreign key (role_id) references role(id),
    foreign key (manager_id) references employee(id)
);