function addSong() {
    let title = document.getElementById("songTitle").value;
    let artist = document.getElementById("artist").value;
    
    if (title && artist) {
        addToPlaylist(title, artist);
        document.getElementById("songTitle").value = "";
        document.getElementById("artist").value = "";
    } else {
        alert("Please enter both a song title and an artist.");
    }
}

function quickSongAdd(title, artist) {
    addToPlaylist(title, artist);
}
function quickAlbumAdd(title, artist) {
    addToPlaylist(title, artist);
}

function addToPlaylist(title, artist) {
    let li = document.createElement("li");
    li.className = "song";
    li.textContent = `${title} - ${artist}`;
    document.getElementById("playlist").appendChild(li);

}
