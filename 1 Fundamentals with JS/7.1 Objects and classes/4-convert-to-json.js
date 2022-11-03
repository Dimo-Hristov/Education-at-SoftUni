function objectToJson(firstName, lastName, hairColor) {
    let obj = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }
    let jsonFormat = JSON.stringify(obj)
    console.log(jsonFormat);
}
objectToJson('George', 'Jones', 'Brown')