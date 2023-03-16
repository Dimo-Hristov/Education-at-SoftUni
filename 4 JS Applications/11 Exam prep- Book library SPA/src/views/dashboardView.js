import { html, render } from '../../node_modules/lit-html/lit-html.js'

const root = document.getElementById('site-content');


const dashboardTemplate = html`
<h1> Dashboard View</h1>
`

export const dashboardView = () => {
    render(dashboardTemplate, root)
}