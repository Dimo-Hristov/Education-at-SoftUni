import { html, render } from '../node_modules/lit-html/lit-html.js';

const mainDiv = document.getElementById('contacts');

const name = 'Dimo'


let sayHello = (name) => html`<h1>Hello ${name}</h1>`;
render(sayHello('world'), mainDiv)
