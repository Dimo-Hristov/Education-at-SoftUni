function schoolGrades(input) {
    let studentsList = {};

    // make a string with all grades separeted with comma and space
    // after that add all the grades as string into the key of student name
    // if the name exist add the new grades too.
    for (const line of input) {
        let array = line.split(' ');
        let studentName = array.shift();
        let grades = array.join(', ')

        if (studentsList[studentName]) {
            studentsList[studentName] += ', ' + grades
            continue;
        }
        studentsList[studentName] = grades
    }
    // take all grades and calculate the averege 
    for (const student in studentsList) {
        let arrayOfGrades = studentsList[student].split(', ').map(Number)
        let gradesSum = 0
        arrayOfGrades.forEach(grade => gradesSum += grade);
        let averegeGrade = gradesSum / arrayOfGrades.length;
        studentsList[student] = averegeGrade;
    }

    // make a kvp array
    let studentsListArray = Object.entries(studentsList);

    // sort the  students alphabetically by name
    studentsListArray.sort(([nameA], [nameB]) => nameA.localeCompare(nameB))

    // print every student and averege grade
    for (const [name, avgGrade] of studentsListArray) {
        console.log(`${name}: ${avgGrade.toFixed(2)}`);
    }
}
schoolGrades(['Steven 3 5 6 4',

    'George 4 6',

    'Tammy 2 5 3',

    'Steven 6 3'])

//     5. School Grades

// Write a function that stores students and their grades throughout the year. If a student appears more than once, add the new grades to existing ones. Finally, print the students and their average grades, sorted alphabetically by student name. The input comes as an array of strings.

// Note: The average grades must be fixed to the second decimal place.