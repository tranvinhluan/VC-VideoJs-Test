import videojs from "video.js";
import setting from '../assets/setting.svg'

var Button = videojs.getComponent("Button");

class SettingButton extends Button {
  constructor(player, options) {
    super(player, options);
  }

  

  createEl() {
    let el = videojs.dom.createEl("div", {
      className: "vjs-my__setting-button",
    });

    // chèn icon:
    el.appendChild(
      videojs.dom.createEl(
        "img",
        {
          className: "vjs-my__image",
        },
        {
          src: setting,
          alt: "https://png.pngtree.com/png-clipart/20190921/original/pngtree-flat-gear-icon-download-png-image_4720498.jpg",
        }
      )
    );

    // chèn thẻ span:
    el.appendChild(
      videojs.dom.createEl("div", { className: "popup-text", id: "myPopup" })
    );

    // Event here:
    el.onclick = function () {

      var popup = document.getElementById("myPopup");
      popup.innerHTML = `<div class="menu-setting">
      <div class="item-setting">1080p</div>
      <div class="item-setting">720p</div>
      <div class="item-setting">480p</div>
      <div class="item-setting">360p</div>
      <div class="item-setting">Auto</div>
        </div>`;
      popup.classList.toggle("show");
    };

    return el;
  }
}

videojs.registerComponent("SettingButton", SettingButton);
export default SettingButton;
