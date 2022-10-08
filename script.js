const getWinLoc = window.location.hostname;
document.getElementById("url").innerHTML = getWinLoc;

const getModDate = document.lastModified
document.getElementById("modified").innerHTML = getModDate