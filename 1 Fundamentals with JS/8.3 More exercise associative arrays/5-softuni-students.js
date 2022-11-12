function softuniStudents(input) {
    let coursesList = {};


    for (const row of input) {
        if (row.includes(': ')) {
            let [course, capacity] = row.split(': ');
            capacity = Number(capacity);
            if (coursesList[course]) {
                coursesList[course].capacity += capacity
            } else {
                let obj = {
                    capacity,
                };
                coursesList[course] = obj
            }
        } else {
            let innerArray = row.split(' ')
            let [user, credits] = innerArray.shift().split('[').join(' ').split(']').join('').split(' ');
            credits = Number(credits)
            let email = innerArray[2];
            let joinedCourse = innerArray[4];
            if (coursesList[joinedCourse] && coursesList[joinedCourse].capacity > 0) {
                coursesList[joinedCourse].capacity--
                if (coursesList[joinedCourse].students == undefined) {
                    coursesList[joinedCourse].students = {}
                }
                let obj = {
                    user,
                    credits,
                    email,
                }
                coursesList[joinedCourse].students[user] = obj;
                //console.log(coursesList[joinedCourse].students[user]);
            }

        }

    }
    // sort the courses by the count of students in descending 
    let sortedByCapacity = Object.values(coursesList).sort((a, b) => Object.keys(Object.values(a).length) - Object.keys(Object.values(b).length))

    for (const kur of sortedByCapacity) {
        console.log(kur);
    }




}
softuniStudents(['JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'])