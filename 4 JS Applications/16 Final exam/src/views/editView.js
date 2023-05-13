import { html } from "../../node_modules/lit-html/lit-html.js";
import { editFruit, getDetails } from "../api/data.js";

const editTemplate = (fruit, submitHandler) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Fruit</h2>
      <form class="edit-form" @submit=${submitHandler}>
        <input type="text" name="name" id="name" placeholder="Fruit Name" value="${fruit.name}"/>
        <input
          type="text"
          name="imageUrl"
          id="Fruit-image"
          placeholder="Fruit Image URL"
          value="${fruit.imageUrl}"
        />
        <textarea
          id="fruit-description"
          name="description"
          placeholder="Description"
          rows="10"
          cols="50"
        >${fruit.description}</textarea>
        <textarea
          id="fruit-nutrition"
          name="nutrition"
          placeholder="Nutrition"
          rows="10"
          cols="50"
        >${fruit.nutrition}</textarea>
        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export const editView = (ctx) => {
    const fruitId = ctx.params.id;

    const submitHanlder = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const imageUrl = formData.get('imageUrl');
        const description = formData.get('description');
        const nutrition = formData.get('nutrition');

        if (name == '' || imageUrl == '' || description == '' || nutrition == '') {
            alert('All field must be fullfiled');
            return;
        }

        const data = {
            name,
            imageUrl,
            description,
            nutrition
        }

        editFruit(data, fruitId)
            .then(() => ctx.redirect(`/details/${fruitId}`))
            .catch(err => alert(err.message))

    }

    getDetails(fruitId)
        .then(data => {
            ctx.render(editTemplate(data, submitHanlder))
        })
}
