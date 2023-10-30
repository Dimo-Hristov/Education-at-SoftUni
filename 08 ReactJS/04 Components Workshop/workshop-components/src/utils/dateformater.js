export default function formatDate(input) {
    const date = new Date(input);

    return date.toLocaleDateString();
}