console.log("JS script")
let currentsong = new Audio();
let songs;
let currfolder;
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs(folder) {
    currfolder = folder
    let a = await fetch(`/songs/${folder}/`);
    let response = await a.text();
    //console.log(response);
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith("mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1])
        }
    }
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    songUL.innerHTML = ""
    for (const song of songs) {
        songUL.innerHTML += `<li>
                            <img class="invert" src="img/music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div>Saroj</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="img/playbarplay.svg" alt="">
                            </div></li>`
    }

    //Attach an event listener to each song
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML)
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })
    return songs
}

const playMusic = (track, pause = false) => {
    //let audio = new Audio("/songs/Lakshya/" + track)
    currentsong.src = `songs/${currfolder}/` + track
    if (!pause) {
        currentsong.play()
        play.src = "img/pause.svg"
    }

    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00/00:00"
}

async function displayAlbums() {
    let a = await fetch(`/songs/`);
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let cardContainer = document.querySelector(".cardContainer")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        if (e.href.includes("/songs")) {
            let folder = e.href.split("/").slice(-2)[0]
            let metadata = await fetch(`/songs/${folder}/info.json`);
            let response = await metadata.json();
            cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder="${folder}" class="card">
                            <div class="play">
                                <img src="img/play.svg" alt="">
                            </div>
                            <img src="/songs/${folder}/cover.jpg" alt="">
                            <h2>${response.title}</h2>
                            <p>${response.description}</p>
                        </div>`
        }
    }

    //Load the playlist when card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            songs = await getSongs(`${item.currentTarget.dataset.folder}`)
            playMusic(songs[0])
        })
    })
}

async function main() {
    //get list of all songs
    await getSongs("Lakshya")
    playMusic(songs[0], true)

    //Display All the albums
    displayAlbums()
    //Attach an event listener to play next and prev
    play.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play()
            play.src = "img/pause.svg"
        }
        else {
            currentsong.pause()
            play.src = "img/playbarplay.svg"
        }
    })

    //Listen for TimeUpdate event
    currentsong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentsong.currentTime)}/${secondsToMinutesSeconds(currentsong.duration)}`
        document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%"
    })
    //Listen for the seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        document.querySelector(".circle").style.left = percent + "%";
        currentsong.currentTime = (currentsong.duration) * percent / 100

    })
    //listen for hamburger
    document.querySelector(".hamburgerContainer").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })

    //listen for close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%"
    })
    //Listen to next and previous
    previous.addEventListener("click", () => {
        currentsong.pause()
        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0])
        if (index - 1 >= 0) {
            playMusic(songs[index - 1])
        }
    })
    next.addEventListener("click", () => {
        currentsong.pause()
        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0])
        if (index + 1 < songs.length) {
            playMusic(songs[index + 1])
        }

    })
    //Listener for volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        currentsong.volume = parseInt(e.target.value) / 100
    })
    //Mute event listener
    document.querySelector(".volume>img").addEventListener("click", e=>{
        console.log(e.target.src)
        if (e.target.src.includes("img/volume.svg")){
            e.target.src="img/mute.svg"
            currentsong.volume=0
            document.querySelector(".range").getElementsByTagName("input")[0].value=0
        }
        else {
            e.target.src="img/volume.svg"
            currentsong.volume=.1
            document.querySelector(".range").getElementsByTagName("input")[0].value=10
        }
    })

}

main()