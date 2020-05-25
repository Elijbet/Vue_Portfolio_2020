<template>
  <div class="panel">
    <div class="navbar center">
      <router-link to="/"><h5>HOME</h5></router-link>
      <img
        src="https://www.dropbox.com/s/lqxhvz32aw2mx2w/innovation.png?raw=1"
        alt="innovation"
      />
      <router-link to="/about"><h5>ABOUT</h5></router-link>
    </div>

    <div class="directions" v-if="this.$route.params.section === 'uxui'">
      <div class="call">
        <h5>TO VIEW CODEPEN SNIPPETS IN FULL VIEW FOLLOW THE DIRECTIONS</h5>
        <p><i class="arrow down"></i></p>
      </div>
      <div class="guide_img">
        <img
          src="../../assets/gotocodepen.png"
          alt=""
          style="height: 400px; width: auto"
        />
        <img
          src="../../assets/changeview.png"
          alt=""
          style="height: 400px; width: auto;"
        />
      </div>
    </div>

    <div class="display">
      <div
        v-for="(item, index) in itemsConditional"
        :key="index"
        class="child center"
      >
        <!-- codepen -->
        <div v-if="item.codepenIframe" class="flex center">
          <iframe
            height="265"
            style="width: 100%;"
            scrolling="no"
            title="Masonry Image Gallery with Animated Corner Fold"
            :src="
              'https://codepen.io/elijbet/embed/' +
                item.codepenIframe +
                '?height=265&theme-id=dark&default-tab=result'
            "
            frameborder="no"
            allowtransparency="true"
            allowfullscreen="true"
          >
            See the Pen
            <a href="'https://codepen.io/elijbet/pen/'+item.codepenIframe">
              Masonry Image Gallery with Animated Corner Fold
            </a>
            by elijbet (<a href="https://codepen.io/elijbet">@elijbet</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
        <!-- image -->
        <div v-if="item.placeholder" class="flex center">
          <img
            :src="item.placeholder"
            @click="sendInfo(item)"
            id="show-modal"
          />
        </div>
        <!-- pdf -->
        <div v-if="item.placeholderPDF" class="flex center position">
          <iframe
            :src="item.placeholderPDF"
            height="300px"
            width="400px"
            frameborder="0"
            border="0"
            cellspacing="0"
            style="border-style: none;"
          >
          </iframe>
          <div class="overlay" @click="sendInfo(item)" id="show-modal"></div>
        </div>
        <!-- link -->
        <div v-if="item.placeholderImageLink" class="flex center">
          <a :href="item.webLink" class="flex center">
            <img :src="item.placeholderImageLink" />
          </a>
        </div>
        <div
          v-if="item.placeholderVideoLink"
          class="flex center"
          @click="sendInfo(item)"
        >
          <video width="80%" id="show-modal">
            <source :src="item.placeholderVideoLink" type="video/mp4" />
          </video>
        </div>
        <h3 class="header">PROJECT: {{ item.project.toUpperCase() }}</h3>
        <p v-if="item.description">Description: {{ item.description }}</p>
        <br />
        <p>Tech: {{ item.tech }}</p>
      </div>
    </div>
    <modal v-if="showModal" @close="showModal = false">
      <div slot="body" class="center flex body">
        <!-- video -->
        <div v-if="selectedUser.placeholderVideoLink" class="flex center">
          <video :width="selectedUser.width" controls>
            <source :src="selectedUser.placeholderVideoLink" type="video/mp4" />
          </video>
        </div>
        <!-- image -->
        <div v-if="selectedUser.placeholder" class="flex center">
          <img :src="selectedUser.placeholder" />
        </div>
        <!-- pdf -->
        <div
          v-if="selectedUser.placeholderPDF"
          class="flex center iframe-width"
        >
          <iframe
            :src="selectedUser.placeholderPDF"
            height="520px"
            width="130%"
            frameborder="0"
            border="0"
            cellspacing="0"
            style="border-style: none;"
          ></iframe>
        </div>
        <h3 class="header">
          PROJECT: {{ selectedUser.project.toUpperCase() }}
        </h3>
        <p v-if="selectedUser.description">
          Description: {{ selectedUser.description }}
        </p>
        <br />
        <p>Tech: {{ selectedUser.tech }}</p>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from "./modal/Modal.vue";

export default {
  data() {
    return {
      showModal: false,
      link: "https://drive.google.com/uc?id=1j6YOO5HaRA4obZY-TAHQoKJTNDJ4aVO6",
      items: [],
      selectedUser: ""
    };
  },
  methods: {
    sendInfo(item) {
      this.showModal = true;
      this.selectedUser = Object.assign({}, item);
    }
  },
  computed: {
    itemsConditional() {
      if (this.$route.params.section === "code") {
        return [
          {
            placeholderVideoLink:
              "https://www.dropbox.com/s/j62jiyvm81xube8/checkout_process_02.mov?raw=1",
            project: "Lee's Chinese Restaurant",
            internship: "BitbrokerLabs",
            tech: "React Native",
            width: "80%"
          },
          {
            placeholderVideoLink:
              "https://www.dropbox.com/s/m6ory9ho4rtvwwz/edit%20button%20makes%20items%20removable.mov?raw=1",
            project: "Lee's Chinese Restaurant",
            internship: "BitbrokerLabs",
            tech: "React Native",
            width: "80%"
          },
          {
            placeholderVideoLink:
              "https://www.dropbox.com/s/dyagpcyq51thox6/remove_item_untick.mov?raw=1",
            project: "Lee's Chinese Restaurant",
            internship: "BitbrokerLabs",
            tech: "React Native",
            width: "80%"
          },
          {
            placeholderVideoLink:
              "https://www.dropbox.com/s/q22jk0szyfsfx77/Routing%20for%20interview%20problems%20as%20json%20props.mov?raw=1",
            project: "Coding Interview Practice App",
            description: "Routing for interview problems as JSON props",
            tech: "React",
            width: "80%"
          },
          {
            placeholderVideoLink:
              "https://www.dropbox.com/s/p8qa2385ryhnjm2/Adding_Questions.mov?raw=1",
            project: "Coding Interview Practice App",
            internship: "BitBrokerLabs",
            description:
              "Adding interview questions, hints, gotchas, and final answer to JSON.",
            tech: "React",
            width: "80%"
          },
          {
            placeholderImageLink:
              "https://drive.google.com/uc?id=1jS0Maw5UDHBQmqHi7rxD_de9e1K4PiXG",
            webLink:
              "https://github.com/Elijbet/Move-Planner-App-React/blob/master/README.md",
            project: "Move Planner",
            tech:
              "React. An application that brings you all the information you need before you move to a new location. It provides street view of the address, an article on the city from Wikipedia, and a list of NYT articles."
          },
          {
            placeholderImageLink:
              "https://drive.google.com/uc?id=1yKk-4_Jy9c6bWBjYSpmFjXiFZC3QRViE",
            webLink:
              "https://github.com/Elijbet/Gif_Theatre/blob/master/README.md",
            project: "Gif Theatre",
            tech:
              "React. Make a gif theater that shuffles random gifs with an animated transition. Swap it, if the user clicks on a thumbnail, and give an option to resume random shufle upon click on resume button."
          },
          {
            placeholderImageLink:
              "https://drive.google.com/uc?id=1x8u7vQGcZQXZJvFlgR5DJBOjqqiJXKvY",
            webLink:
              "https://github.com/Elijbet/DictionaryApp/blob/master/README.md",
            project: "Dictionary App",
            tech: "Rails Dictionary App."
          },
          {
            placeholderImageLink:
              "https://drive.google.com/uc?id=1MDmxLNl2q5f0cbvVlD6ZgE9ftM-hLsOH",
            webLink: "https://github.com/Elijbet/Karma_Bank",
            project: "Karma Bank",
            description:
              "Karma Bank is a positive affirmation app that logs your positive experiences and gives them out later to brighten up your day.",
            tech: "Rails API & Vue front."
          },
          {
            placeholderImageLink:
              "https://drive.google.com/uc?id=1_c1zrgtJLEU9J9cy6ZFhTIszcfQm66pK",
            webLInk:
              "https://github.com/Elijbet/Goodreads_clone/blob/master/README.md",
            project: "Readers App",
            description:
              "Deploy a Vue.js App with Firebase Hosting. This app is written a while ago. Working on an alternative Wonk App project with a new approach.",
            tech:
              "Vue Goodreads Clone with API from Goodreads and Firebase backend."
          }
        ];
      } else if (this.$route.params.section === "interior") {
        return [
          {
            placeholderPDF:
              "https://drive.google.com/file/d/1RbYfxzxFPhSutwejtz3mTJmhEtPienTu/preview",
            // "https://drive.google.com/uc?id=0B4qfPIQ8j-PYaUZoN3QwYUxDNkk#toolbar=0",
            project: "Portfolio",
            tech:
              "Adobe Suite, SketchUp, 3ds Max, AutoCAD, Sketches, Pencil Drawing"
          },
          {
            placeholderPDF:
              "https://drive.google.com/uc?id=18x0UyjVJkJdL1siBNjcpuUsvHbwI-gc6#toolbar=0",
            project: "Elevations",
            tech: "AutoCAD, Photoshop"
          },
          {
            placeholderPDF:
              "https://drive.google.com/uc?id=1WZXg3zKNszEBtliKMU_xqzpBfDx0TOqv#toolbar=0",
            project: "Residential Renderings",
            tech: "SketchUp, Photoshop"
          },
          {
            placeholderPDF:
              "https://drive.google.com/uc?id=1YSP7lIExPv8elY9vAx3j1DaPVJ2kBfqe#toolbar=0",
            project: "Collection",
            tech: "SketchUp, AutoCAD, Photoshop"
          },
          {
            placeholderPDF:
              "https://drive.google.com/uc?id=1uvmNdK-9j3taPc6H3QKKk_nqaLcUOfHp#toolbar=0",
            project: "Long Renderings",
            tech: "AutoCAD, Photoshop"
          }
        ];
      } else if (this.$route.params.section === "graphic") {
        return [
          {
            placeholder:
              "https://www.dropbox.com/s/4afkditveif28bb/cooking07.png?raw=1",
            project: "Cooking Poster",
            description: "Create a poster with type only.",
            tech: "Illustrator"
          },
          {
            placeholder:
              "https://drive.google.com/uc?id=0B4qfPIQ8j-PYSEZtYl9QZHJVQTg",
            project: "Seafood Restaurant",
            tech: "Adobe Suite"
          },
          {
            placeholder:
              "https://drive.google.com/uc?id=0B4qfPIQ8j-PYUjR3MFRPX2tyeHc",
            project: "Popularizing Education",
            tech: "Hand Sketches, Adobe Suite"
          },
          {
            placeholder:
              "https://drive.google.com/uc?id=1M8gA62P11WrWVf0LABvwdHEn1hjLZR_w",
            project: "Wild Oak Cafe",
            tech: "Hand Sketches"
          }
        ];
      } else if (this.$route.params.section === "uxui") {
        return [
          {
            placeholderPDF:
              "https://drive.google.com/uc?id=1BCCWFBMkNd4tkIAxuGx_KpzuKFedfOO6#toolbar=0",
            project: "Real Time Product Tracking App",
            description: "UCLA UX project 1/3",
            tech: "Adobe XD, Indesign"
          },
          {
            placeholderVideoLink:
              "https://www.dropbox.com/s/gamb6nfc31skwhk/Prototype_walkthrough_take2.mov?raw=1",
            project: "Real Time Product Tracking App",
            description: "UCLA UX project 2/3",
            tech: "Adobe XD",
            width: "50%"
          },
          {
            placeholderPDF:
              "https://drive.google.com/uc?id=17F_6GCm3LLz8cqGf4qpNRwmHVba1w_FO#toolbar=0",
            project: "Real Time Product Tracking App",
            description: "UCLA UX project 3/3",
            tech: "Adobe XD, Indesign, Photoshop"
          },
          {
            placeholderVideoLink:
              "https://www.dropbox.com/s/wa6tqr6vwlq75fb/AutoScroll%26Highlight%26Modalwithlink%2001.mov?raw=1",
            project: "Coding Interview Practice App",
            internship: "BitbrokerLabs",
            description:
              "App provides a coding challenge and buttons for Hints, Gotchas, and a Final Answer. These automatically scroll to the top of the page as they appear on click, slowly fading out. Modal responds to 'no' by closing, 'yes' responds by forwarding to a survey.",
            tech: "React",
            width: "80%"
          },
          {
            codepenIframe: "QWbYNwN",
            project: "Mosaic Grid",
            tech: "CSS"
          },
          {
            codepenIframe: "zYGMMeK",
            project: "Berserk Yogurt Shop",
            description:
              "Hovering on direction-aware menu brings up the menu item image and description.",
            tech: "SCSS"
          },
          {
            codepenIframe: "ExjdYKz",
            project: "1920s in Western Fashion",
            description:
              "Use css timing and easing to create a collapsible menu, implement simple carousel.",
            tech: "CSS"
          },
          {
            codepenIframe: "poJOdzz",
            project: "Responsive Card",
            description:
              "Use css transform and transition tools to rearrange the card on smaller screen.",
            tech: "CSS"
          },
          {
            codepenIframe: "LYYzEyY",
            project: "Masonry Image Gallery with Animated Corner Fold",
            tech: "Vue"
          },
          {
            codepenIframe: "yLNxeKK",
            project: "Planning badly for a trip",
            description: "Slide up description over image & button animation.",
            tech: "CSS"
          },
          {
            codepenIframe: "BaNgxQQ",
            project: "Rainbow scroll masonry with CSS grid and JS.",
            description:
              "Knowing the height of rows in CSS grid find the height of the contents with JS and apply that grid-row-end value to get dynamic card height. Apply rainbow colors to a range of cards.",
            tech: "CSS, JS"
          },
          {
            codepenIframe: "XWbEvLK",
            project: "Card layout with some CSS fun",
            tech: "CSS"
          },
          {
            codepenIframe: "xxxRXbm",
            project: "Image mask skews on scroll",
            tech:
              "Small animation project taking advantage of the scroll position."
          },
          {
            codepenIframe: "vYYyNVr",
            project: "Panel of Square Images",
            tech: "Vue and CSS practice layout."
          },
          {
            codepenIframe: "wvvvYRd",
            project: "Color Letters on Hover",
            tech: "Using Data attribute to create a hover animation."
          },
          {
            codepenIframe: "VwLGveX",
            project: "Animate Button",
            tech: "CSS"
          },
          {
            codepenIframe: "ZEEbaWv",
            project: "Sliding Side Menu with Styled Cursor",
            tech:
              "Hover on the right side red strip to open a menu panel. Study of slide in panels."
          },
          {
            codepenIframe: "zYYdjYy",
            project: "Donuts",
            tech:
              "CSS. Fun donut shaped images. Practice absolute positioning and background-clipping."
          },
          {
            codepenIframe: "eYOabLb",
            project: "Masonry Carousel",
            tech: "Study of a Vue Carousel Layout of Stacked Images."
          }
        ];
        // {placeholderPDF: 'https://codepen.io/elijbet/full/dyyzRva', project: 'Different Scroll Speeds', tech: 'Taken some jquery version of parallax boxes moving at different speeds and converted into Vue.'},
      } else {
        return false;
      }
    }
  },
  components: {
    Modal
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Bebas+Neue|Montserrat);

h5 {
  font-family: "Montserrat", sans-serif;
  color: rgba(255, 255, 255, 0.7);
}
.panel {
  font-size: calc(0.8em + 1vmin);
  font-family: sans-serif;
  color: white;
  background-color: #1d1e21;
  padding-top: 130px;
}
.navbar {
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  padding: 15px;
  background-color: #1d1e21;
}
.navbar:hover {
  background: rgba(0, 0, 0, 1);
}
.navbar img {
  width: 50px;
  height: 50px;
  filter: contrast(160%);
  padding: 0px 40px 0px 40px;
}
.display {
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
}
.directions {
  display: flex;
  flex-direction: column;
  margin: 0px 15px 0px 15px;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.25);
}
.guide_img {
  display: flex;
  flex-direction: row;
  display: none;
}
.call {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
}
.directions:hover .guide_img {
  display: block;
}
.child {
  width: 33%;
  display: flex;
  padding: 40px 0px 40px 0px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-left: 0;
  border-top: 0;
  flex-direction: column;
}
.child:first-child {
  border-left: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.25);
}
.child:nth-child(2) {
  border-top: 1px solid rgba(255, 255, 255, 0.25);
}
.child:nth-child(3) {
  border-top: 1px solid rgba(255, 255, 255, 0.25);
}
.child:nth-child(3n + 4) {
  border-left: 1px solid rgba(255, 255, 255, 0.25);
}
img {
  width: 80%;
}
.center {
  justify-content: center;
  align-items: center;
}
.flex {
  display: flex;
}

h3 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: "Bebas Neue", cursive;
  font-size: 1.5em;
  font-weight: 100;
  padding-right: 50px;
  padding-left: 50px;
}
p {
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 0.7em;
  padding-right: 50px;
  padding-left: 50px;
}
.header,
.body {
  margin-top: 35px;
  flex-direction: column;
  margin-bottom: 30px;
}
.position {
  position: relative;
}
.overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}
.iframe-container {
  position: relative;
}
.iframe-width {
  width: 700px;
}
/* DOWN ARROW */
i {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
@media only screen and (max-width: 992px) {
  .child {
    width: 49.5%;
  }
  .child:nth-child(3) {
    border-top: 0;
  }
  .child:nth-child(3n + 4) {
    border-left: 0;
  }
  .child:nth-child(2n + 3) {
    border-left: 1px solid rgba(255, 255, 255, 0.25);
  }
}
</style>
