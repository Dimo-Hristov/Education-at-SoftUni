function browserHistory(object, array) {
    let browserLogs = []

    for (const row of array) {
        if (row.includes('Open')) {
            let tabToOpen = row.split('Open ').join('');
            let openTabsLength = object['Open Tabs'].length
            object['Open Tabs'][openTabsLength] = tabToOpen
            object['Browser Logs'].push(row)
        }
        if (row.includes('Close')) {
            let tabToClose = row.split('Close ').join('');
            let indexToClose = object['Open Tabs'].indexOf(tabToClose)
            if (indexToClose > -1) { // if tab exist enter
                object['Open Tabs'].splice(indexToClose, 1)
                object['Recently Closed'].push(tabToClose)
                object['Browser Logs'].push(row)
            }
        }
        if (row.includes('Clear History and Cache')) {
            object['Open Tabs'].splice(0)
            object['Recently Closed'].splice(0)
            object['Browser Logs'].splice(0)
        }
    }
    console.log(object['Browser Name']);
    console.log(`Open Tabs: ${object['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${object['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${object['Browser Logs'].join(', ')}`);
}
browserHistory({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate",
        "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},

    ["Close Facebook", "Open StackOverFlow", "Open Google"])

//     As input, you will receive two parameters: an object and a string array.

// The object will be in format: {Browser Name}:{Name of the browser}, Open tabs:[…], Recently Closed: […], Browser Logs: […]. Your task is to fill in the object based on the actions we will get in the array of strings.

// You can open any site in the world as many times as you like; if you do that add it to the open tabs.

// You can close only these tabs you have opened already! If the current action contains a valid opened site, you should remove it from "Open Tabs" and put it into "Recently closed", otherwise don't do anything!

// Browser Logs will hold every single Valid action, which you did (Open and Close).
// There is a special case in which you can get an action that says: "Clear History and Cache". That means you should empty the whole object.

// In the end, print the object in the format:

// {Browser name}

// Open Tabs: {[…]} // Joined by comma and space

// Recently Closed: {[…]} // Joined by comma and space

// Browser Logs: {[…]} // Joined by comma and space