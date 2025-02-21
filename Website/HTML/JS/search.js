function toggleSearch() {
    let searchBox = document.getElementById("searchBox");
    searchBox.style.display = searchBox.style.display === "block" ? "none" : "block";
}

function showSuggestions() {
    let input = document.getElementById("search").value.toLowerCase();
    let suggestionBox = document.getElementById("suggestionBox");
    let suggestions = suggestionBox.getElementsByTagName("div");
    
    let matchFound = false;
    for (let suggestion of suggestions) {
        if (suggestion.innerText.toLowerCase().includes(input) && input !== "") {
            suggestion.style.display = "block";
            matchFound = true;
        } else {
            suggestion.style.display = "none";
        }
    }
    suggestionBox.style.display = matchFound ? "block" : "none";
}

function selectSuggestion(value) {
    document.getElementById("search").value = value;
    document.getElementById("suggestionBox").style.display = "none";
}
