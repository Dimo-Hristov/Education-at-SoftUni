function solve() {
    const messageArea = document.querySelector('.info');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    let firstStop = 'depot';
    let secondStop = '';
    const url = 'http://localhost:3030/jsonstore/bus/schedule/';

    function depart() {

        fetch(`${url}${firstStop}`)
            .then((response) => response.json())
            .then((data) => {
                firstStop = data.name;
                secondStop = data.next;
                messageArea.textContent = `Next stop ${firstStop}`
                departButton.disabled = true;
                arriveButton.disabled = false;
            })
            .catch((error) => {
                messageArea.textContent = 'Error';
                departButton.disabled = true;
                arriveButton.disabled = true;
            })
    }

    function arrive() {
        messageArea.textContent = `Arriving at ${firstStop}`
        firstStop = secondStop;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();