import "./index.css";
import "./custom.css";
import "./styles/demo.scss";
import "./video-js.css";
import videojs from "./video.min.js";

//////////////////////////////////////////////////////////
// Cách 1.1: class extending Component.

// const Component = videojs.getComponent("Component");

// class TitleBar extends Component {
//   constructor(player, options = {}) {
//     super(player, options);

//     if (options.text) {
//       this.updateTextContent(options.text);
//     }
//   }
//   createEl() {
//     return videojs.dom.createEl("div", {
//       className: "vjs-title-bar",
//     });
//   }

//   updateTextContent(text) {
//     if (typeof text !== "string") {
//       text = "Title Unknown";
//     }

//     videojs.dom.emptyEl(this.el());
//     videojs.dom.appendContent(this.el(), text);
//   }
// }

// videojs.registerComponent("TitleBar", TitleBar);


/////////////////////////////////////////////

// cach 1.2: using the videojs.extend() - DÙNG ADDCHILD -PLAYER (VIDEO 1)
var Component = videojs.getComponent("Component");

var TitleBar = videojs.extend(Component, {
  constructor: function (player, options) {
    Component.apply(this, arguments);

    if (options.text) {
      this.updateTextContent(options.text);
    }
  },

  createEl: function () {
    return videojs.dom.createEl("div", {
      className: "vjs-title-bar",
    });
  },

  updateTextContent: function (text) {
    if (typeof text !== "string") {
      text = "Title Unknown";
    }

    videojs.dom.emptyEl(this.el());
    videojs.dom.appendContent(this.el(), text = 'abc');
  },
});

// Register the component with Video.js, so it can be used in players.
videojs.registerComponent("TitleBar", TitleBar);

// Create a player.
var player = videojs(
  "my-player",
  {
    controls: true,
    autoplay: false,
    preload: "auto",
    loop: true,
    playbackRates: [0.5, 1, 1.5, 2],
    poster:
      "https://img.lovepik.com/back_pic/05/51/77/625ae690092f6b8.jpg_wh860.jpg",
    sources: [
      {
        src: "http://vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4",
      },
    ],
  },
  function () {
    this.addClass("vjs-custom");
  }
);
// Add the TitleBar as a child of the player and provide it some text in its options.
player.addChild("TitleBar", { text: "The Title of The Video!" });

// THÊM NÚT XÓA CẢ VIDEO:
var button = videojs.getComponent("Button");
var closeButton = videojs.extend(button, {
  constructor: function () {
    // Equivalent of `super(this, arguments)`
    button.apply(this, arguments);

    this.controlText("Exit Course");
    this.addClass("vjs-icon-cancel");
  },
  handleClick: function () {
    // console.log(this.player());
    this.player().dispose();
  },
});

videojs.registerComponent("closeButton", closeButton);
player.getChild("controlBar").addChild("closeButton", {});


/*
 *
 *
 *
 */

//=======================================================
//=======================================================
// // CÁCH 2:  CÁCH DÙNG SPLICE THAY THẾ CONTROLBAR của player2
var Component = videojs.getComponent("Component");

// Đổi tên thành TitleBar2
videojs.registerComponent("TitleBar2", TitleBar);

// const playerChildren = videojs.getComponent("Player").prototype.options_.children;

// console.log("--------- playerChildren -------------", playerChildren);

// const ControlBar = playerChildren.indexOf("controlBar");

// playerChildren.splice(ControlBar, 2, "TitleBar2");
// console.log("======== custom", playerChildren);

var player2 = videojs(
  "my-player2",
  {
    controls: true,
    autoplay: false,
    preload: "auto",
    loop: true,
    playbackRates: [0.5, 1, 1.5, 2],
    poster:
      "https://kenh14cdn.com/thumb_w/600/2019/1/18/nwaizzzo6ye7ir5izhnq-15477973817771025704545-crop-15477974935231946985602.jpg",
    sources: [
      {
        src: "http://vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4",
      },
    ],
  },
  function () {
    this.addClass("vjs-custom");
    player2.addChild("TitleBar2", { text: "NOI DUNG VIDEO 2" });
  }
);


//=========================================================
//=========================================================
// CÁCH 3: CÁCH DÙNG CHO CHILDREN TRONG OPTIONS.

/**
 * 
 * 
 * console.log(playerChildren)
 *  ['mediaLoader', 'posterImage', 'textTrackDisplay', 'loadingSpinner', 'bigPlayButton',
 *  'liveTracker', 'controlBar', 'errorDisplay', 'textTrackSettings', 'resizeManager']
 * 
 * 
 */

var player3 = videojs(
  "my-player3",
  {
    controls: true,
    autoplay: false,
    preload: "auto",
    loop: true,
    playbackRates: [0.5, 1, 1.5, 2],
    poster:
      "https://media.vov.vn/uploaded/rftwybrxfmly8uzveukg/2019_06_05/1_copy_ufut.jpg",
    sources: [
      {
        src: "http://vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4",
      },
    ],
    children: [
      'posterImage',
      'mediaLoader',
      'bigPlayButton',
      'TitleBar2'       // cần chèn text vào hiển thị ???
    ]
  },
  function () {
    player3.addClass("vjs-custom");
    // player3.addChild("TitleBar2", { text: "NOI DUNG VIDEO 3" });
  }
);
