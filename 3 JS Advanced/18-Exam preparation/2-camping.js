class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (this.listOfParticipants.some(x => x.name == name)) {
            return `The ${name} is already registered at the camp.`
        }

        if (this.priceForTheCamp[condition] > money) {
            return 'The money is not enough to pay the stay at the camp.'
        }

        let participant = {
            name,
            condition,
            power: 100,
            wins: 0,
        }
        this.listOfParticipants.push(participant);

        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {
        let indexOfParticipant = this.listOfParticipants.findIndex(x => x.name == name);

        if (indexOfParticipant == - 1) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }

        this.listOfParticipants.splice(indexOfParticipant, 1);
        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let player1 = this.listOfParticipants.find(x => x.name == participant1);
        if (!player1) {
            throw new Error(`Invalid entered name/s.`);
        }

        if (typeOfGame == 'Battleship') {

            player1.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;

        } else if (typeOfGame == 'WaterBalloonFights') {
            let player2 = this.listOfParticipants.find(x => x.name == participant2);
            if (!player2) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (player1.condition != player2.condition) {
                throw new Error('Choose players with equal condition.')
            }

            if (player1.power > player2.power) {
                player1.wins++
                return `The ${player1.name} is winner in the game ${typeOfGame}.`
            } else if (player2.power > player1.power) {
                player2.wins++;
                return `The ${player2.name} is winner in the game ${typeOfGame}.`
            }

            return 'There is no winner.'
        }
    }

    toString() {
        let output = [];

        let eventInfo = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
        output.push(eventInfo);

        this.listOfParticipants
            .sort((a, b) => b.wins - a.wins)
            .forEach(x => {
                output.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`)
            })

        return output.join('\n')
    }
}

let camp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');

console.log(camp.registerParticipant('Petar Petarson', 'student', 300));

console.log(camp.registerParticipant('Sara Dickinson', 'child', 200));

console.log(camp.unregisterParticipant('Sara Dickinson'));

console.log(camp.unregisterParticipant('John Petarson'));



