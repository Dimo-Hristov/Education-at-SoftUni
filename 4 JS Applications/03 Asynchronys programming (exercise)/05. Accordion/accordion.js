function solution() {
    const parentElement = document.getElementById('main')

    fetch('http://localhost:3030/jsonstore/advanced/articles/list')
        .then(response => response.json())
        .then(data => { generateArticle(data) })



    function generateArticle(data) {
        for (row in data) {
            const title = data[row].title;
            const id = data[row]._id;

            const accordion = elementCreator('div', '', parentElement, 'accordion');

            const headDiv = elementCreator('div', '', accordion, 'head')
            elementCreator('span', title, headDiv,);
            const moreBtn = elementCreator('button', 'More', headDiv, 'button')
            moreBtn.id = id;

            const hiddenDiv = elementCreator('div', '', accordion, 'extra')
            hiddenDiv.style.display = 'none'
            const hiddenText = elementCreator('p', '', hiddenDiv,)

            moreBtn.addEventListener('click', () => {
                fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`)
                    .then(response => response.json())
                    .then(data => {
                        hiddenText.textContent = data.content;

                        if (hiddenDiv.style.display == 'none') {
                            hiddenDiv.style.display = 'block';
                            moreBtn.textContent = 'Less'
                        } else {
                            hiddenDiv.style.display = 'none';
                            moreBtn.textContent = 'More'
                        }

                    })
            })

        }
    }


    function elementCreator(type, content, parent, setClass) {
        let element = document.createElement(type);
        element.textContent = content;

        if (setClass) {
            element.setAttribute('class', setClass)
        }

        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }
}

solution()

