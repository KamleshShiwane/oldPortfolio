<template>
  <div class="content">
    <div class="projects">
      <div class="project-container" v-for="project in projects" v-bind:key="project.name">
        <div class="project-img" :style="{'background-image': 'url('+ project.img + ')'}"></div>
        <div class="project-color"></div>
        <div class="project-info">
          <p class="project-name">{{project.name}}</p>
          <p class="project-desc">{{project.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      projects: [
        {
          name: "Raccoonal",
          desc: "An emotional journal & companion for you.",
          img:
            "https://github.com/ReventonC/websiteAssets/blob/master/RaccoonalSlide.png?raw=true"
        },
        {
          name: "ucsd.github.io",
          desc:
            "The official website of UCSD JSA (Japanese Student Association).",
          img:
            "https://github.com/ReventonC/websiteAssets/blob/master/JSAbanner.jpg?raw=true"
        },
        {
          name: "cogs18.github.io",
          desc: "Class website for COGS 18: Intro to Python.",
          img: ""
        },
        {
          name: "Pantry",
          desc: "A virtual pantry kitchen.",
          img: ""
        },
        {
          name: "JSA Event Planner",
          desc: "",
          img: ""
        },
        {
          name: "Ray tracer",
          desc: "",
          img: ""
        },
        {
          name: "San Diego Road Condition & Accident",
          desc: "",
          img: ""
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.content {
  width: 80%;
  margin: 0 auto;
}
.projects {
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
}
.project-container {
  cursor: pointer;
  margin: 50px auto;
  position: relative;
  flex: 0 0 35vw;
  overflow: hidden;
  height: 40vh;

  .project-img {
    z-index: -100;
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }

  .project-color {
    z-index: -99;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(black, 0.1);
  }

  .project-info {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 30px 20px 10px;

    background-image: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(#000, 0.6) 100%
    );
    p {
      text-align: left;
      text-shadow: rgba(black, 0.5) 0 10px 10px;
      color: white;
    }
    .project-name {
      font-size: 4em;
    }
    .project-desc {
      max-height: 0;
      opacity: 0;
      font-size: 2em;
    }
  }

  
  &:hover {
    .project-img {
      filter: blur(5px) opacity(0.8);
    }
    .project-color {
      background-color: rgba(black, 0);
    }

    .project-info {
        transition: 1s;
      .project-desc {
        max-height: 500px;
        opacity: 1;
      }
    }
  }
}
</style>
