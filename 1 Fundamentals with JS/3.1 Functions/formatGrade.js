function formatGrade(grade) {
    let text = ''

    if (grade < 3) {
        text = 'Fail'
    } else if (grade < 3.5) {
        text = 'Poor'
    } else if (grade < 4.5) {
        text = 'Good'
    } else if (grade < 5.5) {
        text = 'Very good'
    } else {
        text = 'Excellent'
    }

    if (grade < 3) {
        grade = 2;
        return `${text} (${grade})`
    } else {
        return `${text} (${grade.toFixed(2)})`
    }
}
formatGrade(3.33)