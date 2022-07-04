import videojs from "video.js";
// import './playToggle.js';
// import './timePlay.js';
// import './progress/index.js';
// import './volume/index.js';
// import './fullScreenToggle.js';

const Component = videojs.getComponent("Component");

class MyControlBar extends Component {
  createEl() {
    return super.createEl("div", {
      className: "vjs-my__control-bar",
    });
  }
}

MyControlBar.prototype.options_ = {
  children: [
    // "componentPlayToggle",
    // "timePlay",
    // "Progress",
    // "volumeComponent",
    // "FullscreenToggle",

    'playToggle',
    // 'volumePanel',
    'currentTimeDisplay',
    'timeDivider',
    'durationDisplay',
    'progressControl',
    'liveDisplay',
    'seekToLive',
    'remainingTimeDisplay',
    'customControlSpacer',
    // 'playbackRateMenuButton',
    'chaptersButton',
    'descriptionsButton',
    'subsCapsButton',
    'audioTrackButton',
    // 'fullscreenToggle',
    // 'pictureInPictureToggle'
  ],
};

Component.registerComponent("MyControlBar", MyControlBar);
export default MyControlBar;
