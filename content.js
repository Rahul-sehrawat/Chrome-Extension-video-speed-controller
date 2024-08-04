function setSpeed(speed) {
    const video = document.querySelector('video');
    if (video) {
      video.playbackRate = speed;
    }
  }
  
  setSpeed(1.5);
  
  chrome.runtime.onMessage.addListener((message) => {
    if (message.action === 'setSpeed') {
      setSpeed(message.speed);
    }
  });
  