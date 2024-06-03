let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let last = document.getElementById("last");
let lastplay = document.getElementById("lastplay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
 
let songs = [
    {
        songName: "Faded",
        filePath: "Songs/1.mp3",
        coverPath: "Cover Images/1.png",
    },
    {
        songName: "On My Way",
        filePath: "Songs/2.mp3",
        coverPath: "Cover Images/2.png",
    },
    {
        songName: "Alone Pt.II",
        filePath: "Songs/3.mp3",
        coverPath: "Cover Images/3.png",
    },
    {
        songName: "Darkside",
        filePath: "Songs/4.mp3",
        coverPath: "Cover Images/4.png",
    },
    {
        songName: "Ignite",
        filePath: "Songs/5.mp3",
        coverPath: "Cover Images/5.png",
    },
    {
        songName: "Sing Me To Sleep",
        filePath: "Songs/6.mp3",
        coverPath: "Cover Images/6.png",
    },
    {
        songName: "Headlights",
        filePath: "Songs/7.mp3",
        coverPath: "Cover Images/7.png",
    },
    {
        songName: "Paradise",
        filePath: "Songs/8.mp3",
        coverPath: "Cover Images/8.jpg",
    },
    {
        songName: "I Don't Wanna Go",
        filePath: "Songs/9.mp3",
        coverPath: "Cover Images/9.png",
    },
    {
        songName: "Play",
        filePath: "Songs/10.mp3",
        coverPath: "Cover Images/10.jpg",
    },
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    } 
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime =
        (myProgressBar.value * audioElement.duration) / 100;
});

Array.from(document.getElementsByClassName("songItem")).forEach(
    (element) => {
        element.addEventListener("click", (e) => {
            songIndex = parseInt(e.target.id);
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove("fa-play-circle");
            masterPlay.classList.add("fa-pause-circle");
        });
    }
);

document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } 
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } 
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
});
