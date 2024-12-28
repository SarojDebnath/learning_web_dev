console.log("JS script")
async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/83Spotify/songs/Lakshya/");
    let response = await a.text();
    console.log(response);
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
async function main() {
    //get list of all songs
    let songs = await getSongs()
    console.log(songs)
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
}


main()