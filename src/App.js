import React from 'react';

// This imports the functional component from the previous sample.
import VideoJS from './Components/VideoJS'
import videojs from 'video.js';
import "videojs-http-source-selector";

const App = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    plugins: {
      httpSourceSelector:
      {
        default: 'auto',
        ProgressControl: false
      }
    },
    sources: [{
      src: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
      type: "application/x-mpegURL"
    }],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('pause', () => {
      videojs.log('player is pause');
    });

    // player.on('play', () => {
    //   if (player.liveTracker.isTracking()) {
    //     player.liveTracker.seekToLiveEdge();
    //   } else {
    //     player.currentTime(player.duration() + 1000);
    //   }
    // });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </>
  );
}

export default App;
