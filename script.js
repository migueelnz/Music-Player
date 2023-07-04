let musics = [
    {
    title:'Antes',
    artist:'Matuê',
    src:'musics/Maquina-do-Tempo/Antes.mp3'
    },

    {
    title:'Cogulândia',
    artist:'Matuê',
    src:'musics/Maquina-do-Tempo/Cogulândia.mp3'
    },

    {
        title:'Gorilla Roxo',
        artist:'Matuê',
        src:'musics/Maquina-do-Tempo/Gorilla Roxo.mp3'
    },

    {
        title:'Vem Chapar',
        artist:'Matuê',
        src:'musics/Maquina-do-Tempo/Vem Chapar.mp3'
    },

    {
        title:'777-666',
        artist:'Matuê',
        src:'musics/Maquina-do-Tempo/777-666.mp3'
    },

    {
        title:'É Sal',
        artist:'Matuê',
        src:'musics/Maquina-do-Tempo/É Sal.mp3'
    },

    {
        title:'Máquina do Tempo',
        artist:'Matuê',
        src:'musics/Maquina-do-Tempo/Máquina do Tempo.mp3'
    },

];

let music = document.querySelector('audio');
let indexMusic = 0;

let musicDuration = document.querySelector('.end');
let image = document.querySelector('img');
let musicName = document.querySelector('.description h2');
let artistName = document.querySelector('.description i')
let volume_slider = document.querySelector(".volume_slider");

renderMusic(indexMusic);

// Eventos
document.querySelector('.button-play').addEventListener('click', playMusic);

document.querySelector('.button-pause').addEventListener('click', pauseMusic);

music.addEventListener('timeupdate', refreshBar);

document.querySelector('.previous').addEventListener('click', () => {
    indexMusic--;
    if (indexMusic < 0) {
        indexMusic = 16;
    }
    renderMusic(indexMusic);
    playMusic();
});

document.querySelector('.next').addEventListener('click', () => {
    indexMusic++;
    if (indexMusic > 16){
        indexMusic = 0;
    }
    renderMusic(indexMusic);
    playMusic();
});

// Funções
function renderMusic(index){
    music.setAttribute('src', musics[index].src);
    music.addEventListener('loadeddata', () => {
        musicName.textContent = musics[index].title;
        artistName.textContent = musics[index].artist;
        musicDuration.textContent = secondsToMinutes(Math.floor(music.duration));
    });
}

function playMusic(){
    music.play();
    document.querySelector('.button-pause').style.display = 'block';
    document.querySelector('.button-play').style.display = 'none';
}

function pauseMusic(){
    music.pause();
    document.querySelector('.button-pause').style.display = 'none';
    document.querySelector('.button-play').style.display = 'block';
}

function refreshBar(){
    let bar = document.querySelector('progress');
    bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    let elapsedTime = document.querySelector('.start');
    elapsedTime.textContent = secondsToMinutes(Math.floor(music.currentTime));
}

function secondsToMinutes(seconds){
    let minutesField = Math.floor(seconds / 60);
    let secondsField = seconds % 60;
    if (secondsField < 10){
        secondsField = '0' + secondsField;
    }

    return minutesField+':'+secondsField;
}

function setVolume() {
    music.volume = volume_slider.value / 100;
}