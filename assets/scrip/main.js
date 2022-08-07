var audio = document.getElementById('audio')
var playing = document.querySelector('.progress_playing')

var playertitle_author = document.querySelector('.playing-info_title a')
var playertitle_name = document.querySelector('.playing-info_title span')
var imgplayer = document.querySelector('.playing-info_img img')
var TextTotalTime = document.querySelector('.total-time span')
var playbtn = document.getElementById('play-btn')
const rangePlayer = document.getElementById('range-player')
const timeupdate = document.querySelector('.timeline_time span')







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
        this.player_range.value = 0;
    }

    player_backbtn = document.querySelectorAll('.player-control_btn-group button')[0];
    player_playbtn = document.querySelectorAll('.player-control_btn-group button')[1];
    player_playbtn_icon = document.getElementById('play-btn')
    player_nextbtn = document.querySelectorAll('.player-control_btn-group button')[2];
    player_sufferbtn = document.querySelectorAll('.player-control_btn-group button')[3];
    player_repeatbtn = document.querySelectorAll('.player-control_btn-group button')[4];
    
    player_currentTime = document.querySelector('.timeline_time span');
    player_totalTime = document.querySelector('.total-time span');
    player_range = document.getElementById('range-player');

    
    
    player_img = document.querySelector('.playing-info_img img');
    player_songName = document.querySelector('.playing-info_title a');
    player_singerName = document.querySelector('.playing-info_title span');
    player_audio = document.getElementById('audio')


    player_volume = document.querySelector('#range-volume');
    player_mutebtn = document.querySelector('.player-control_volume-btn button');




    LoadMusic(nameSong, Singer, urlImg , urlAudio){
        this.player_audio.src = "./assets/music/" + urlAudio;
        this.player_singerName.innerText = Singer;
        this.player_songName.innerText = nameSong
        this.player_img.src = "./assets/img/" +  urlImg 
    }

    PlayMusic (){
    
        audio.play();
        
    }

    PauseMusic(){
        audio.pause();

    }
    
    NextMusic(){
        if(indexSong < songs.length -1 ){
            indexSong ++ ;
            this.LoadMusic(songs[indexSong].name, songs[indexSong].singer , songs[indexSong].image , songs[indexSong].source_audio)
            this.player_audio.play();
        }
    }

    BackMusic(){
       if(indexSong > 0 ){
            indexSong --;
            this.LoadMusic(songs[indexSong].name, songs[indexSong].singer , songs[indexSong].image , songs[indexSong].source_audio)
            this.player_audio.play();
       }
    }

    Repeat(){
        
        if(audio.loop == false){
            this.player_repeatbtn.classList.add('color-f50')
            this.player_audio.loop = true
        }
        else{
            this.player_repeatbtn.classList.remove('color-f50')
            this.player_audio.loop = false;
        }
    }

    ChangeTimePlayer(){
        var percentValue = this.player_range.value;
        var totaltime = this.player_audio.duration;
        var second = percentValue*totaltime /100;
        this.player_audio.currentTime = second;
    }

    UpDateTime(){
        var totaltime = this.player_audio.duration
        var percent = this.player_audio.currentTime/totaltime *100
        this.player_range.value = percent
        this.player_range.style.background = "linear-gradient(90deg,#f50 " + percent +"%" +",#ccc " + percent +"%";
        this.player_currentTime.textContent = formatTime(audio.currentTime)

    }


   
    ChangeVolume(){
        this.player_volume.style.background = "linear-gradient(90deg,#f50 " + this.player_volume.value +"%" +",#ccc " + this.player_volume.value +"%";
        this.player_audio.volume = this.player_volume.value/100
    }

    MuteVolume(){

        var muteicon = this.player_mutebtn.querySelector('i');

        if(this.player_audio.muted == false){
            this.player_audio.muted = true;
            muteicon.className = "fa-solid fa-volume-xmark";
            
        }
        else{
            this.player_audio.muted = false;
            muteicon.className = "fa-solid fa-volume-high"
        }
    }




}   


    var player = new PlayerMusic();
    player.player_volume.oninput = function(){
        player.ChangeVolume();
    }

    player.player_backbtn .onclick = function(){
        player.BackMusic();

    }
    player.player_nextbtn.onclick = function(){
        player.NextMusic();

    }


        
    player.player_audio.ontimeupdate = function(){
        player.UpDateTime();
    }

   

    player.player_audio.onloadeddata = function(){
        player.player_range.value = 0;
        player.player_totalTime.textContent = formatTime(player.player_audio.duration)
        player.player_range.value = 0;
        
    }
    player.player_range.oninput = function(){
        player.ChangeTimePlayer();
    }

    player.player_nextbtn.onclick = function(){
        player.NextMusic();
    }
 

    player. player_playbtn.onclick = function(){
        if(player.player_audio.paused == true){
            player.PlayMusic();
            OnPauseIcon(indexSong)
        }
        else{
            player.PauseMusic();
            OffPauseIcon();
        }
    }

    player.player_audio.onplay = function(){
        player.player_playbtn_icon.classList.remove('fa-play')
        player.player_playbtn_icon.classList.add('fa-pause')

        OffPauseIcon();
        OnPauseIcon(indexSong)
    }
    player.player_audio.onpause = function(){
        player.player_playbtn_icon.classList.remove('fa-pause')
        player.player_playbtn_icon.classList.add('fa-play')
    }

    player.player_repeatbtn.onclick = function(){
        player.Repeat()
    }


    player.player_mutebtn.onclick = function(){
        player.MuteVolume();
    }


    Follow = function(nodeElement){

        var icon = nodeElement.querySelector('i')
        var statusname = nodeElement.querySelector('span')

        icon.classList.remove('fa-user-plus')
        icon.classList.add('fa-user-check')
        nodeElement .classList.add('color-f50')
        nodeElement.classList.add('bordercolor-f50')
        statusname.textContent = 'Following'
    }


    Unfollow = function(nodeElement){
        var icon = nodeElement.querySelector('i')
        var statusname = nodeElement.querySelector('span')

        icon.classList.remove('fa-user-check')
        icon.classList.add('fa-user-plus')
        nodeElement .classList.remove('color-f50')
        nodeElement.classList.remove('bordercolor-f50')
        statusname.textContent = 'Follow'
    }


    var followbtn = document.querySelectorAll('.follow-btn');
    
    for (let i = 0; i < followbtn.length; i++) {
        followbtn[i].onclick = function(){
            var statusName = followbtn[i].querySelector('span');
            
            if(statusName.textContent == 'Follow'){
                Follow(followbtn[i])

            }
            else{
                Unfollow(followbtn[i])
            }
        }
    }



    var playlist_playbtns = document.querySelectorAll('.play-list-item_status-btn')


    OffPauseIcon = function(){
        var playlist_playicons = document.querySelectorAll('.play-list-item_status-btn i')

        for (let index = 0; index < playlist_playicons.length; index++) {
        
            if(playlist_playicons[index].className.includes('fa-pause') == true ){
                playlist_playicons[index].classList.remove('fa-pause')
                playlist_playicons[index].classList.add('fa-play')
            }        
        }
    }


    OnPauseIcon = function( index ){
        var playlist_playicons = document.querySelectorAll('.play-list-item_status-btn i')
        playlist_playicons[index].classList.remove('fa-play')
        playlist_playicons[index].classList.add('fa-pause')
    }
    

    for (let i = 0; i < playlist_playbtns.length; i++) {

        playlist_playbtns[i].onclick = function(){
            OffPauseIcon();
            indexSong = i;

            var icon = playlist_playbtns[i].querySelector('i');
            icon.classList.remove('fa-play')
            icon.classList.add('fa-pause')
            player.LoadMusic(songs[indexSong].name, songs[indexSong].singer , songs[indexSong].image , songs[indexSong].source_audio);
            player.player_audio.play();
        }
        
    }


    var slider_rightbtns = document.querySelectorAll('.right-btn')
    for (let index = 0; index < slider_rightbtns.length; index++) {
        
        slider_rightbtns[index].onmouseover = function(){
            var slider = slider_rightbtns[index].parentElement.querySelector('.slider')
            slider.classList.add('vibrate')

        }

        
    }


    for (let index = 0; index < slider_rightbtns.length; index++) {
        
        slider_rightbtns[index].onmouseout = function(){
            var slider = slider_rightbtns[index].parentElement.querySelector('.slider')
            slider.classList.remove('vibrate')

        }

        
    }