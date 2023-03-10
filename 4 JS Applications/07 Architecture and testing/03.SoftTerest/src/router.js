
export function initialize(links) {
    const main = document.querySelector('main');
    const nav = document.querySelector('nav');
    nav.addEventListener('click', onNavigate);

    const context = {
        showSection,
        goTo,
        updateNav,
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

    function goTo(name, ...params) {
        const handler = links[name];

        if (typeof handler == 'function') {
            handler(context, ...params)
        }
    }

    function updateNav() {
        const user = localStorage.getItem('user');

        if (user) {
            nav.querySelectorAll('.user').forEach(x => x.style.display = 'block');
            nav.querySelectorAll('.guest').forEach(x => x.style.display = 'none');
        } else {
            nav.querySelectorAll('.user').forEach(x => x.style.display = 'none');
            nav.querySelectorAll('.guest').forEach(x => x.style.display = 'block');
        }
    }
}

