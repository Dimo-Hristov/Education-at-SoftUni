const viewSection = document.querySelectorAll('.view-section')

function hideAll() {
    viewSection.forEach(x => x.style.display = 'none')
}

export function showView(section) {
    hideAll()
    section.style.display = 'block';
}


