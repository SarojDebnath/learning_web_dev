console.log("JS script")
let currentsong=new Audio();
let songs;
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

async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/songs/Lakshya/");
    let response = await a.text();
    //console.log(response);
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith("mp3")) {
            songs.push(element.href.split("/Lakshya/")[1])
        }
    }
    return songs
}
const playMusic = (track, pause=false) => {
    //let audio = new Audio("/songs/Lakshya/" + track)
    currentsong.src="/songs/Lakshya/" + track
    if (!pause){
        currentsong.play()
        play.src="img/pause.svg"
    }
    
    document.querySelector(".songinfo").innerHTML=decodeURI(track)
    document.querySelector(".songtime").innerHTML="00:00/00:00"
}

async function main() {
    //get list of all songs
    songs = await getSongs()
    playMusic(songs[0],true)
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
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
    currentsong.addEventListener("timeupdate",()=>{
        document.querySelector(".songtime").innerHTML=`${secondsToMinutesSeconds(currentsong.currentTime)}/${secondsToMinutesSeconds(currentsong.duration)}`
        document.querySelector(".circle").style.left=(currentsong.currentTime/currentsong.duration)*100 + "%"
    })
    //Listen for the seekbar
    document.querySelector(".seekbar").addEventListener("click",e=>{
        let percent=(e.offsetX/e.target.getBoundingClientRect().width)*100
        document.querySelector(".circle").style.left =percent + "%";
        currentsong.currentTime=(currentsong.duration)*percent/100
        
    })
    //listen for hamburger
    document.querySelector(".hamburgerContainer").addEventListener("click",()=>{
        document.querySelector(".left").style.left="0"
    })
    
    //listen for close button
    document.querySelector(".close").addEventListener("click",()=>{
        document.querySelector(".left").style.left="-120%"
    })
    //Listen to next and previous
    previous.addEventListener("click",()=>{
        currentsong.pause()
        let index=songs.indexOf(currentsong.src.split("/").slice(-1)[0])
        if (index-1>=0) {
            playMusic(songs[index-1])
        }
    })
    next.addEventListener("click",()=>{
        currentsong.pause()
        let index=songs.indexOf(currentsong.src.split("/").slice(-1)[0])
        if (index+1<songs.length) {
            playMusic(songs[index+1])
        }
        
    })
    //Listener for volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change",(e)=>{
        currentsong.volume=parseInt(e.target.value)/100
    })
    
}

main()