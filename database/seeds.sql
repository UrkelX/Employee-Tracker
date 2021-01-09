INSERT INTO department (department_name)
VALUES ('Accounting'),
		('Quality Assurance'),
        ('Human Resources'), 
        ('Coporate')
;




INSERT INTO role (title, salary, department_id)
VALUES ('Accountant', 65000, 1), 
		('Head of QA', 55000, 2), 
        ('Head of HR', 45000, 3),
        ('Head of Accounting', 70000, 1),
        ('Branch Manager', 50000, 4)
;




INSERT INTO employee (first_name, last_name, role_id) 
VALUES ('Angela', 'Martin', 4),
		('Creed', 'Bratton', 2),
        ('Toby', 'Flenderson', 3),
        ('Michael', 'Scott', 5)
        ;

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Oscar', 'Martinez', 1, 1)
;