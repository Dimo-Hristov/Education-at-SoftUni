function solve(input) {
    const arr = JSON.parse(input);
    const output = [];
    output.push('<table>');
    output.push('<tr><th>Name</th><th>Score</th></tr>');

    for (const obj of arr) {
        output.push(`<tr><th>${obj.Name}</th><th>${obj.Score}</th></tr>`);
    }

    output.push('</table>');

    return output.join('\n')
}
solve(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`)