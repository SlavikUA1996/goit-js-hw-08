

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';






const iframe = document.querySelector('#vimeo-player');
    const player = new Vimeo.Player(iframe);

const TIME_KEY = 'current-time-video';    

timeToSet();

function timeUpdate({second}) {
    localStorage.setItem(TIME_KEY, second);
    
    if (currentTime) {
        player.setCurrentTime(currentTime); 
    }
}
player.on('timeupdate', throttle(timeUpdate, 1000))