<template>
  <div>
    <div class="container">
      <back-to-top text bottom="5%" right="10%">
        <v-icon class="overlay" name="arrow-alt-circle-up" scale="5"/>
      </back-to-top>
      <div class="background back-image"></div>
      <div class="background back-color"></div>
      <div class="section home">
        <img
          src="https://github.com/ReventonC/websiteAssets/blob/master/FamilyProud.png?raw=true"
          class="home-img"
        >
        <h1>Design Internship at Family Proud</h1>
      </div>
      <div class="section intro">
        <table>
          <tr>
            <th>Timeline</th>
            <th>February 2019 - July 2019</th>
          </tr>
          <tr>
            <th>Role</th>
            <th>UI/UX Designer</th>
          </tr>
          <tr>
            <th>Tools</th>
            <th>Figma, Principle, Adobe Illustrator</th>
          </tr>
          <tr>
            <th>Introduction</th>
            <th>Family Proud, Inc. aims to create a platform for patients and supporters to connect, share resources, and more effectively manage the burden of care.</th>
          </tr>
          <tr>
            <th>Goal</th>
            <th>The main objective of this project is to create a complete design document for the Family Proud platform, including Design Specs and Mockups</th>
          </tr>
        </table>
        <div class="links">
          <a
            href="https://www.figma.com/file/HXQC4d4N0Xkg2BtKmFEL01bY/Family-Proud?node-id=1401%3A0"
            target="_blank"
          >Figma</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
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
    a {
      text-align: center;
      width: 10%;
      text-decoration: none;
      border: 1px solid;
      padding: 10px 0;
      margin-top: 50px;
      &:hover {
        background-color: rgba(#F2A143, 0.7);
        border: rgba(#F2A143, 0.7) 1px solid;
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
    //background-image: url("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX15641396.jpg");
    filter: blur(4px);
    background-size: 1500px;
  }
  &-color {
    background-color: rgba(255, 255, 255, 0.8);
  }
}
</style>