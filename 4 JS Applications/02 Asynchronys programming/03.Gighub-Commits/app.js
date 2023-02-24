function loadCommits() {
    const usernameElement = document.getElementById('username');
    const username = usernameElement.value;
    const repositoryElement = document.getElementById('repo');
    const repository = repositoryElement.value;

    const ulElement = document.getElementById('commits');
    ulElement.innerHTML = '';
    const url = 'https://api.github.com/repos';

    fetch(`${url}/${username}/${repository}/commits`)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(x => {
                const content = `${x.commit.author.name}: ${x.commit.message}`
                elementCreator('li', content, ulElement)
            })
        })
        .catch((error) => {
            const content = `Error: ${error.status} (Not Found)`
            elementCreator('li', content, ulElement)
        })

}

function elementCreator(type, content, parent) {
    let element = document.createElement(type);
    element.textContent = content;

    if (parent) {
        parent.appendChild(element)
    }
    return element
}