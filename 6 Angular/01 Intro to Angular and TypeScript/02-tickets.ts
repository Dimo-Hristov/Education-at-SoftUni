function ticketsSorter(ticketInfo: string[], sortCriteria: string ){

    const splittedArray = ticketInfo.map(ticket => ticket.split('|'));
    let sortedArray: string[][] = []
    
    switch(sortCriteria){
        case 'destination': sortedArray = sortByDestination(splittedArray);
            break;
        case 'status': sortedArray = sortBystatus(splittedArray);
            break;
        case 'price': sortedArray = sortByPrice(splittedArray);
        break;

    }

    class Ticket {

        destination: string
        price: number
        status: string
        
        constructor(destination: string, price: number, status: string){
            this.destination = destination
            this.price = price
            this.status = status
        }
    }

    const output = sortedArray.map(x => {
        const [destination, price, status] = x;
        return new Ticket (destination, parseFloat(price), status)
    })

    return output;
    

}

function sortByDestination(ticketInfo: string[][]){
    return ticketInfo.sort((a: string[] ,b: string[]) =>  a[0].localeCompare(b[0]));
    
}
function sortBystatus(ticketInfo: string[][]){
    return ticketInfo.sort((a: string[] ,b: string[]) =>  a[1].localeCompare(b[1]));
}

function sortByPrice(ticketInfo: string[][]){
    return ticketInfo.sort((a: string[], b: string[]) => Number(a[2])-Number(b[2]));
}


ticketsSorter([
'Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'
],
'destination')