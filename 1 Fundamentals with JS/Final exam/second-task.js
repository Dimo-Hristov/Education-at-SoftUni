function demo(input) {
    let totalMessages = Number(input.shift());
    pattern = /^([$%])(?<name>[A-Z][a-z]{2,})\1: \[(?<num1>\d+)\]\|\[(?<num2>\d+)\]\|\[(?<num3>\d+)\]\|$/g;

    for (let i = 0; i < totalMessages; i++) {
        let currentMessage = input[i];
        let isValid = pattern.exec(currentMessage);

        if (isValid) {
            if (isValid !== null) {
                const name = isValid.groups.name
                const num1 = isValid.groups.num1;
                const num2 = isValid.groups.num2;
                const num3 = isValid.groups.num3;

                let result = String.fromCharCode(num1, num2, num3);
                console.log(`${name}: ${result}`);

                isValid = pattern.exec(currentMessage);
            }

        } else {
            console.log(`Valid message not found!`);
        }
    }
}
demo(["4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"])



