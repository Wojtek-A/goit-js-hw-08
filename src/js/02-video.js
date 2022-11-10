const iFrame = document.querySelector('iframe');
const player = new Vimeo.Player(iFrame);
// const throttle = require('lodash.throttle');

const savedTime = time => {
  localStorage.setItem('videoplayer-current-time', time.seconds);
};

player.on('timeupdate', _.throttle(savedTime, 1000));

const timeStorage = parseInt(localStorage.getItem('videoplayer-current-time'));

player
  .setCurrentTime(timeStorage)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
