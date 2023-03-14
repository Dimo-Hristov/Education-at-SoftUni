import { html, render } from '../../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html`
<h1>Home Page</h1>
`

export const homeView = (ctx) => {
    render(homeTemplate(), document.querySelector('#root'))
}
