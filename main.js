function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if (hour<10) {
        hour = "0" + hour;
    }

    if (minute<10) {
        minute = "0" + minute;
    }

    if (second<10) {
        second = "0" + second;
    }

    let time = hour + ":" + minute + ":" + second;
    document.getElementById("clock").innerText = time;
    setInterval(currentTime , 1000);
}
currentTime()
