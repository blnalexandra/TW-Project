function loadVideo(videoID) {
    document.getElementById('videoFrame').src = "https://www.youtube.com/embed/" + videoID;
}

document.getElementById('returnButton').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});