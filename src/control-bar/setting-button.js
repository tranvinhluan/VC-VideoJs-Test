import videojs from "video.js";
import icon from '../assets/icon.svg'

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
          src: icon,
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
      // <span class="popup-text" id="myPopup">Test Popup!</span>

      var popup = document.getElementById("myPopup");
      popup.innerHTML = `<div class="menu-setting">
        <div class="item-setting">Chú thích </div>
        <div class="item-setting">Tốc độ phát</div>
        <div class="item-setting">Phụ đề</div>
        <div class="item-setting">Chất lượng</div>
        </div>`;
      popup.classList.toggle("show");
    };

    return el;
  }
}

videojs.registerComponent("SettingButton", SettingButton);
export default SettingButton;
