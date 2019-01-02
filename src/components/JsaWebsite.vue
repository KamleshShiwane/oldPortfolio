<template>
  <div class="container">
    <back-to-top text bottom="5%" right="10%">
      <v-icon class="overlay" name="arrow-alt-circle-up" scale="5"/>
    </back-to-top>
    <div class="background back-image"></div>
    <div class="background back-color"></div>
    <div class="section home">
      <img src="../assets/JSAbanner.jpg" class="home-img">
      <h1>UCSD JSA Website</h1>
    </div>
    <div class="section intro">
      <table>
        <tr>
          <th>Timeline</th>
          <th>June 2018 - November 2018</th>
        </tr>
        <tr>
          <th>Role</th>
          <th>UI/UX Designer, Visual Designer, Full-Stack Developer</th>
        </tr>
        <tr>
          <th>Tools</th>
          <th>Vue.js, Firebase, Visual Studio Code, Adobe Photoshop, Adobe Xd</th>
        </tr>
        <tr>
          <th>Introduction</th>
          <th>This is a individual project. This website is made for UCSD Japanese Student Association, a social orgnaization consist of Japanese students and people who are interested in Japanese culture.</th>
        </tr>
        <tr>
          <th>Goal</th>
          <th>My goal is to introduce what UCSD JSA is and what we do, and visualize informations. As JSA is a Japanese community, I want to intergrate Japanese elements into the design.</th>
        </tr>
      </table>
      <div class="links">
        <a href="https://ucsd-jsa.github.io" target="_blank">Link</a>
        <a
          href="https://github.com/ucsd-jsa/ucsd-jsa.github.io/tree/vue-cli-dev"
          target="_blank"
        >Github</a>
      </div>
    </div>
    <div class="section wireframe">
      <div class="half left img-container">
        <img v-img:name src="../assets/jsa/wireframe.png" alt="Wireframe on Adobe Xd">
        <v-icon class="overlay" name="search-plus" scale="3"/>
      </div>
      <div class="half right">
        <div class="text">
          <h1>Wireframe</h1>
          <p>
            The wireframe of the website is made on Adobe Xd. In the early design, main color theme is determined. I chose
            <span
              class="color-text"
            >candy colors</span> because of the joyfullness and vitalness they express, and they are compatible with the graphic design of the banner and other visual elements.
          </p>
        </div>
      </div>
    </div>
    <div class="section design">
      <h1>Visual Design</h1>
      <div class="gacha">
        <div class="half">
          <div class="text">
            <h2>Gashapon</h2>
            <p>
              The design of visualizng
              <b>future/past events</b> is inspired from
              <b>
                <a style="color: #A88EEA" href="https://en.wikipedia.org/wiki/Gashapon">Gashapon</a>
              </b>, a vending machine that sells colorful toy capsules. They can be found in and outside stores throughout Japan. I consider it as a iconic and ubiquitous Japanese popular culture element.
            </p>
          </div>
        </div>
        <div class="half">
          <div class="img-container">
            <img v-img:name src="../assets/jsa/gacha.gif" alt>
            <v-icon class="overlay" name="search-plus" scale="3"/>
          </div>
        </div>
      </div>
      <div class="karuta">
        <div class="half">
          <div class="img-container">
            <img v-img:name src="../assets/jsa/karuta.gif" alt>
            <v-icon class="overlay" name="search-plus" scale="3"/>
          </div>
        </div>
        <div class="half">
          <div class="text">
            <h2>Karuta</h2>
            <p>
              The idea of visualizng
              <b>board member</b> comes from
              <b>
                <a style="color: #A88EEA" href="https://en.wikipedia.org/wiki/Karuta">Karuta</a>
              </b>, a type of traditional Japanese playing cards. Usually, each card has a distinct character on it, along with an accompanying hiragana character in the corner signifying the character's initial syllable.
            </p>
          </div>
        </div>
      </div>
      <div class="manga">
        <div class="half">
          <div class="text">
            <h2>Manga</h2>
            <p>
              <b>
                <a style="color: #A88EEA" href="https://en.wikipedia.org/wiki/Manga">Manga</a>
              </b>, aka Japanese comics, might be one of the most famous Japanese popular culture symbols. I utilize it to visualize the event photos, while styling each events as a bookmark.
            </p>
          </div>
        </div>
        <div class="half">
          <div class="img-container">
            <img v-img:name src="../assets/jsa/manga.gif" alt>
            <v-icon class="overlay" name="search-plus" scale="3"/>
          </div>
        </div>
      </div>
      <div class="responsive">
        <div class="text">
          <h2>Responsive</h2>
          <p>I put a lot of attention to the responsive design while implementing the JSA website. While Raccoonal is more of a prototype, this website is actually put into use, so I need to make sure the users can have a great experience whenever they access to it. Responsive design is important as it enables the website's accesiblity to different platforms/devices.</p>
        </div>
        <div class="imgs-wrapper">
          <div class="img-container">
            <img v-img:name src="../assets/jsa/responsive-1.gif" alt>
            <v-icon class="overlay" name="search-plus" scale="3"/>
          </div>
          <div class="img-container">
            <img v-img:name src="../assets/jsa/responsive-2.gif" alt>
            <v-icon class="overlay" name="search-plus" scale="3"/>
          </div>
          <div class="img-container">
            <img v-img:name src="../assets/jsa/responsive-3.gif" alt>
            <v-icon class="overlay" name="search-plus" scale="3"/>
          </div>
        </div>
      </div>
    </div>
    <div class="section backend">
      <div class="half">
        <div class="text">
          <h1>Backend</h1>
          <p>All the data are hosted on firebase. This allows the future maintance to be easy, by just updating data directly to the database rather than change the code of the website.</p>
        </div>
      </div>
      <div class="half">
        <div class="img-container">
          <img v-img:name src="../assets/jsa/firebase.png" alt>
          <v-icon class="overlay" name="search-plus" scale="3"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import "vue-awesome/icons/search-plus";
import "vue-awesome/icons/arrow-alt-circle-up";
import Icon from "vue-awesome/components/Icon";
export default {
  name: "JsaWebsite",
  components: {
    "v-icon": Icon
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
* {
  color: #4b4b4b;
}
.img-container {
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    margin: auto;
  }
  .overlay {
    opacity: 0;
    position: absolute;
    bottom: 30px;
    right: 30px;
  }
  &:hover {
    .overlay {
      opacity: 1;
    }
  }
}
h1 {
  font-size: 3vw;
}
.container {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  .section {
    display: flex;
    width: 70%;
    margin: 20px auto 10px;
    padding-bottom: 20px;
  }
}

.home {
  flex-direction: column;
  &-img {
    width: 100%;
  }
  h1 {
    padding: 0 50px 10px;
    margin: 20px auto;
    border-bottom: 1px solid;
  }
}

.intro {
  flex-direction: column;
  border-bottom: 1px solid;

  font-size: 1.5vw;
  table {
    width: 70%;
    margin: 0 auto;
    tr {
      th {
        padding: 10px 0;
        &:first-child {
          text-align: right;
          width: 30%;
          font-weight: bold;
        }
        &:last-child {
          padding-left: 30px;
          text-align: left;
          font-weight: 100;
        }
      }
    }
  }
  .links {
    display: flex;
    align-content: center;
    justify-content: center;

    :first-child {
      margin: 50px 10px 10px auto;
    }
    :last-child {
      margin: 50px auto 10px 10px;
    }
    a {
      text-align: center;
      width: 10%;
      text-decoration: none;
      border: 1px solid;
      padding: 10px 0;

      &:hover {
        background-color: rgba(#c9397e, 0.7);
        border: rgba(#c9397e, 0.7) 1px;
        color: white;
      }
    }
  }
}

.wireframe {
  padding: 60px !important;
  border-bottom: 1px solid;

  h1 {
    color: #ffa0ad;
    font-size: 2.5vw;
  }
  p {
    margin: 0 auto;
    font-size: 1.2vw;
  }
  .color-text {
    color: rgb(252, 222, 103) !important;
  }
  .left {
    color: #ffa0ad;
    margin-right: 10px;
  }
  .right {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  .text {
    width: 80%;
    margin: auto auto;
    p {
      padding: 30px 0 0 20px;
    }
  }
  .half {
    width: 50%;
  }
  img {
    width: 100%;
  }
}

.design {
  padding: 60px !important;
  border-bottom: 1px solid;
  flex-direction: column;

  h1 {
    color: #509be1;
    font-size: 2.5vw;
  }
  h2 {
    font-size: 2vw;
  }
  p {
    margin: 0 auto;
    font-size: 1.2vw;
  }
  .half {
    width: 50%;
    display: flex;
  }
  .gacha,
  .karuta,
  .manga,
  .responsive {
    margin: 30px 0;
  }
  .gacha,
  .karuta,
  .manga {
    display: flex;
    padding: 30px;
    .text {
      width: 80%;
      margin: auto auto;
      p {
        padding: 30px 0 0 20px;
      }
    }
    img {
      width: 100%;
    }
  }
  .gacha {
    h2 {
      color: #fd8181;
    }
  }
  .karuta {
    h2 {
      color: rgb(97, 187, 93);
    }
  }
  .manga {
    h2 {
      color: rgb(241, 152, 79);
    }
  }
  .responsive {
    padding: 30px;
    display: flex;
    flex-direction: column;
    .imgs-wrapper {
      display: flex;
    }
    h2 {
      color: rgb(88, 95, 134);
    }
    img {
      width: 90%;
      height: 100%;
      margin: auto auto;
    }
    p {
      padding: 10px 40px;
    }
    .text {
      margin: auto;
      width: 90%;
    }
  }
}

.backend {
  padding: 60px !important;
  flex-direction: row;

  h1 {
    color: #509be1;
    font-size: 2.5vw;
  }
  h2 {
    font-size: 2vw;
  }
  p {
    margin: 0 auto;
    font-size: 1.2vw;
  }
  .text {
    width: 80%;
    margin: auto auto;
    p {
      padding: 30px 0 0 20px;
    }
  }
  .half {
    width: 50%;
    display: flex;
  }
  img {
    width: 100%;
  }
}

.background {
  position: fixed;
  z-index: -1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.back {
  &-image {
    background-image: url("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX15641396.jpg");
    filter: blur(4px);
    background-size: 1500px;
  }
  &-color {
    background-color: rgba(255, 255, 255, 0.8);
  }
}
</style>
