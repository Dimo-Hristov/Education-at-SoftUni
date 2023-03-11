import { html, render } from '/Documents and Settings';

const mainDiv = document.getElementById('contacts');

const name = 'Dimo'


let sayHello = (name) => html`<h1>Hello ${name}</h1>`;
render(sayHello('world'), mainDiv)
