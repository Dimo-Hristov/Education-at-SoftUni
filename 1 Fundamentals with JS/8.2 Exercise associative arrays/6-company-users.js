function companyUsers(input) {
    let companyEmployesList = {};

    input.forEach(info => {
        const [company, employeeId] = info.split(' -> ')
        // if the company doesen't exist, add the company and add employee's ID in array
        if (!companyEmployesList[company]) {
            companyEmployesList[company] = [employeeId];
        } else {
            // if company exist
            // check if employee's ID exist, if doesen't add it.
            if (!companyEmployesList[company].includes(employeeId)) {
                companyEmployesList[company].push(employeeId);
            }
        }
    });
    // make kvp array to sort companies by name in ascending order and print them.
    let kvpArray =
        Object.entries(companyEmployesList)
            .sort(([companyA], [companyB]) => companyA.localeCompare(companyB));

    kvpArray.forEach(([companyName, emplyesArr]) => {
        console.log(companyName);
        console.log(`-- ${emplyesArr.join('\n-- ')}`);
    });
}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111'])

// Write a function, which keeps the information about companies and their employees.

// You will receive an array of strings containing the company name and employee's id. Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.

// When you finish reading data, order the companies by their name in ascending order.

// Print the company name and each employee's id in the following format:

// {companyName}

// -- {id1}

// -- {id2}

// -- {idN}

// Input / Constraints

// · The input come as array of strings, each in the format: "{companyName} -> {employeeId}".

// · The input always will be valid.