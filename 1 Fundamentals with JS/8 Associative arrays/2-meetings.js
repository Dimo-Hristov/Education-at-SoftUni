function meetings(input) {
    const meetingList = {}

    for (const meeting of input) {
        let [weekday, name] = meeting.split(' ');

        if (meetingList[weekday]) {
            console.log(`Conflict on ${weekday}!`);
            continue;
        }

        meetingList[weekday] = name;
        console.log(`Scheduled for ${weekday}`);
    }

    for (const meeting in meetingList) {
        console.log(`${meeting} -> ${meetingList[meeting]}`);
    }
}
meetings(['Monday Peter',

    'Wednesday Bill',

    'Monday Tim',

    'Friday Tim'])

    // Write a function that manages meeting appointments. The input comes as an array of strings. Each string contains a weekday and person’s name. For each successful meeting, print a message. If you receive the same weekday twice, the meeting cannot be scheduled so print a conflicting message. In the end, print a list of all successful meetings