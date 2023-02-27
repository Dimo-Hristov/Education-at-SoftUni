function attachEvents() {
    const submitButton = document.getElementById('submit');
    const locationElement = document.getElementById('location');
    const watherElement = document.getElementById('forecast');
    const currentWatherElement = document.getElementById('current');
    const upcomingWatherElement = document.getElementById('upcoming');
    let cityCode = []

    submitButton.addEventListener('click', () => {
        let previousData = document.querySelector('.forecasts')
        if (previousData) {
            previousData.remove()
        }
        let previousData2 = document.querySelector('.forecasts-info')
        if (previousData2) {
            previousData2.remove()
        }

        fetch('http://localhost:3030/jsonstore/forecaster/locations')
            .then((response) => response.json())
            .then((data) => {
                let cityDetails = data.find(x => x.name == locationElement.value)
                cityCode = cityDetails.code;
            })
            .catch((error) => {
                elementCreator('h1', 'Error!', locationElement.parentNode)
            })

        fetch(`http://localhost:3030/jsonstore/forecaster/today/${cityCode}`)
            .then((response) => response.json())
            .then((data) => {

                let forecast = data[cityCode].forecast
                let cityName = data[cityCode].name
                let condition = forecast.condition
                watherElement.style.display = 'block';

                let forecastDiv = elementCreator('div', '', currentWatherElement, 'forecasts');
                let sumbol = getConditionSymbol(condition);
                elementCreator('span', sumbol, forecastDiv, 'condition symbol');
                let conditionSpan = elementCreator('span', '', forecastDiv, 'condition');
                elementCreator('span', cityName, conditionSpan, 'forecast-data')
                let minMaxTemp = `${forecast.high}°/${forecast.low}°`
                elementCreator('span', minMaxTemp, conditionSpan, 'forecast-data');
                elementCreator('span', condition, conditionSpan, 'forecast-data')

            })
            .catch((error) => {
                elementCreator('h1', 'Error!', locationElement.parentNode)
            })


        fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${cityCode}`)
            .then((response) => response.json())
            .then((data) => {

                const firstDayData = data[cityCode].forecast[0];
                const secondDayData = data[cityCode].forecast[1];
                const thirdDayData = data[cityCode].forecast[2];
                let forecastDiv = elementCreator('div', '', upcomingWatherElement, 'forecasts-info');

                //first day 
                getFirstDayWeather(firstDayData, forecastDiv)

                //second day
                getFirstDayWeather(secondDayData, forecastDiv)

                //third day
                getThirdDayWeather(thirdDayData, forecastDiv)

            })
            .catch((error) => {
                elementCreator('h1', 'Error!', locationElement.parentNode)
            })


    })

}

function getFirstDayWeather(firstDayData, forecastDiv) {
    //firstDay

    let firstDaySpan = elementCreator('span', '', forecastDiv, 'upcoming');

    let firstDayCondition = firstDayData.condition
    let firstDaySymbol = getConditionSymbol(firstDayCondition);
    elementCreator('span', firstDaySymbol, firstDaySpan, 'symbol');

    let minMaxTemp1 = `${firstDayData.high}°/${firstDayData.low}°`;
    elementCreator('span', minMaxTemp1, firstDaySpan, 'forecast-data');

    elementCreator('span', firstDayCondition, firstDaySpan, 'forecast-data');
}

function getSecondDayWeather(secondDayData, forecastDiv) {
    let secondDaySpan = elementCreator('span', '', forecastDiv, 'upcoming');

    let secondDayCondition = secondDayData.condition
    let secondDaySymbol = getConditionSymbol(secondDayCondition);
    elementCreator('span', secondDaySymbol, secondDaySpan, 'symbol');

    let minMaxTemp2 = `${secondDayData.high}°/${secondDayData.low}°`;
    elementCreator('span', minMaxTemp2, secondDaySpan, 'forecast-data');

    elementCreator('span', secondDayCondition, secondDaySpan, 'forecast-data');
}

function getThirdDayWeather(thirdDayData, forecastDiv) {
    let thirdDaySpan = elementCreator('span', '', forecastDiv, 'upcoming');

    let thirdDayCondition = thirdDayData.condition
    let thirdDaySymbol = getConditionSymbol(thirdDayCondition);
    elementCreator('span', thirdDaySymbol, thirdDaySpan, 'symbol');

    let minMaxTemp3 = `${thirdDayData.high}°/${thirdDayData.low}°`;
    elementCreator('span', minMaxTemp3, thirdDaySpan, 'forecast-data');

    elementCreator('span', thirdDayCondition, thirdDaySpan, 'forecast-data');
}

function getConditionSymbol(condition) {
    if (condition == 'Sunny') {
        return '☀'
    } else if (condition == 'Partly sunny') {
        return '⛅'
    } else if (condition == 'Overcast') {
        return '☁'
    } else if (condition == 'Rain') {
        return '☂'
    }

}

function elementCreator(type, content, parent, setClass) {
    let element = document.createElement(type);
    element.textContent = content;

    if (setClass) {
        element.setAttribute('class', setClass)
    }

    if (parent) {
        parent.appendChild(element);
    }
    return element;
}

attachEvents();