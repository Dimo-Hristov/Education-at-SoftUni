function jsonToObject(json) {
    let obj = JSON.parse(json)

    for (const key of Object.keys(obj)) {
        console.log(key + ': ' + obj[key])
    }

}
jsonToObject('{"name": "George", "age": 40, "town": "Sofia"}')