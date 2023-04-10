

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';






const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);

const TIME_KEY_CURRENT = 'videoplayer-current-time';    

timeToSet()

function timeToUpdate({ seconds }) {
    localStorage.setItem(TIME_KEY_CURRENT, seconds);
}
    
function timeToSet() {
    const currentTime = localStorage.getItem(TIME_KEY_CURRENT);

    if (currentTime) {
        player.setCurrentTime(currentTime); 
    }
}
    

player.on('timeupdate', throttle(timeToUpdate, 1000));