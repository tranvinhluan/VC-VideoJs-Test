import videojs from "video.js";
import "./setting-button.js";
import "./next-button.js";


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
    'playToggle',
    "NextButton",
    'currentTimeDisplay',
    'volumePanel',
    'timeDivider',
    'durationDisplay',
    'progressControl',
    'liveDisplay',
    'seekToLive',
    'remainingTimeDisplay',
    'customControlSpacer',
    'playbackRateMenuButton',
    'chaptersButton',
    'descriptionsButton',
    'subsCapsButton',
    'audioTrackButton',
    "SettingButton",
    'pictureInPictureToggle',
    'fullscreenToggle',
  ],
};

Component.registerComponent("MyControlBar", MyControlBar);
export default MyControlBar;
