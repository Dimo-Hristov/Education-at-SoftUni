import { createIdea } from "../src/api/data.js";

const section = document.getElementById('createPage');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;


export function showCreate(context) {
    ctx = context;
    context.showSection(section)
}

async function onSubmit(e) {
    e.preventDefault();
    const formdata = new FormData(form);

    const title = formdata.get('title');
    const description = formdata.get('description');
    const img = formdata.get('imageURL');

    await createIdea({
        title,
        description,
        img,
    });
    ctx.goTo('/catalog')
}