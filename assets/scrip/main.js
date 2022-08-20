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
var songs = [

    {
        name: '3107',
        singer: 'W/n ft Duongg x Nâu',
        source_audio: '3107  Wn  Official Video  ft Nâu Duongg.mp3',
        image: '3107.jpg'

    }
    ,

    {
        name: 'Lost Sky',
        singer: 'NCS',
        source_audio: 'y2mate.com - Lost Sky  Dreams pt II feat Sara Skinner NCS Release.mp3.webm',
        image: 'sddefault.jpg'

    }
    ,

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





class PlayerMusic {

    

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

    constructor(){
        this.player_volume.value = 100;
        this.player_range.value = 0;
    }


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
        player.player_totalTime.textContent = formatTime(player.player_audio.duration);
        
    }
    player.player_range.oninput = function(){
        player.ChangeTimePlayer();
    }

 

    player. player_playbtn.onclick = function(){
        if(player.player_audio.paused == true){
            player.PlayMusic();
            OnPauseIcon(indexSong)
        }
        else{
            player.PauseMusic();
            // OffPauseIcon();
        }
    }

    player.player_audio.onplay = function(){
        player.player_playbtn_icon.classList.remove('fa-play')
        player.player_playbtn_icon.classList.add('fa-pause')

        OffPauseIcon();
        OnPauseIcon(indexSong)
    }

    // player.player_audio.addEventListener('play', function(){
    //     player.player_playbtn_icon.classList.remove('fa-play')
    //     player.player_playbtn_icon.classList.add('fa-pause')

    //     OffPauseIcon();
    //     OnPauseIcon(indexSong)
    // })


    player.player_audio.onpause = () =>{
        player.player_playbtn_icon.classList.remove('fa-pause')
        player.player_playbtn_icon.classList.add('fa-play')
        OffPauseIcon();
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


   

   class Slider {

        sliders = document.querySelectorAll('.slider')

        listMoreBtns(index){
            return this.sliders[index].querySelectorAll('.modul-left_morebtn');
        }

        listModul(index){
            return this.sliders[index].querySelectorAll('.modul-left_item')
        }

        tunrOffAllMoreOption(indexSlider){

            for (let i = 0; i < this.listModul(indexSlider).length; i++) {
                var modul = this.listModul(indexSlider)[i]
                var background = modul.querySelector('.modul-left_backgroud')
                var groupBtn = modul.querySelector('.modul-left_option-group')
                var addOption = modul.querySelector('.modul-left_option-more')

                if(background.className.includes('open')){
                    background.classList.remove('open')
                    groupBtn.classList.remove('open')
                    addOption.classList.remove('open')
                    break;
                }
            }
        }

        nextSlider(index){
            var leftButton = this.sliders[index].parentElement.parentElement.querySelector('.left-btn')
            this.sliders[index].classList.add('slide-left')
            leftButton.classList.add('open')
        }

        backSlider(index){
            var leftButton = this.sliders[index].parentElement.parentElement.querySelector('.left-btn')
            this.sliders[index].classList.remove('slide-left')
            leftButton.classList.remove('open')
        }


   }

   var slider1 = new Slider;


   // Next And Back Slide
   var slider_rightbtns = document.querySelectorAll('.right-btn')
   var slider_leftbtns =document.querySelectorAll('.left-btn')
   for (let index = 0; index < slider_rightbtns.length; index++) {

        slider_rightbtns[index].onclick = function(){
            slider1.nextSlider(index)
            slider1.tunrOffAllMoreOption(index)
        }

        slider_leftbtns[index].onclick = function(){
            slider1.backSlider(index)
            slider1.tunrOffAllMoreOption(index)

        }
       
        slider_rightbtns[index].onmouseover = function(){
            var slider = slider_rightbtns[index].parentElement.querySelector('.slider')
            slider.classList.add('vibrate')

       }
       
   }

   // Vibrate Slide
   for (let index = 0; index < slider_rightbtns.length; index++) {
       
       slider_rightbtns[index].onmouseout = function(){
           var slider = slider_rightbtns[index].parentElement.querySelector('.slider')
           slider.classList.remove('vibrate')
           

       }

       
   }

   // Search
   var searchInput = document.querySelector('.search-input')
   var searchResult = document.querySelector('.search-result-item')

   searchInput.oninput = function(){
   
       var searchFor = searchResult.querySelectorAll('span')[1]
       searchFor.textContent = "Search for " + '" '+ searchInput.value + ' "' 
       
   }


   // Open MoreOption Of Slider 1
    var mudulMoreBtns = document.querySelectorAll('.modul-left_morebtn')
  for (let index = 0; index < slider1.listMoreBtns(0).length; index++) {
        slider1.listMoreBtns(0)[index].onclick = function(){
           var modulBackground = slider1.sliders[0].querySelectorAll('.modul-left_backgroud')
           var optionGroup = slider1.listMoreBtns(0)[index].parentElement;
           var moreOption = slider1.listMoreBtns(0)[index].parentElement.querySelector('.modul-left_option-more')
           
           if(moreOption.className.includes('open') == true){
             
            slider1.tunrOffAllMoreOption(0)

           }
           else{
            slider1.tunrOffAllMoreOption(0)
            optionGroup.classList.add('open')
            modulBackground[index].classList.add('open')
            moreOption.classList.add('open')
           }
       }
   
  }


  for (let index = 0; index < slider1.listMoreBtns(1).length; index++) {
    slider1.listMoreBtns(1)[index].onclick = function(){
       var modulBackground = slider1.sliders[1].querySelectorAll('.modul-left_backgroud')
       var optionGroup = slider1.listMoreBtns(1)[index].parentElement;
       var moreOption = slider1.listMoreBtns(1)[index].parentElement.querySelector('.modul-left_option-more')
       
       if(moreOption.className.includes('open') == true){
         
        slider1.tunrOffAllMoreOption(1)

       }
       else{
        slider1.tunrOffAllMoreOption(1)
        optionGroup.classList.add('open')
        modulBackground[index].classList.add('open')
        moreOption.classList.add('open')
       }
   }

}

for (let index = 0; index < slider1.listMoreBtns(2).length; index++) {
    slider1.listMoreBtns(2)[index].onclick = function(){
       var modulBackground = slider1.sliders[2].querySelectorAll('.modul-left_backgroud')
       var optionGroup = slider1.listMoreBtns(2)[index].parentElement;
       var moreOption = slider1.listMoreBtns(2)[index].parentElement.querySelector('.modul-left_option-more')
       
       if(moreOption.className.includes('open') == true){
         
        slider1.tunrOffAllMoreOption(2)

       }
       else{
        slider1.tunrOffAllMoreOption(2)
        optionGroup.classList.add('open')
        modulBackground[index].classList.add('open')
        moreOption.classList.add('open')
       }
   }

}

for (let index = 0; index < slider1.listMoreBtns(3).length; index++) {
    slider1.listMoreBtns(3)[index].onclick = function(){
       var modulBackground = slider1.sliders[3].querySelectorAll('.modul-left_backgroud')
       var optionGroup = slider1.listMoreBtns(3)[index].parentElement;
       var moreOption = slider1.listMoreBtns(3)[index].parentElement.querySelector('.modul-left_option-more')
       
       if(moreOption.className.includes('open') == true){
         
        slider1.tunrOffAllMoreOption(3)

       }
       else{
        slider1.tunrOffAllMoreOption(3)
        optionGroup.classList.add('open')
        modulBackground[index].classList.add('open')
        moreOption.classList.add('open')
       }
   }

}


const songs2 = [
    
    {
        name: 'Chẳng Thể Tìm Được Em - Lofi',
        singer: 'PhucXp ft. Freak D',
        source_audio: 'lofi/Chẳng Thể Tìm Được Em  PhucXp ft Freak D  Official Audio.mp3',
        image: 'artworks-yukyFaBjTlbbBrn6-yjfdgg-t500x500.jpg'

    }
    ,

    {
        name: 'Có Chắc Chia Tay Là Sẽ Quên - Lofi',
        singer: 'Nguyễn Đăng Nguyên x Freak D',
        source_audio: 'lofi/Có Chắc Chia Tay Là Sẽ Quên Lofi Ver  Nguyễn Đăng Nguyên x Freak D.mp3',
        image: 'artworks-Z5c1Cn8wXVhb4uzB-VNLC1w-t500x500.jpg'

    }
    ,

    {
        name: 'Anh Đâu Đấy (Lofi Ver.)',
        singer: 'Reddy x Freak D',
        source_audio: 'lofi/Anh Đâu Đấy Lofi Ver  Reddy x Freak D.mp3',
        image: 'artworks-6RbAzjsPzsd4oKWf-nfTxvg-t500x500.jpg'

    }
    ,

    {
        name: 'Gác Lại Âu Lo',
        singer: 'Da LAB x Miu Lê x Freak D',
        source_audio: 'lofi/Gác Lại Âu Lo  Da LAB x Miu Lê x Freak D.mp3',
        image: 'tải xuống.jfif'

    }
    ,

    {
        name: 'Ai Đưa Em Về (Lofi Ver.)',
        singer: 'Tia x Lê Thiện Hiếu x Freak D',
        source_audio: 'lofi/Ai Đưa Em Về Lofi Ver  Tia x Lê Thiện Hiếu x Freak D.mp3',
        image: 'artworks-000571150037-iq629h-t500x500.jpg'

    }
    ,

    {
        name: 'Bỏ Em Vào Balo (Lofi Ver.)',
        singer: 'Tân Trần x Freak D',
        source_audio: 'lofi/Bỏ Em Vào Balo Lofi Ver  Tân Trần x Freak D.mp3',
        image: 'artworks-W1nAMF4Aoyvyokgw-4nbKAw-t500x500.jpg'

    }
    ,

    {
        name: 'Răng Khôn (Lofi Ver.)',
        singer: 'Phí Phương Anh ft. Rin9 x Freak D',
        source_audio: 'lofi/Răng Khôn Lofi Ver  Phí Phương Anh ft Rin9 x Freak D.mp3',
        image: 'artworks-Ht6FrXh1pQjQGBXC-9isV4Q-t500x500.jpg'

    }
    ,

    {
        name: 'Tình Yêu Màu Hồng Lofi Ver',
        singer: 'Hồ Văn Quý x Xám x Freak D',
        source_audio: 'lofi/Tình Yêu Màu Hồng Lofi Ver  Hồ Văn Quý x Xám x Freak D.mp3',
        image: 'artworks-l1pQjgvmEa60f4hO-3F0FoQ-t500x500.jpg'

    }
    ,
    
]


    classListItem = function(urlIMG, Name, Singer,urlAudio, index){
        var Item = document.createElement('div');
        Item.className = 'play-list-item row relative';
            var drag = document.createElement('div');
            drag.className = 'play-list-item_drag-btn font-size-12';
                var drag_icon = document.createElement('i');
                drag_icon.className = 'fa-solid fa-bars'
            drag.appendChild(drag_icon);

            var item_img = document.createElement('div');
            item_img.className = 'play-list-item_img relative';
                var img = document.createElement('img');
                img.src = './assets/img/' + urlIMG;

                var statusbtn = document.createElement('div');
                statusbtn.className = 'play-list-item_status-btn';
                    var iconstatus = document.createElement('i');
                    iconstatus.className = 'fa-solid fa-play';
                statusbtn.appendChild(iconstatus);

            item_img.appendChild(img);
            item_img.appendChild(statusbtn);

            var item_info = document.createElement('div');
            item_info.className = 'play-list-item_info col'
                var name = document.createElement('a');
                name.innerText = Name;
                var singer = document.createElement('span');
                singer.innerText = Singer;
            item_info.appendChild(name);
            item_info.appendChild(singer);

            var footer = document.createElement('div');
            footer.className = 'play-list-item_footer relative';
                var totaltime = document.createElement('span');
                totaltime.className = 'play-list-item_total-time';
                totaltime.innerText = '3:52';
                
                var itemgroup = document.createElement('div');
                itemgroup.className = 'play-list-item_group-btn';
                    var heart = document.createElement('button');
                    heart.className = 'font-size-12  color-f50';
                        var heart_icon = document.createElement('i')
                        heart_icon.className = 'fa-solid fa-heart'
                    heart.appendChild(heart_icon)

                    var more = document.createElement('button');
                    more.className = 'font-size-12';
                        var more_icon = document.createElement('i')
                        more_icon.className = 'fa-solid fa-ellipsis'
                    more.appendChild(more_icon)
                itemgroup.appendChild(heart)
                itemgroup.appendChild(more)
            
            footer.appendChild(totaltime)
            footer.appendChild(itemgroup)

        Item.appendChild(drag)
        Item.appendChild(item_img)
        Item.appendChild(item_info)
        Item.appendChild(footer)
        

        statusbtn.addEventListener('click' , function(){
            player.LoadMusic(Name, Singer ,urlIMG , urlAudio);
            indexSong = index;
            player.player_audio.play();
        })

        return Item;

    }




    // Hàm thay đổi playlist bao gồm thay đổi UI và thay đổi dữ liệu songs
    changePlayList = function( songList ){
        songs = []
        for (let i = 0; i < songList.length; i++) {
            songs[i] = songList[i]
        }

        document.querySelector('.play-list-container .col').innerHTML = ''

        for (let i = 0; i < songs2.length; i++) {
        
            var test = classListItem(songs2[i].image ,songs2[i].name,songs2[i].singer, songs2[i].source_audio , i)
            document.querySelector('.play-list-container .col').appendChild(test)
    
        }
        
        indexSong = 0;
        player.LoadMusic(songs[indexSong].name, songs[indexSong].singer , songs[indexSong].image , songs[indexSong].source_audio);
        

    }




    // Phần xử lý event List Music LOFI
    var listMusic_playbtn = document.querySelector('.list-music_playbtn');
    listMusic_playbtn.setAttribute("first" , true)
    var item = document.querySelectorAll('.list-music-item')

    for (let i = 0; i < item.length; i++) {

        item[i].onclick = function(){

            if(listMusic_playbtn.getAttribute('first') == 'true' ){
                changePlayList(songs2);
                listMusic_playbtn.setAttribute('first', false);
                addEventListMusic();
    
            }
            indexSong = i;            
            player.LoadMusic(songs[indexSong].name, songs[indexSong].singer , songs[indexSong].image , songs[indexSong].source_audio);
            player.player_audio.play();
        }
        
    }
   
    // Hàm off hiệu ứng playing (thay đổi màu background) của List Music Lofi
    function OffItemPlaying(){
        for (let i = 0; i < item.length; i++) {
            if(item[i].className.includes('list-music-item--playing')){
                item[i].classList.remove('list-music-item--playing')
            }
            
        }
    }

    // Hàm thêm xử lý sự kiện cho List Music Lofi
    function addEventListMusic(){
        var icon = listMusic_playbtn.querySelector('i')
        player.player_audio.addEventListener('pause', function(){
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
            OffItemPlaying();


        })

        player.player_audio.addEventListener('loadeddata', function(){
            OffItemPlaying();
            item[indexSong].classList.add('list-music-item--playing')
            
        })

        player.player_audio.addEventListener('play', function(){
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
            item[indexSong].classList.add('list-music-item--playing')
        })
    }


    //  Hàm 
    function handlePlayList(){
        
        if(listMusic_playbtn.getAttribute('first') == 'true' ){
            changePlayList(songs2);
            listMusic_playbtn.setAttribute('first', false)
            addEventListMusic()
            player.PlayMusic();

        }
        else{

            if(player.player_audio.paused == true){
                player.player_audio.play();
            }
            else{
                player.player_audio.pause();
            }
        }
    }



    listMusic_playbtn.addEventListener('click', handlePlayList)

    