function solve(input) {
    const data = JSON.parse(input);
    const output = [];

    output.push('<table>');
    const props = Object.keys(data[0]);
    output.push(`   <tr>${props.map(p => `<th>${p}</th>`).join('')}</tr>`);

    for (const entry of data) {
        output.push(`   <tr>${props.map(p => `<td>${entry[p]}</td>`).join('')}</tr>`);

    }

    output.push('</table>');

    console.log(output.join('\n'))
}
solve(`[{"Name":"Pesho",

"Score":4,

" Grade":8},

{"Name":"Gosho",

"Score":5,

" Grade":8},

{"Name":"Angel",

"Score":5.50,

" Grade":10}]`)