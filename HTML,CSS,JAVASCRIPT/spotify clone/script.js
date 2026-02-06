// console.log("HI")
let currentsong = new Audio()
let songs;
let currfolder;

async function getsongs(folder) {
    currfolder = folder;
    let a = await fetch(`/${folder}/`)
    let response = await a.text();
    // console.log(response)
    let div = document.createElement('div')
    div.innerHTML = response
    let as = div.getElementsByTagName("a")
    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${currfolder}/`)[1])
            // .split("/songs/")[1]
        }

    }

    let songul = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    songul.innerHTML = ""
    //   console.log(songs)
    for (let song = 0; song < songs.length; song++) {
        const element = songs[song];

        songul.innerHTML = songul.innerHTML + `<li> 
         
    <img class="invert" src="img/music.svg" alt="music"> 
    <div class="info">
      <div class="songname">
      ${element.replaceAll("%20", " ")}
      </div>
    <div class="songartist">
     Animesh
    </div>
  </div>
  <div class="playnow">
    <span>Play Now</span>
    <img class="invert" src="img/play.svg" alt="play">
  </div>
     </li>`;
    }
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            // console.log(e.querySelector(".info").firstElementChild.innerHTML)
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })


    })
    return songs


}
function secondsToMinutes(seconds) {

    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;


    var result = minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;

    return result;
}


const playMusic = (track, pause = false) => {
    currentsong.src = `/${currfolder}/` + track
    if (!pause) {
        currentsong.play()
        play.src = "img/pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

async function displayalbums() {
    let a = await fetch(`/songs/`)
    let response = await a.text();
    // console.log(response)
    let div = document.createElement('div')
    div.innerHTML = response
    let anchors = div.getElementsByTagName("a")
    let cardContainer = document.querySelector(".cardContainer")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];

        if (e.href.includes("/songs") && e.href.split("/").slice(-1) != ".DS_Store"&& !e.href.includes(".htaccess")) {
            let folder = (e.href.split("/").slice(-2)[0])
            let a = await fetch(`/songs/${folder}/info.json`)

            let response = await a.json();
            console.log(response);

            cardContainer.innerHTML = cardContainer.innerHTML + `
         <div  data-folder=${folder}  class="card">
        <div  class="play">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
                <circle cx="24" cy="24" r="24" fill="green"/>
                <path d="M32.8354 23.4988C33.4848 23.8987 33.4848 25.1013 32.8354 25.5012L20.5422 33.7678C19.8928 34.1677 19.0625 33.6664 19.0625 32.7666L19.0625 16.2334C19.0625 15.3336 19.8928 14.8323 20.5422 15.2322L32.8354 23.4988Z" fill="black"/>
            </svg>
          
        </div>
        <img src="/songs/${folder}/cover.jpeg" alt="sleep">
        <h3>${response.title}</h2>
        <p>${response.description}</p>
    </div>`
        }
    }
    Array.from(document.getElementsByClassName("card")).forEach((e) => {
        e.addEventListener("click", async item => {
            await getsongs(`songs/${item.currentTarget.dataset.folder}`)
            playMusic(songs[0])





        }
        )
    })



}



async function main() {

    // #display all the albums
    displayalbums();


    // /songs/animesh/
    await getsongs("songs/animesh")
    playMusic(songs[0], true)
    // console.log(songs)

    play.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play()
            play.src = "img/pause.svg"
        }

        else {
            currentsong.pause()
            play.src = "img/play.svg"

        }
    })

    currentsong.addEventListener("timeupdate", () => {
        // console.log(currentsong.currentTime,currentsong.duration)
        document.querySelector(".songtime").innerHTML = `${secondsToMinutes(Math.floor(currentsong.currentTime))} / ${secondsToMinutes(Math.floor(currentsong.duration))}`
        document.querySelector(".circle").style.left = ((currentsong.currentTime / currentsong.duration) * 100) - 0.5 + "%"

    })
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / (e.target.getBoundingClientRect().width) * 100) - 0.5
        document.querySelector(".circle").style.left = percent + "%"
        currentsong.currentTime = ((percent + 0.5) * currentsong.duration) / 100
    }
    )
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120" + "%"
    })
    previous.addEventListener("click", () => {
        console.log("previous clicked")
        let index = songs.indexOf(currentsong.src.split("/").slice(5)[0])
        // console.log(index)
        if ((index - 1) >= 0) { // { console.log(songs[index-1])
            playMusic(songs[index - 1])
        }






    })
    next.addEventListener("click", () => {
        console.log("next clicked")
        // console.log(songs);
        // console.log(currentsong.src)
        // console.log(currentsong.src.split("/"))
        // console.log(currentsong.src.split("/").slice(5)[0])
        let index = songs.indexOf(currentsong.src.split("/").slice(5)[0]);
        //  console.log(songs,index)
        //    console.log(length)
        let d = songs.length


        if ((index + 1) < d) {// {console.log(songs[index+1])
            playMusic(songs[index + 1])
        }

    })


    // document.querySelector(".volume>img").addEventListener("click",(e)=>
    // {if(e.target.src=="volume-up.svg")
    // {
    //     e.target.src=e.target.src.replace("volume-up.svg","mute.svg")
    //     currentsong.volume=0;

    // }
    // else
    // {e.target.src=e.target.src.replace("mute.svg","volume-up.svg")
    //     currentsong.volume=0.1;
    // }

    // })
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        // console.log("Setting volume to", e.target.value, "/ 100")
        currentsong.volume = parseInt(e.target.value) / 100
        if (currentsong.volume >0){
            document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("img/mute.svg", "img/volume-up.svg")
        }
    })

    
    document.querySelector(".volume>img").addEventListener("click", e=>{ 
        if(e.target.src.includes("img/volume-up.svg")){
            e.target.src = e.target.src.replace("img/volume-up.svg", "img/mute.svg")
            currentsong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else{
            e.target.src = e.target.src.replace("img/mute.svg", "img/volume-up.svg")
            currentsong.volume = .10;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
        }

    })






}























main()

