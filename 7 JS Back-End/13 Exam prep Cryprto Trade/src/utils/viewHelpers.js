exports.getViewOptionsValue = function (paymentType) {
    const titles = [
        'crypto-wallet',
        'credit-card',
        'debit-card',
        'paypal',
    ]

    const options = titles.map(title => {
        if (title === paymentType) {
            return `<option value="${title}" selected>${title}</option>`
        }

        return `<option value="${title}">${title}</option>`
    })

    return options;
}