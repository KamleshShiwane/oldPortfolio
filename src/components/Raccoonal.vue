<template>
  <div class="container">
    <back-to-top text bottom="5%" right="10%">
      <div class="backtotop">
        <v-icon name="arrow-alt-circle-up" scale="5"/>
      </div>
    </back-to-top>
    <div class="background back-image"></div>
    <div class="background back-color"></div>
    <div class="section home">
      <img src="../assets/RaccoonalSlide.png" class="home-img">
      <h1>Raccoonal</h1>
    </div>
    <div class="section intro">
      <table>
        <tr>
          <th>Timeline</th>
          <th>January 2018 - March 2018</th>
        </tr>
        <tr>
          <th>Role</th>
          <th>Project Manager, UI/UX Designer, Visual Designer, Front-End Developer</th>
        </tr>
        <tr>
          <th>Tools</th>
          <th>Affectiva, Express.js, Handlebars, Adobe Xd, Adobe Photoshop, Google Analytics</th>
        </tr>
        <tr>
          <th>Teammates</th>
          <th>Venessa Wong, Nessa Vu</th>
        </tr>
        <tr>
          <th>Introduction</th>
          <th>
            This is a class project of
            <a
              href="http://ixd.ucsd.edu/home/w18/index.php"
              target="_blank"
            >COGS 120, Interaction Design</a>. Guided by the theme of
            <i>Mindfulness</i>, we present the mobile web application, Raccoonal, an emotional journal &amp; companion.
          </th>
        </tr>
        <tr>
          <th>POV</th>
          <th>Finding context to your emotions is the first step in practicing mindfulness. Understanding your emotions can increase self-awareness and guide you to prioritize things that are more important to you.</th>
        </tr>
      </table>
      <div class="links">
        <a href="https://a10-raccoonal.herokuapp.com/" target="_blank">Link</a>
        <a href="https://github.com/ReventonC/Raccoonal" target="_blank">Github</a>
      </div>
    </div>
    <div class="section paper">
      <div class="half up">
        <div class="text">
          <h1>Story boards &amp; Paper Prototypes</h1>
          <p>We created three story boards base on our POV showing in what cases users can use our application to be mindful to their emotions.</p>
        </div>
      </div>
      <div class="half down img-container">
        <img v-img:name src="../assets/rac/storyboard.png" alt>
        <v-icon class="overlay" name="search-plus" scale="3"/>
      </div>

      <div class="text">
        <p
          class="p"
        >Then, we created two paper prototypes that are inspired by our POV and story boards.</p>
      </div>
      <div class="half down img-container">
        <img v-img:name src="../assets/rac/p1.png" alt>
        <v-icon class="overlay" name="search-plus" scale="3"/>
      </div>
      <p class="p">Paper Prototype 1: A racoon game that can scan and record user's emotion.</p>

      <div class="half down img-container">
        <img v-img:name src="../assets/rac/p2.png" alt>
        <v-icon class="overlay" name="search-plus" scale="3"/>
      </div>
      <p class="p">Paper Prototype 2: A emotion journal that can record text and voice memo.</p>
    </div>
    <div class="section wireframe">
      <div class="up">
        <div class="text">
          <h1>Wireframe</h1>
          <p>The wireframe of the website is made on Adobe Xd. We combine the two paper prototypes, and create this high-fidelity wireframe, exhibiting the main interaction of the application.</p>
        </div>
      </div>
      <div class="down img-container">
        <img v-img:name src="../assets/rac/wireframe.png" alt>
        <v-icon class="overlay" name="search-plus" scale="3"/>
      </div>
    </div>

    <div class="section design">
      <h1>Visual &amp; Interaction Design</h1>

      <div class="sub yard">
        <div class="img-container three">
          <img v-img:name src="../assets/rac/yard.gif" alt>
          <v-icon class="overlay" name="search-plus" scale="3"/>
        </div>
        <div class="text">
          <h2>Raccoon Companions</h2>
          <p>One of the main elements of Raccoonal is the raccoon companions. We created 7 raccoon companions, and they serve as the emotional compainons in this application. Each of the racoons provides a mindfulness tip, and helps doing emotion evaluations.</p>
          <p>The reason we picked raccoons was not only because they are cute and healing but also because they are the popular mascot of UCSD among the students.</p>
        </div>
        <div class="img-container three">
          <img v-img:name src="../assets/rac/book.gif" alt>
          <v-icon class="overlay" name="search-plus" scale="3"/>
        </div>
      </div>
      <div class="sub scan">
        <div class="img-container">
          <img v-img:name src="../assets/rac/scan.gif" alt>
          <v-icon class="overlay" name="search-plus" scale="3"/>
        </div>
        <div class="text">
          <h2>Emotion Evaluation</h2>
          <p>Emotion evaluation is the main functionality of the application. It is consist of two main parts, facial expression scanning and mental health quiz.</p>
          <p>
            Facial scanning is powered by
            <a
              href="https://developer.affectiva.com"
              target="_blank"
            >Affectiva</a>, an emotion AI SDK. Facial expressions always contain a lot of information about a person's mental status.
          </p>
          <p>
            Users also need to do a mental health quiz during the emotion evaluate process. This quiz is used for assisting emotion evaluation results. We used
            <i>Wizard-of-Oz technique</i> while implementing it.
          </p>
        </div>
        <div class="img-container">
          <img v-img:name src="../assets/rac/quiz.gif" alt>
          <v-icon class="overlay" name="search-plus" scale="3"/>
        </div>
      </div>
      <div class="sub calendar">
        <div class="text">
          <h2>Calendar and Reflection</h2>
          <p>The emotion evaluation results are saved to the calendar. This calendar provides users a place to check their past emotion records and memos, so that they can utilize this as a place to do a self mental reflection.</p>
        </div>
        <div class="img-container">
          <img v-img:name src="../assets/rac/quiz.gif" alt>
          <v-icon class="overlay" name="search-plus" scale="3"/>
        </div>
      </div>
    </div>

    <div class="section testing">
      <div class="half up">
        <div class="text">
          <h1>User Testing</h1>
          <p>We conducted an A/B testing with Google Analytics to find out user's preference over two versions of design.</p>
        </div>
      </div>
      <div class="half down img-container">
        <img v-img:name src="../assets/rac/abtest.png">
        <v-icon class="overlay" name="search-plus" scale="3"/>
      </div>
      <div class="text">
        <p>We also interviewed 20 users, and collected their qualitative feedbacks. We incorporated their advices in revising our final version of the application.</p>
      </div>
      <div class="half down img-container">
        <img v-img:name src="../assets/rac/abtest2.png">
        <v-icon class="overlay" name="search-plus" scale="3"/>
      </div>
    </div>
    <div class="section present">
      <div class="half up">
        <div class="text">
          <h1>Final Presentation</h1>
          <p>Raccoonal won the "Most Human-centered" prize on the final presentation, awarded by Professor Scott Klemmer and Mr. Chuck Pelly. Here is our poster we exihibited on the presentation.</p>
        </div>
      </div>
      <div class="half down img-container">
        <img v-img:name src="../assets/rac/poster.png">
        <v-icon class="overlay" name="search-plus" scale="3"/>
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
h1,
h2,
h3,
p,
a,
tr,
th {
  color: white;
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
    border-bottom: 1px solid white;
  }
}

.intro {
  flex-direction: column;
  border-bottom: 1px solid white;

  font-size: 1.5vw;
  table {
    width: 80%;
    margin: 0 auto;
    tr {
      th {
        padding: 10px 0;
        &:first-child {
          text-align: right;
          width: 20%;
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
      border: 1px solid white;
      padding: 10px 0;

      &:hover {
        background-color: rgba(#face11, 0.7);
        border: rgba(#face11, 0.7) 1px white;
        color: white;
      }
    }
  }
}

.paper {
  padding: 40px !important;
  border-bottom: 1px solid white;
  flex-direction: column;

  h1 {
    margin: auto;
    font-size: 2.5vw;
  }
  p {
    margin: auto;
    font-size: 1.2vw;
  }
  .p {
    margin: 3px auto 15px;
  }
  .up {
    margin-bottom: 30px;
  }
  .down {
    display: flex;
    flex-direction: column;
  }
  .text {
    width: 80%;
    margin: auto auto;
    display: flex;
    flex-direction: column;
    p {
      padding: 30px 0 0 20px;
    }
  }
  .half {
    width: 100%;
  }
  img {
    width: 100%;
  }
}

.wireframe {
  padding: 40px !important;
  border-bottom: 1px solid white;
  flex-direction: column;

  h1 {
    margin: auto;

    font-size: 2.5vw;
  }
  p {
    margin: 0 auto;
    font-size: 1.2vw;
  }
  .up {
    margin-bottom: 30px;
  }
  .down {
    display: flex;
    flex-direction: column;
  }
  .text {
    width: 80%;
    margin: auto auto;
    display: flex;
    flex-direction: column;
    p {
      padding: 30px 0 0 20px;
    }
  }
  img {
    width: 100%;
  }
}

.design {
  padding: 40px !important;
  flex-direction: column;
  border-bottom: 1px solid white;

  h1 {
    margin: auto;
    font-size: 2.5vw;
  }
  h2 {
    font-size: 2vw;
  }
  p {
    margin: 0 auto;
    font-size: 1.2vw;
  }
  .sub {
    margin-top: 50px;
  }
  .yard,
  .scan {
    display: flex;
    .text {
      width: 50%;
      padding: 3%;
      display: flex;
      flex-direction: column;
      margin: auto;
      h2 {
        margin: 0 auto 20px;
      }
      p {
        margin: 10px auto;
        padding: 0 10px;
      }
    }
    .img-container {
      width: 25%;
    }
    img {
      width: 100%;
    }
  }
  .calendar {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    .text {
      width: 50%;
      p {
        margin: 10px auto;
        padding: 0 10px;
      }
    }
    .img-container {
      width: 50%;
    }
    img {
      width: 100%;
    }
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
    filter: blur(4px);
    background-size: 1500px;
    background-image: url("https://previews.123rf.com/images/cnuisin/cnuisin1806/cnuisin180600019/103217924-paw-seamless-pattern-dog-paw-cat-paw-bulldog-vector-isolated-background-wallpaper.jpg");
  }
  &-color {
    background-color: rgba(64, 113, 202, 0.9);
  }
}

.testing {
  padding: 40px !important;
  border-bottom: 1px solid white;
  flex-direction: column;

  .color-text {
    color: rgb(252, 222, 103) !important;
  }
  .text {
    width: 80%;
    margin: auto auto;
    display: flex;
    flex-direction: column;
    h1 {
      margin: 0 auto;
      font-size: 2.5vw;
    }
    p {
      padding: 30px 0 0 20px;
      margin: 0 auto;
      font-size: 1.2vw;
    }
  }
  .img-container {
    width: 70%;
    margin: 30px auto;
    img {
      width: 100%;
    }
  }
}

.present {
  padding: 40px !important;
  flex-direction: column;

  .color-text {
    color: rgb(252, 222, 103) !important;
  }
  .text {
    width: 80%;
    margin: auto auto;
    display: flex;
    flex-direction: column;
    h1 {
      margin: 0 auto;
      font-size: 2.5vw;
    }
    p {
      padding: 30px 0 0 20px;
      margin: 0 auto;
      font-size: 1.2vw;
    }
  }
  .img-container {
    width: 70%;
    margin: 30px auto;
    img {
      width: 100%;
    }
  }
}

.backtotop {
  color: #face11;
}
</style>
