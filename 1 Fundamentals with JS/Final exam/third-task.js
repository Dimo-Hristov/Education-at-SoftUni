function demo(input) {
    let maxMessages = Number(input.shift());
    let usersList = {};
    let counter = 0

    let currentLine = input.shift();

    while (currentLine !== 'Statistics') {
        currentLine = currentLine.split('=');
        let command = currentLine.shift();

        switch (command) {
            case 'Add':
                let username = currentLine.shift();
                let sendedMessages = Number(currentLine.shift());
                let receivedMessages = Number(currentLine.shift());

                if (!usersList[username]) {
                    usersList[username] = {
                        sendedMessages,
                        receivedMessages,
                    }
                    counter++;
                }
                break;

            case 'Message':
                let [sender, receiver] = currentLine;

                if (usersList[sender] && usersList[receiver]) {
                    usersList[sender].sendedMessages += 1;
                    usersList[receiver].receivedMessages += 1;

                    let senderTotalMessages = Number(usersList[sender].sendedMessages + usersList[sender].receivedMessages)

                    if (senderTotalMessages >= maxMessages) {
                        console.log(`${sender} reached the capacity!`);
                        delete usersList[sender];
                        counter--;
                    }
                    let receriverTotalMessages = Number(usersList[receiver].receivedMessages + usersList[receiver].sendedMessages)

                    if (receriverTotalMessages >= maxMessages) {
                        console.log(`${receiver} reached the capacity!`);
                        delete usersList[receiver];
                        counter--;
                    }

                }


                break;

            case 'Empty':
                let userToEmpty = currentLine.shift();

                if (usersList[userToEmpty]) {
                    delete usersList[userToEmpty];
                    counter--;
                }

                if (userToEmpty === 'All') {
                    usersList = {}
                    counter = 0;
                }
                break;
        }
        currentLine = input.shift();
    }

    console.log(`Users count: ${counter}`);

    for (const user in usersList) {
        let totalMessages = usersList[user].sendedMessages + usersList[user].receivedMessages;

        console.log(`${user} - ${totalMessages}`);
    }

}
demo(["12",
    "Add=Bonnie=3=5",
    "Add=Johny=4=4",
    "Empty=All",
    "Add=Bonnie=3=3",
    "Statistics"])
