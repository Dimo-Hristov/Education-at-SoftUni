function gramophone(band, album, songName) {
    let songDuration = (album.length * band.length * songName.length) / 2;
    let rotationTimes = Math.ceil(songDuration / 2.5)
    console.log(`The plate was rotated ${rotationTimes} times.`);
}
gramophone("Rammstein", "Sehnsucht", "Engel");
