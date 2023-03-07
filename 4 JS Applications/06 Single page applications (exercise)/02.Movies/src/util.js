const views = [...document.querySelectorAll('.view-section')]

function hideAll() {
    views.forEach(x => x.style.display = 'none')
}

export function showView(section) {
    hideAll()
    section.style.display = 'block';
}


