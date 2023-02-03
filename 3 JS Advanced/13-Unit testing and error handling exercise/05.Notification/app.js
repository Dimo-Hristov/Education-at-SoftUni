function notify(message) {
  const hiddenDivElement = document.getElementById('notification');

  hiddenDivElement.style.display = 'block';
  hiddenDivElement.textContent = message;

  hiddenDivElement.addEventListener('click', () => {
    hiddenDivElement.style.display = 'none'
  })
}