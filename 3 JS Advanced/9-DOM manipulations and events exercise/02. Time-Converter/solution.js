function attachEventsListeners() {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', daysConverter);
    document.getElementById('hoursBtn').addEventListener('click', hoursConverter);
    document.getElementById('minutesBtn').addEventListener('click', minutesConverter);
    document.getElementById('secondsBtn').addEventListener('click', secondsConverter);

    function daysConverter() {
        let days = Number(daysElement.value);
        let hours = days * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;

        daysElement.value = days;
        hoursElement.value = hours;
        minutesElement.value = minutes;
        secondsElement.value = seconds;
    }
    function hoursConverter() {
        let hours = Number(hoursElement.value);
        let minutes = hours * 60;
        let seconds = minutes * 60;
        let days = hours / 24

        daysElement.value = days;
        hoursElement.value = hours;
        minutesElement.value = minutes;
        secondsElement.value = seconds;
    }
    function minutesConverter() {
        let minutes = Number(minutesElement.value);
        let seconds = minutes * 60;
        let hours = minutes / 60;
        let days = hours / 24

        daysElement.value = days;
        hoursElement.value = hours;
        minutesElement.value = minutes;
        secondsElement.value = seconds;
    }
    function secondsConverter() {
        let seconds = Number(secondsElement.value);
        let minutes = seconds / 60;
        let hours = minutes / 60
        let days = hours / 24

        daysElement.value = days;
        hoursElement.value = hours;
        minutesElement.value = minutes;
        secondsElement.value = seconds;
    }
}

// Create a program that converts different time units. Your task is to add a click event listener to all [CONVERT] buttons. When a button is clicked, read the corresponding input field, convert the value to the three other time units and display it in the input fields.