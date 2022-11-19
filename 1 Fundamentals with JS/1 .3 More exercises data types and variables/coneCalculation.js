function coneTask(a, b) {
    let s = Math.sqrt(a * a + b * b);
    let volume = Math.PI * a * a * b / 3;
    console.log("volume = " + volume.toFixed(4));
    let area = Math.PI * a * (a + s);
    console.log("area = " + area.toFixed(4));
}
coneTask(3, 5)