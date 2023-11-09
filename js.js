let music =  new Howl({
    src: ['nn.wav'],
    volume: 0.5,
  });

const playboton = document.getElementById('playButtom');
const stopboton = document.getElementById('stopButtom');
const pausaboton = document.getElementById('pauseButtom');
const volumenmas = document.getElementById('volUpButtom');
const volDownButtom = document.getElementById('playButtom');

playboton.addEventListener('click' , function(){
    music.play();
})

pausaboton.addEventListener('click' , function(){
    music.pause();
})

stopboton.addEventListener('click' , function(){
    music.stop();
})

volumenmas.addEventListener('click' , function(){

    let volume = music.volume();

    if (volume < 1 ){
        volume += 0.1;
    }
})

volDownButtom.addEventListener('click' , function(){

    let volume = music.volume();

    if (volume > 0 ){
        volume -= 0.1;
    }
})