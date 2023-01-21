function editElement(ref, match, replacer) {
    const content = ref.textContent;
    const matched = new RegExp(match, 'g');
    const replaced = content.replace(matched, replacer);
    ref.textContent = replaced;
}