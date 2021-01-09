DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;
USE employee_tracker;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30)
);



CREATE TABLE role (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
    FOREIGN KEY(department_id)      
    REFERENCES department(id)      
    ON DELETE CASCADE 
);


CREATE TABLE employee (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL, 
    manager_id INT, 
    FOREIGN KEY(role_id) 
    REFERENCES role(id) 
    ON DELETE CASCADE, 
    FOREIGN KEY(manager_id) 
    REFERENCES employee(id) 
    ON DELETE CASCADE
)