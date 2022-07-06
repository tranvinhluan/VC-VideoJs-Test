import videojs from "video.js";
import next from "../assets/next.svg";

var Button = videojs.getComponent("Button");

class NextButton extends Button {
  constructor(player, options) {
    super(player, options);
  }

  createEl() {
    let el = videojs.dom.createEl("div", {
      className: "vjs-my__next-button",
    });

    // chèn icon next:
    el.appendChild(
      videojs.dom.createEl(
        "img",
        {
          className: "vjs-my__image-next",
        },
        {
          src: next,
          alt: "https://png.pngtree.com/png-clipart/20190921/original/pngtree-flat-gear-icon-download-png-image_4720498.jpg",
        }
      )
    );

    // chèn thẻ div:
    el.appendChild(
      videojs.dom.createEl("div", { className: "next-text", id: "myNext" })
    );

    // chèn the text
    // el.appendChild(
    //   videojs.dom.createEl("div", {
    //     className: "next-my-text",
    //     id: "myNext-hover",
    //   })
    // );


    // Event here:
    el.onclick = function () {
      var popup2 = document.getElementById("myNext");
      popup2.innerHTML = `<div class="menu-next">
                <div class="item-next">New Videos</div>
                <img class="item-next-img" src="https://cdn.tgdd.vn/hoi-dap/1360499/cach-lay-hinh-tu-video-trich-xuat-anh-tu-video-4.jpg" alt="" />
            </div>`;
      popup2.classList.toggle("show");
    };

    return el;
  }
}

videojs.registerComponent("NextButton", NextButton);
export default NextButton;
