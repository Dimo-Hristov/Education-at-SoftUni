function ticketsSorter(ticketInfo: string[], sortCriteria: string ){

    const splittedArray = ticketInfo.map(ticket => ticket.split('|'))
    
    switch(sortCriteria){
        case 'destination': sortByDestination(splittedArray);
            break;
        case 'status': sortBystatus(splittedArray);
            break;
        case 'price': sortByPrice(splittedArray);

    }

}

function sortByDestination(ticketInfo: string[][]){
    console.log(ticketInfo.sort((a: string[] ,b: string[]) =>  a[0].localeCompare(b[0])));
    
}
function sortBystatus(ticketInfo: string[][]){
    console.log(ticketInfo.sort((a: string[] ,b: string[]) =>  a[2].localeCompare(b[2])));
}

function sortByPrice(ticketInfo: string[][]){
    console.log(ticketInfo.sort((a: string[], b: string[]) => Number(a[2])-Number(b[2]))) 
}

ticketsSorter([
'Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'
],
'destination')