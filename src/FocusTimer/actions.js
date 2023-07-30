import state from './state.js';
import * as timer from './timer.js';
import * as el from './elements.js';

export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running');

  timer.countdown();
}

export function reset(){
  state.isRunning = false;
  document.documentElement.classList.remove('running');
  timer.updateDisplay();
}

export function addMinutes(){
  let minutes = Number(el.minutes.textContent);
  minutes = minutes + 5;

  if(minutes > 60){
    minutes = 60;
  }

  timer.updateDisplay(minutes, 0);
}

export function subMinutes(){
  let minutes = Number(el.minutes.textContent);
  minutes = minutes - 5;

  if(minutes < 0){
    minutes = 0;
  }

  timer.updateDisplay(minutes, 0);
}