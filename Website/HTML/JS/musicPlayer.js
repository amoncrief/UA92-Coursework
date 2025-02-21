// Bootstrap JS
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
let audio = document.getElementById("audio");
let progressBar = document.getElementById("progress-bar");
function playPause() 
{
    if (audio.paused) 
    {
        audio.play();
    } 
    else 
    {
        audio.pause();
    }
}
function prevSong() 
{
    alert("Previous song function not implemented");
}
function nextSong() 
{
    alert("Next song function not implemented");
}
function addToPlaylist() 
{
    alert("Song added to playlist!");
}
audio.ontimeupdate = function () 
{
    let percentage = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = percentage + "%";
};

