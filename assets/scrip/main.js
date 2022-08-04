var audio = document.getElementById('audio')
var playing = document.querySelector('.progress_playing')

var playertitle_author = document.querySelector('.playing-info_title a')
var playertitle_name = document.querySelector('.playing-info_title span')
var imgplayer = document.querySelector('.playing-info_img img')
var TextTotalTime = document.querySelector('.total-time span')
var playbtn = document.getElementById('play-btn')
const rangePlayer = document.getElementById('range-player')
const timeupdate = document.querySelector('.timeline_time span')
// var volume = document.querySelector('#range-volume')


var playlist_playbtns = document.querySelectorAll('.play-list-item_status-btn i')


// volume.value = 100;
// volume.oninput = function(){
//    volume.style.background = "linear-gradient(90deg,#f50 " + volume.value +"%" +",#ccc " + volume.value +"%";
//    audio.volume = volume.value/100

// }


rangePlayer.oninput = function (){
    var percentValue = rangePlayer.value;
    var totaltime = audio.duration;
    var second = percentValue*totaltime /100;
    audio.currentTime = second;
}


function formatTime(sec_num) {
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - hours * 3600) / 60);
    let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);

    hours = hours < 10 ? (hours > 0 ? '0' + hours : 0) : hours;

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return (hours !== 0 ? hours + ':' : '') + minutes + ':' + seconds;
}


audio.onloadeddata = function(){
    TextTotalTime.textContent = formatTime(audio.duration)
    rangePlayer.value = 0;

    


}


audio.ontimeupdate = function (){
    
    var totaltime = audio.duration
    var percent = audio.currentTime/totaltime *100
    rangePlayer.value = percent
    rangePlayer.style.background = "linear-gradient(90deg,#f50 " + percent +"%" +",#ccc " + percent +"%";
    timeupdate.textContent = formatTime(audio.currentTime)
}

audio.onended = function (){
    playbtn.classList.remove('fa-pause')
    playbtn.classList.add('fa-play')
    Next();
    
}




function Repeat(){
    var repeatbtn = document.querySelectorAll('.player-control_btn-group button')[4]
    if(audio.loop == false){
        repeatbtn.classList.add('color-f50')
        audio.loop = true
    }
    else{
        repeatbtn.classList.remove('color-f50')
        audio.loop = false;
    }
}

function shuffle(){
    var shufflebtn = document.querySelectorAll('.player-control_btn-group button')[3]

    if(shufflebtn.className.includes('color-f50') == false){
        shufflebtn.classList.add('color-f50')   
        return true;     
    }
    else{
        shufflebtn.classList.remove('color-f50')
        return false;
    }
}

function MuteAudio(){
    var mutebtn = document.querySelector('.player-control_volume-btn i')
    
    if(audio.muted == false){
        audio.muted = true;
        mutebtn.className = "fa-solid fa-volume-xmark";
        
    }
    else{
        audio.muted = false;
        mutebtn.className = "fa-solid fa-volume-high"
    }
}

var indexSong = 0;
const songs = [
    {
        name: 'JustaTee x Binz',
        singer: 'Cơn Mưa Cuối',
        source_audio: 'Cơn Mưa Cuối  JustaTee x Binz.mp3',
        image: 'artworks-000191567152-6ogpm0-t500x500.jpg'

    },

    {
        name: 'Có Hẹn Với Thanh Xuân',
        singer: 'Monstar',
        source_audio: 'Có Hẹn Với Thanh Xuân (Lofi Ver.) - Monstar x Freak D.mp3',
        image: 'artworks-268DzyD0TKonqqou-TbjvCg-t500x500.jpg'

    },

    {
        name: 'Phố Đã Lên Đèn',
        singer: 'Huyền Tâm Môn',
        source_audio: 'Phố Đã Lên Đèn Lofi Ver  Huyền Tâm Môn x Freak D.mp3',
        image: 'artworks-ZiZ39u9wsG5FDzD6-9uNOuA-t500x500.jpg'

    },

    {
        name: 'Walk Thru Fire',
        singer: 'Meron Ryan',
        source_audio: 'Walk Thru Fire Lyrics ft Meron Ryan.mp3',
        image: 'artworks-000405464955-n4ge52-t500x500.jpg'

    },

    {
        name: 'Title',
        singer: 'Meghan Trainor',
        source_audio: 'Title  Meghan Trainor Lyrics  Vietsub  TikTok .mp3',
        image: 'artworks-000458864706-ddcep5-t500x500.jpg'

    },
    {
        name: 'TAEIL (태일) - Starlight (Twenty Five Twenty One 스물다섯 스물하나 OST Part 1)',
        singer: 'L2ShareOST42',
        source_audio: 'Starlight  Official Music Video.mp3',
        image: 'artworks-TeICxOAJkwB1gokt-WrF38Q-t500x500.jpg'

    },
    {
        name: '2AM',
        singer: 'JustaTee feat Big Daddy',
        source_audio: '2AM  JustaTee  feat Big Daddy Official Audio.mp3',
        image: 'artworks-000125404277-g3oic3-t500x500.jpg'

    }
    ,
    {
        name: 'Độ Đúng Đời',
        singer: 'Thiện Hưng',
        source_audio: 'y2mate.com - ĐỘ ĐÚNG ĐỜI  THIỆN HƯNG ft ĐỘ MIXI  LYRIC AUDIO.mp3',
        image: 'artworks-fBLlkXlVVQy3m9OW-dzt6jg-t500x500.jpg'

    }
    ,
    {
        name: 'MUỘN RỒI MÀ SAO CÒN',
        singer: 'Sơn Tùng MTP',
        source_audio: 'MUỘN RỒI MÀ SAO CÒN  OFFICIAL MUSIC VIDEO.mp3',
        image: 'artworks-ECsNcOayySc3ApMa-P7jm8g-t500x500.jpg'

    }

    ,
    {
        name: 'Người từng thương',
        singer: 'NHA',
        source_audio: 'Người từng thương + Bắt đầu là điểm dừng - Cover Nha.mp3',
        image: 'artworks-000147758756-bmnnid-t500x500.jpg'

    }
    ,
    {
        name: 'FOREVER LOVE',
        singer: 'viet underground',
        source_audio: 'FOREVER LOVE- LK, Binz,Đen, Big Daddy, Yanbi, Karik, Andree , Dương Trần Nghĩa.mp3',
        image: 'artworks-uuM7vrcFep49m56L-Hv2CAg-t500x500.jpg'

    }
    ,
    {
        name: 'Không Bằng',
        singer: 'RIN Music',
        source_audio: 'Nói Với Em Một Lời Trước Khi Xa Rời  Không Bằng RIN Music Remix  Na.mp3',
        image: 'artworks-0yc4nMJVjUOWVfGw-hHVAUw-t500x500.jpg'

    }
    ,
    {
        name: 'Thích Em Hơi Nhiều',
        singer: 'LoFi Version by 1 9 6 7',
        source_audio: 'Thích Em Hơi Nhiều  Wren EvansLo  Fi Version by 1 9 6 7 Audio Lyrics.mp3',
        image: 'artworks-oKwAaDWD59mIqHit-zwH5Jw-t500x500.jpg'

    }

    
]

    audio.src = "./assets/music/" + songs[indexSong].source_audio;
    playertitle_author.textContent = songs[indexSong].singer
    playertitle_name.textContent = songs[indexSong].name
    imgplayer.src = "./assets/img/" + songs[indexSong].image
    



function PlayMusic (){
        
    if(audio.paused == true){
        
        audio.play()
        playbtn.classList.remove('fa-play')
        playbtn.classList.add('fa-pause')
    }
    else{
        audio.pause()
        playbtn.classList.remove('fa-pause')
        playbtn.classList.add('fa-play')
    }
    
    
    
}


function Next (){
    if(indexSong < songs.length - 1){
        
        
        
        indexSong++;
        audio.src = "./assets/music/" + songs[indexSong].source_audio;
        playertitle_author.textContent = songs[indexSong].singer
        playertitle_name.textContent = songs[indexSong].name
        imgplayer.src = "./assets/img/" + songs[indexSong].image
        audio.play();

       
    }
}

function Back(){

    if(indexSong > 0){        
        indexSong--;
        audio.src = "./assets/music/" + songs[indexSong].source_audio;
        playertitle_author.textContent = songs[indexSong].singer
        playertitle_name.textContent = songs[indexSong].name
        imgplayer.src = "./assets/img/" + songs[indexSong].image
        audio.play();
        
    }
}




var playlistbtn = document.getElementById('play-list-btn');
var playlistBlock = document.querySelector('.play-list');

playlistbtn.onclick = function(){
    

    if(playlistBlock.className.includes('open') == true){
        playlistBlock.classList.remove('open')
        playlistbtn.classList.remove('color-f50')

    }
    else{
        playlistbtn.classList.add('color-f50')
        playlistBlock.classList.add('open')

    }
}


var closePlaylistButton = document.querySelector('.play-list-header_close');
closePlaylistButton.onclick = function (){
    // playlistBlock.style.display = 'none'
    playlistbtn.classList.remove('color-f50')
    playlistBlock.classList.remove('open')


}




LoadMusic = function(nameSong, Singer, urlImg , urlAudio){
    audio.src = "./assets/music/" + urlAudio;
    playertitle_author.textContent = Singer;
    playertitle_name.textContent = nameSong
    imgplayer.src = "./assets/img/" +  urlImg
}


    const playlis_modify = document.querySelectorAll('.play-list-item_status-btn i')


    Modify_Playlist_Playbtn = function() {

        for(var i = 0 ; i < playlis_modify.length ; i++){
            playlis_modify[i].classList.remove('fa-pause')
            playlis_modify[i].classList.add('fa-play')

        }
    }


class PlayerMusic {

    constructor(){
        this.player_volume.value = 100;
    }

    player_playbtn = document.getElementById('play-btn');
    player_backbtn = document.querySelectorAll('.player-control_btn-group button')[0];
    player_nextbtn = document.querySelectorAll('.player-control_btn-group button')[2];
    player_sufferbtn = document.querySelectorAll('.player-control_btn-group button')[3];
    player_repeatbtn = document.querySelectorAll('.player-control_btn-group button')[4];
    
    player_currentTime = document.querySelector('.timeline_time span');
    player_totalTime = document.querySelector('.total-time span');
    plaeyr_range = document.getElementById('range-player');

    
    
    player_img = document.querySelector('.playing-info_img img');
    player_songName = document.querySelector('.playing-info_title a');
    player_singerName = document.querySelector('.playing-info_title span');
    player_audio = document.getElementById('audio')


    player_volume = document.querySelector('#range-volume');





    LoadMusic(nameSong, Singer, urlImg , urlAudio){
        this.player_audio.src = "./assets/music/" + urlAudio;
        this.player_singerName.textContent = Singer;
        this.player_songName.textContent = nameSong
        this.player_img.src = "./assets/img/" +  urlImg
    }

    
    NextMusic(){
        if(indexSong < songs.length -1 ){
            indexSong -- ;
            
        }
    }

    BackMusic(){
       if(indexSong > 0 ){
            indexSong--;
       }
    }


   
    ChangeVolume(){
        this.player_volume.style.background = "linear-gradient(90deg,#f50 " + this.player_volume.value +"%" +",#ccc " + this.player_volume.value +"%";
        this.player_audio.volume = this.player_volume.value/100
    }






}   


var player = new PlayerMusic();
player.player_volume.oninput = function(){
    player.ChangeVolume();
}
    


