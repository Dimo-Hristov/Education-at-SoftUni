
export function initialize(links) {
    const main = document.querySelector('main');
    const nav = document.querySelector('nav');
    nav.addEventListener('click', onNavigate);

    const context = {
        showSection,
        goTo,
    };

    return context

    function showSection(section) {
        main.replaceChildren(section)
    }

    function onNavigate(e) {
        let target = e.target

        if (target.tagName == 'IMG') {
            target = target.parentElement;
        }

        if (target.tagName == 'A') {
            e.preventDefault();
            const url = new URL(target.href)
            goTo(url.pathname);
        }
    }

    function goTo(name) {
        const handler = links[name];

        if (typeof handler == 'function') {
            handler(context)
        }

        if (typeof handler == 'function') {
            handler(context)
        }
    }

    function updateNav() {
        const user = localStorage.getItem('user');

        if (user) {

        } else {

        }
    }
}

