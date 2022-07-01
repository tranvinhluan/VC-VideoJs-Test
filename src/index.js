import "./index.css";
import "./custom.css";
import "./styles/demo.scss";
import "./video-js.css";
import videojs from "./video.min.js";

//////////////////////////////////////////////////////////
// Cách 1: class extending Component.

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

// // Create a player.
// var player = videojs(
//   "my-player",
//   {
//     controls: true,
//     autoplay: false,
//     preload: "auto",
//     loop: true,
//     playbackRates: [0.5, 1, 1.5, 2],
//     poster:
//       "https://img.lovepik.com/back_pic/05/51/77/625ae690092f6b8.jpg_wh860.jpg",
//     sources: [
//       {
//         src: "http://vjs.zencdn.net/v/oceans.mp4",
//         type: "video/mp4",
//       },
//     ],
//   },
//   function () {
//     this.addClass("vjs-custom");
//     // player.addChild('TitleBar', {text: 'The Title of The Video!'});
//   }
// );

// player.addChild("TitleBar", { text: "The Title of The Video!" });

/////////////////////////////////////////////

// cach 2: using the videojs.extend()
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
    videojs.dom.appendContent(this.el(), text);
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
    // player.addChild('TitleBar', {text: 'The Title of The Video!'});
  }
);
// Add the TitleBar as a child of the player and provide it some text in its options.
player.addChild("TitleBar", { text: "The Title of The Video!" });

///////////////////////////////////////////////////

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
    this.player().dispose();
  },
});

// var player = videojs(  "my-player",
// {
//   controls: true,
//   autoplay: false,
//   preload: "auto",
//   loop: true,
//   playbackRates: [0.5, 1, 1.5, 2],
//   poster:
//     "https://img.lovepik.com/back_pic/05/51/77/625ae690092f6b8.jpg_wh860.jpg",
//   sources: [
//     {
//       src: "http://vjs.zencdn.net/v/oceans.mp4",
//       type: "video/mp4",
//     },
//   ],
// },
// function () {
//   this.addClass("vjs-custom");
//   // player.addChild('TitleBar', {text: 'The Title of The Video!'});
// });

videojs.registerComponent("closeButton", closeButton);
player.getChild("controlBar").addChild("closeButton", {});

// // TEST  TEST
// // const Component = videojs.getComponent('Component');

// class MyControlBar extends Component {

//   createEl() {
//     return videojs.dom.createEl('div', {
//       className: 'vjs-control-bar',
//       text: 'test abc'
//     });
//   }

// }

// MyControlBar.prototype.options_ = {
//   children: [
//     'componentPlayToggle',
//     'timePlay',
//     'Progress',
//     'volumeComponent',
//     'FullscreenToggle'
//   ]
// };

// Component.registerComponent('MyControlBar', MyControlBar);

////////////////////////////
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
      className: "123123123",
      controlText: "abc def",
    });
  },

  updateTextContent: function (text) {
    if (typeof text !== "string") {
      text = "Title Unknown";
    }

    videojs.dom.emptyEl(this.el());
    videojs.dom.appendContent(this.el(), text);
  },
});

videojs.registerComponent("TitleBar2", TitleBar);

// player.addChild("TitleBar", { text: "The Title of The Video!" });

const playerChildren =
  videojs.getComponent("Player").prototype.options_.children;

console.log("--------- playerChildren -------------", playerChildren);

const ControlBar = playerChildren.indexOf("controlBar");



playerChildren.splice(ControlBar, 3, "TitleBar2");
console.log("======== custom", playerChildren);

var player2 = videojs(
  "my-player2",
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
    player.addChild('TitleBar', {text: 'The Title of The Video!'});
  }
);
