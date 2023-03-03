function solve() {
    const bodyElement = document.body.childNodes
    // hide all html elements except yars
    for (let i = 3; i < bodyElement.length - 1; i += 2) {
        bodyElement[i].style.display = 'none'
    }

    document.getElementById('years').addEventListener('click', (e) => showMonths(e))

    function showMonths(e) {
        if (e.target.tagName == 'DIV') {

            const year = e.target.textContent;
            const parentToHide = e.target.parentNode.parentNode.parentNode.parentNode;
            parentToHide.style.display = 'none'

            const monthCalendarElement = document.getElementById(`year-${year}`)
            monthCalendarElement.style.display = 'block';

            showDays(monthCalendarElement, year)
        }
    }

    function showDays(monthCalendarElement, year) {
        monthCalendarElement.addEventListener('click', e => {

            const getMonthNumber = {
                Jan: 1,
                Feb: 2,
                Mar: 3,
                Apr: 4,
                May: 5,
                Jun: 6,
                Jul: 7,
                Aug: 8,
                Sept: 9,
                Oct: 10,
                Nov: 11,
                Dec: 12
            }

            if (e.target.tagName == 'DIV') {
                const month = e.target.textContent;
                const monthNumber = getMonthNumber[month];

                monthCalendarElement.style.display = 'none'

                const daysToDisplayElement = document.getElementById(`month-${year}-${monthNumber}`)
                daysToDisplayElement.style.display = 'block'
            }
        })
    }

}
solve()