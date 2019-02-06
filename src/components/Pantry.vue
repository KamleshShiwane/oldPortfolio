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
      <img src="../assets/Pantry.png" class="home-img">
      <h1>Pantry</h1>
    </div>
    <div class="section intro">
      <table>
        <tr>
          <th>Timeline</th>
          <th>March 2018 - June 2018</th>
        </tr>
        <tr>
          <th>Role</th>
          <th>UI/UX Designer, Visual Designer, Front-end Developer</th>
        </tr>
        <tr>
          <th>Tools</th>
          <th>Vue.js, SQLite, Visual Studio Code, Adobe Photoshop, Adobe Xd</th>
        </tr>
        <tr>
          <th>Introduction</th>
          <th>Our team is seeking a solution to the problem that people often make mistakes while shopping for their groceries (such as overbuying or forgetting to buy something) because they don’t have a good gauge of what ingredients they currently have.</th>
        </tr>
        <tr>
          <th>Goal</th>
          <th>We created a virtual pantry kitchen that can act as a database for users to add or delete ingredients to reflect their current kitchen. Users can also find recipes based on the ingredients they already own or they can be adventurous and find a recipe that just needs a few more ingredients in addition to the ones they already own.</th>
        </tr>
      </table>
      <div class="links">
        <a href="https://www.youtube.com/watch?v=HnHVM_ScGYY&feature=youtu.be" target="_blank">Link</a>
        <a href="https://github.com/ReventonC/COGS121Project" target="_blank">Github</a>
      </div>
    </div>
    <div class="section storyboard">
      <h1>Storyboard</h1>
      <div class="block">
        <div class="half left text">
          <h2>Storyboard #1</h2>
          <p>The user wants to cook a meal based on his current ingredients that he already has in his kitchen. In the first scenario, the user seeks help from recipe websites but he cannot find a recipe based on only the ingredients he already has. He tries to cook something on his own and fails. In the second scenario, the user searches a recipe on our app based on his current ingredients, and he is happy with his final dish.</p>
        </div>
        <div class="half right img-container">
          <img v-img:name src="../assets/pan/storyBoard_1.png" alt>
          <v-icon class="overlay" name="search-plus" scale="3"/>
        </div>
      </div>
      <div class="block">
        <div class="half left img-container">
          <img v-img:name src="../assets/pan/storyBoard_2.png" alt>
          <v-icon class="overlay" name="search-plus" scale="3"/>
        </div>
        <div class="half right text">
          <h2>Storyboard #2</h2>
          <p>This user wants to cook a dish using some of the ingredients he already has in the fridge in order to reduce waste. However, he knows that he might have to go out to the store and buy more ingredients anyway. In the first scenario, the user cannot find a simple recipe that incorporates ingredients he already has. He is frustrated about the added complexity of the dish. In the second scenario using our app, the user also knows that he will have to go to the store in order to buy chicken (and one lemon) to make the chicken recipe, but he is happy knowing that he will mostly be using the ingredients he has at home.</p>
        </div>
      </div>
    </div>

    <div class="section paper">
      <h1>Paper Prototype</h1>
      <div class="block">
        <div class="text half left">
          <h2>Prototype #1</h2>
        </div>
        <div class="img-container half right">
          <img v-img:name src="../assets/pan/paper_1.png" alt>
          <v-icon class="overlay" name="search-plus" scale="3"/>
        </div>
      </div>
      <div class="block">
        <div class="img-container half left">
          <img v-img:name src="../assets/pan/paper_2.png" alt>
          <v-icon class="overlay" name="search-plus" scale="3"/>
        </div>
        <div class="text half right">
          <h2>Prototype #2</h2>
        </div>
      </div>
    </div>

    <div class="section wireframe">
      <h1>Wireframe</h1>

      <div class="block">
        <div class="img-container">
          <img v-img:name src="../assets/pan/wireframe_1.png" alt="Wireframe">
          <v-icon class="overlay" name="search-plus" scale="3"/>
        </div>
        <div class="img-container">
          <img v-img:name src="../assets/pan/wireframe_2.png" alt="Wireframe">
          <v-icon class="overlay" name="search-plus" scale="3"/>
        </div>
      </div>
      <div class="block">
        <div class="img-container">
          <img v-img:name src="../assets/pan/wireframe_3.png" alt="Wireframe">
          <v-icon class="overlay" name="search-plus" scale="3"/>
        </div>
        <div class="img-container">
          <img v-img:name src="../assets/pan/wireframe_4.png" alt="Wireframe">
          <v-icon class="overlay" name="search-plus" scale="3"/>
        </div>
      </div>
    </div>
    <div class="section design">
      <h1>Design Features</h1>
      <div class="account">
        <div class="half">
          <div class="img-container">
            <img v-img:name src="../assets/pan/design_account.gif" alt>
            <v-icon class="overlay" name="search-plus" scale="3"/>
          </div>
        </div>
        <div class="half">
          <div class="text">
            <h2>Text</h2>
            <p>Text</p>
          </div>
        </div>
      </div>
      <div class="cupboard">
        <div class="half">
          <div class="text">
            <h2>Text</h2>
            <p>Text</p>
          </div>
        </div>
        <div class="half">
          <div class="img-container">
            <img v-img:name src="../assets/pan/design_cupboard.gif" alt>
            <v-icon class="overlay" name="search-plus" scale="3"/>
          </div>
        </div>
      </div>
      <div class="fridge">
        <div class="half">
          <div class="img-container">
            <img v-img:name src="../assets/pan/design_fridge.gif" alt>
            <v-icon class="overlay" name="search-plus" scale="3"/>
          </div>
        </div>
        <div class="half">
          <div class="text">
            <h2>Text</h2>
            <p>Text</p>
          </div>
        </div>
      </div>
      <div class="cook">
        <div class="half">
          <div class="text">
            <h2>Text</h2>
            <p>Text</p>
          </div>
        </div>
        <div class="half">
          <div class="img-container">
            <img v-img:name src="../assets/pan/design_cook.gif" alt>
            <v-icon class="overlay" name="search-plus" scale="3"/>
          </div>
        </div>
      </div>
      <div class="meal">
        <div class="half">
          <div class="img-container">
            <img v-img:name src="../assets/pan/design_meal.gif" alt>
            <v-icon class="overlay" name="search-plus" scale="3"/>
          </div>
        </div>
        <div class="half">
          <div class="text">
            <h2>Text</h2>
            <p>Text</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section backend">
      <div class="half">
        <div class="text">
          <h1>Backend</h1>
          <p>Text</p>
        </div>
      </div>
      <div class="half">
        <div class="img-container">
          <img v-img:name src="../assets/Pantry.png" alt>
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
        background-color: rgba(#00dba8, 0.7);
        border: rgba(#00dba8, 0.7) 1px solid;
        color: white;
      }
    }
  }
}

.storyboard {
  padding: 60px !important;
  border-bottom: 1px solid;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.5vw;
  }

  .block {
    display: flex;
    margin: 20px 0;
    p {
      margin: 0 auto;
      font-size: 1.2vw;
    }
    .left {
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
}

.paper {
  padding: 60px !important;
  border-bottom: 1px solid;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.5vw;
  }

  .block {
    display: flex;
    margin: 20px 0;
    p {
      margin: 0 auto;
      font-size: 1.2vw;
    }
    .left {
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
}

.wireframe {
  padding: 60px !important;
  border-bottom: 1px solid;
  display: flex;
  flex-direction: column;

  .block {
    display: flex;
    .img-container {
      margin: 5px;
    }
  }
  h1 {
    font-size: 2.5vw;
    margin-bottom: 20px;
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
  img {
    width: 100%;
  }
}

.design {
  padding: 60px !important;
  border-bottom: 1px solid;
  flex-direction: column;

  h1 {
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
  .account,
  .cupboard,
  .fridge,
  .cook,
  .meal {
    margin: 30px 0;
  }
  .account,
  .cupboard,
  .fridge,
  .cook,
  .meal {
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
}

.backend {
  padding: 60px !important;
  flex-direction: row;

  h1 {
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
    background-image: url("https://previews.123rf.com/images/zhemchuzhina/zhemchuzhina1509/zhemchuzhina150900006/44465417-food-and-drink-outline-seamless-pattern-hand-drawn-kitchen-background-in-black-and-white-vector-illu.jpg");
    filter: blur(4px);
    background-size: 1500px;
  }
  &-color {
    background-color: rgba(255, 255, 255, 0.8);
  }
}

.backtotop {
  color: #00dba8;
}
</style>
