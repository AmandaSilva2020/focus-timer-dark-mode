import * as el from './elements.js';
import * as actions from './actions.js';
import * as sounds from './sounds.js';

export function registerSoundControls(){
  el.soundControls.addEventListener('click', (event) => {
    actions.muteAllMusics();
    const children = el.soundControls.children;
    const musicToPlay = event.target.dataset.action;
  
    const bntPressed = event.target;
    const bntActive = document.getElementById(`${bntPressed.id}`);
   
    for(let i=0; i < children.length; i++){
      if(bntActive.id === children[i].id ){
        children[i].classList.toggle('playing');
        actions[musicToPlay](); 
      }else{
        children[i].classList.remove('playing');
      }
    }
  })
}

export function volumeControl(){
  el.soundControls.addEventListener('click', (event) => {
    const musicSelected = event.target.dataset.action;
    const volumeToControl = musicSelected.slice(4).toLowerCase().concat('', 'Audio');
    
    sounds[volumeToControl].volume = 0.5;

    // console.log(sounds[volumeToControl].volume);


    

  })
}
