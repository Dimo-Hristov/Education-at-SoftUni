function songs(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type,
                this.name = name,
                this.time = time
        }
    }

    let songsCount = Number(input.shift())
    let typeToPrint = input.pop()
    let songs = []


    for (let i = 0; i < songsCount; i++) {
        let currentRow = input.shift()
            .split('_')
        let type = currentRow[0];
        let name = currentRow[1];
        let time = currentRow[2];
        let currentSong = new Song(type, name, time)
        songs.push(currentSong)
    }

    if (typeToPrint == 'all') {
        songs.forEach(i => console.log(i.name))
    } else {
        let filtered = songs.filter(i => i.type == typeToPrint)
        filtered.forEach(i => console.log(i.name))
    }
}
songs([3,

    'favourite_DownTown_3:14',

    'kur_Kiss_4:16',

    'favourite_Smooth Criminal_4:01',

    'all'])