class Company {
    constructor() {
        this.list = {};
    }

    addEmployee(name, salary, position, department) {
        if (name == '' || name == undefined || name == null) {
            throw new Error('Invalid input!')
        }
        if (salary == '' || salary == undefined || salary == null || salary < 0) {
            throw new Error('Invalid input!')
        }
        if (position == '' || position == undefined || position == null) {
            throw new Error('Invalid input!')
        }
        if (department == '' || department == undefined || department == null) {
            throw new Error('Invalid input!')
        }
        if (!this.list[department]) {
            this.list[department] = []
        }
        this.list[department].push({
            name,
            salary,
            position,
        });

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let sortedKvpDepartmentAvgSalary = [];

        Object.entries(this.list).forEach(element => {
            let currentDepartment = element[0];
            let totalsalaries = 0
            element[1].forEach(worker => {
                totalsalaries += worker.salary;
            })
            let averageSalary = totalsalaries / element[1].length;
            sortedKvpDepartmentAvgSalary.push([currentDepartment, averageSalary])
        })

        sortedKvpDepartmentAvgSalary.sort((a, b) => b[1] - a[1]);

        let bestDepartment = sortedKvpDepartmentAvgSalary[0][0];
        let bestAverageSalary = sortedKvpDepartmentAvgSalary[0][1];

        let sortedBestWorkers = this.list[bestDepartment].sort((a, b) => {
            if (a.salary !== b.salary) {
                return b.salary - a.salary;
            } else {
                return a.name.localeCompare(b.name)
            }
        });
        let output = '';
        output += `Best Department is: ${bestDepartment}\n`
        output += `Average salary: ${bestAverageSalary.toFixed(2)}\n`
        sortedBestWorkers.forEach(worker => {
            output += `${worker.name} ${worker.salary} ${worker.position}\n`;
        })
    }
}

let c = new Company();

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
c.bestDepartment()


// Write a class Company, which following these requirements:

// The constructor takes no parameters:

// You could initialize an object:

// · departments - empty object

// addEmployee({ name }, { salary }, { position }, { department })

// This function should add a new employee to the department with the given name.

// · If one of the passed parameters is an empty string (""), undefined or null, this function should throw an error with the following message: "Invalid input!"

// · If salary is less than 0, this function should throw an error with the following message: "Invalid input!"

// · If the new employee is hired successfully, you should add him into the departments object with the current name of the department and return the following message: `New employee is hired. Name: {name}. Position: {position}`

// bestDepartment()

// This function should return the department with the highest average salary rounded to the second digit after the decimal point and its employees sorted by their salary by descending order and by their name in ascending order as a second criterion:

// `Best Department is: {best department's name}

// Average salary: {best department's average salary}

// {employee1} {salary} {position}

// {employee2} {salary} {position}

// {employee3} {salary} {position}

// …`

// Submission

// Submit only the Company class definition.

// Examples

// This is an example of how the code is intended to be used:

// Sample code