const { mainDb } = require('../databaseConfig');

const initMainDb = () => {
    mainDb.serialize(() => {
        mainDb.run(`CREATE TABLE IF NOT EXISTS Employees (
            employee_id INTEGER PRIMARY KEY,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            department_id INTEGER,
            hire_date DATE,
            salary DECIMAL(10,2),
            phone_number TEXT,
            status TEXT DEFAULT 'active',
            is_deleted INTEGER DEFAULT 0,
            FOREIGN KEY (department_id) REFERENCES Departments(department_id)
        )`);

        mainDb.run(`CREATE TABLE IF NOT EXISTS Departments (
            department_id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            location TEXT,
            description TEXT
        )`);

        mainDb.run(`CREATE TABLE IF NOT EXISTS User_Roles (
            role_id INTEGER PRIMARY KEY,
            name TEXT NOT NULL
        )`);

        mainDb.run(`CREATE TABLE IF NOT EXISTS Users (
            user_id INTEGER PRIMARY KEY,
            employee_id INTEGER,
            login_id TEXT UNIQUE NOT NULL,
            hashed_password TEXT NOT NULL,
            role_id INTEGER,
            last_login DATE,
            FOREIGN KEY (employee_id) REFERENCES Employees(employee_id),
            FOREIGN KEY (role_id) REFERENCES User_Roles(role_id)
        )`);

        mainDb.run(`CREATE TABLE IF NOT EXISTS Projects (
            project_id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            description TEXT,
            status TEXT DEFAULT 'ongoing'
        )`);

        mainDb.run(`CREATE TABLE IF NOT EXISTS Tasks (
            task_id INTEGER PRIMARY KEY,
            project_id INTEGER,
            name TEXT NOT NULL,
            description TEXT,
            due_date DATE,
            completion_date DATE,
            priority INTEGER DEFAULT 1,
            is_deleted INTEGER DEFAULT 0,
            FOREIGN KEY (project_id) REFERENCES Projects(project_id)
        )`);

        mainDb.run(`CREATE TABLE IF NOT EXISTS Task_Assignments (
            assignment_id INTEGER PRIMARY KEY,
            employee_id INTEGER,
            task_id INTEGER,
            start_date DATE,
            FOREIGN KEY (employee_id) REFERENCES Employees(employee_id),
            FOREIGN KEY (task_id) REFERENCES Tasks(task_id)
        )`);

        mainDb.run(`CREATE TABLE IF NOT EXISTS Task_Updates (
            update_id INTEGER PRIMARY KEY,
            assignment_id INTEGER,
            employee_id INTEGER,
            update_date DATETIME,
            progress INT,
            comment TEXT,
            is_completion INTEGER DEFAULT 0,
            FOREIGN KEY (assignment_id) REFERENCES Task_Assignments(assignment_id),
            FOREIGN KEY (employee_id) REFERENCES Employees(employee_id)
        )`);
    });
};

// Run the initialization
initMainDb();
