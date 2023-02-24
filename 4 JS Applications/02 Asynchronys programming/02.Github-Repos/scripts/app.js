function loadRepos() {
	const url = 'https://api.github.com/users/';
	const inputElement = document.getElementById('username');
	const username = inputElement.value;
	const ulElement = document.getElementById('repos');

	ulElement.innerHTML = '';

	fetch(`${url}${username}/repos`)
		.then((response) => response.json())
		.then((data) => {
			data.forEach(x => {
				const listElement = elementCreator('li', '', ulElement);

				const anchorTag = elementCreator('a', x.full_name, listElement)
				anchorTag.setAttribute('href', x.html_url);
				anchorTag.setAttribute('target', '_blank');
			});

		})
		.catch((error) => console.log(error));

}

function elementCreator(type, content, parent) {
	let element = document.createElement(type);
	element.textContent = content;

	if (parent) {
		parent.appendChild(element)
	}
	return element
}