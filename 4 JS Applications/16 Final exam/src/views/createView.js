import { html } from "../../node_modules/lit-html/lit-html.js";
import { addNewFruit } from "../api/data.js";

const createTemplate = (submitHanlder) => html`
  <section id="create">
    <div class="form">
      <h2>Add Fruit</h2>
      <form class="create-form" @submit=${submitHanlder}>
        <input type="text" name="name" id="name" placeholder="Fruit Name" />
        <input
          type="text"
          name="imageUrl"
          id="Fruit-image"
          placeholder="Fruit Image"
        />
        <textarea
          id="fruit-description"
          name="description"
          placeholder="Description"
          rows="10"
          cols="50"
        ></textarea>
        <textarea
          id="fruit-nutrition"
          name="nutrition"
          placeholder="Nutrition"
          rows="10"
          cols="50"
        ></textarea>
        <button type="submit">Add Fruit</button>
      </form>
    </div>
  </section>
`;

export const createView = (ctx) => {
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

        addNewFruit(data)
            .then(() => ctx.redirect('/dashboard'))
            .catch(err => alert(err.message))

    }

    ctx.render(createTemplate(submitHanlder))
}
