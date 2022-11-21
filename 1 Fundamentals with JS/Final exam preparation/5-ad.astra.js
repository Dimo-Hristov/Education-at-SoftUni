function adAstra(input) {
    let text = input.shift();
    let caloriesPerDay = 2000;
    let caloriesOnBoard = 0;

    let pattern = /([#|])(?<name>[a-zA-Z ]+)\1(?<expDate>\d{2}[\/]{1}\d{2}[\/]{1}\d{2})\1(?<calories>\d+)\1/gm

    let matches = text.matchAll(pattern);
    let print = text.matchAll(pattern);

    for (const iterator of matches) {
        caloriesOnBoard += Number(iterator.groups.calories);
    }

    let days = Math.floor(caloriesOnBoard / caloriesPerDay)
    console.log(`You have food to last you for: ${days} days!`);

    for (const meet of print) {
        console.log(`Item: ${meet.groups.name}, Best before: ${meet.groups.expDate}, Nutrition: ${meet.groups.calories}`);
    }
}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);

// You are an astronaut who just embarked on a mission across the solar system. Since you will be in space for a long time, you have packed a lot of food with you. Create a program, which helps you identify how much food you have left and gives you information about its expiration date.

// On the first line of the input you will be given a text string. You must extract the information about the food and calculate the total calories.

// First you must extract the food info. It will always follow the same pattern rules:

// · It will be surrounded by "|" or "#" (only one of the two) in the following pattern: #{item name}#{expiration date}#{calories}# or |{item name}|{expiration date}|{calories}|

// · The item name will contain only lowercase and uppercase letters and whitespace

// · The expiration date will always follow the pattern: {day}/{month}/{year}, where the day, month and year will be exactly two digits long

// · The calories will be an integer between 0-10000

// Calculate the total calories of all food items and then determine how many days you can last with the food you have. Keep in mind that you need 2000kcal a day.

// Input / Constraints

// · You will receive a single string

// Output

// · First print the amount of days you will be able to last with the food you have:

// "You have food to last you for: {days} days!"

// · The output for each food item should look like this: "Item: {item name}, Best before: {expiration date}, Nutrition: {calories}"