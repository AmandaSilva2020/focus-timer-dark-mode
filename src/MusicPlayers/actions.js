import * as sounds from './sounds.js';

export function playForest(){
  const forest = document.getElementById('forest');
  if(forest.classList.contains('playing')){
    sounds.forestAudio.play();
    return
  }
  sounds.forestAudio.pause();
}

export function playRain(){
  if(rain.classList.contains('playing')){
    sounds.rainAudio.play();
    return
  }
  sounds.rainAudio.pause();
}
export function playCoffe(){
  if(coffe.classList.contains('playing')){
    sounds.coffeAudio.play();
    return
  }
  sounds.coffeAudio.pause();
}
export function playFireplace(){
  if(fireplace.classList.contains('playing')){
    sounds.fireplaceAudio.play();
    return
  }
  sounds.fireplaceAudio.pause();
}

export function muteAllMusics(){
  sounds.forestAudio.pause();
  sounds.rainAudio.pause();
  sounds.coffeAudio.pause();
  sounds.fireplaceAudio.pause();
}