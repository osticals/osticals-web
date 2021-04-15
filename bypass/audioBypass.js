navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
    const x = document.getElementById("choppa");
    x.play();
    stream.getTracks().forEach(function (track) { track.stop(); });
});