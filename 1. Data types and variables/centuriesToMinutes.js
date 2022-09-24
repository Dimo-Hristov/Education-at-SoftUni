function centuresToMin(centuries) {
    let yars = centuries * 100
    let days = Math.floor(yars * 365.2422)
    let hours = Math.floor(days * 24)
    let minutes = Math.floor(hours * 60)

    console.log(`${centuries} centuries = ${yars} years = ${days} days = ${hours} hours = ${minutes} minutes`);


}
centuresToMin(1)