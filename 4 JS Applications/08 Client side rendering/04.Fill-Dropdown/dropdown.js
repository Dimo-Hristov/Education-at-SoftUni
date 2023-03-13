import { html, render } from '../node_modules/lit-html/lit-html.js';
const townsList = document.getElementById('menu');
const form = document.querySelector('form')
form.addEventListener('submit', addItem)
const url = 'http://localhost:3030/jsonstore/advanced/dropdown'
renderItems();



async function renderItems() {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('server response error')
    }
    const data = await response.json();
    const townsArr = Object.values(data);

    const townsTemplate = (townsArr) => html`
    ${townsArr.map(town => html`<option value=${town._id}>${town.text}</option>)`)}
    `
    render(townsTemplate(townsArr), townsList)
}



function addItem(e) {
    e.preventDefault();
    const town = form.querySelector('#itemText');

    if (town.value) {
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                text: town.value
            })
        })
            .then(res => {
                if (!res.ok) throw new Error('response error');
                return res.json()
            })
            .then(data => {
                alert(`${data.text} successfully added`);
                town.value = '';
            })
            .catch(error => alert(error.message))

        renderItems();
    }
}