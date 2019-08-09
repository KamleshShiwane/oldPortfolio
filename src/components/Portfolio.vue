<template>
  <div class="content">
    <div class="projects">
      <div class="project-container" v-for="project in projects" v-bind:key="project.name">
        <router-link active-class="active" :to="project.link" exact>
          <div class="project-img" :style="{'background-image': 'url('+ project.img + ')'}"></div>
          <div class="project-color"></div>
          <div class="project-info">
            <p class="project-name">{{project.name}}</p>
            <p class="project-desc">{{project.desc}}</p>
          </div>
        </router-link>
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
          name: "Family Proud, Inc.",
          desc: "Deliver peace and mind to patients & families.",
          img:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-73d2d.appspot.com/o/FamilyProud.png?alt=media&token=a1a1c18d-b72a-4d4b-a434-86d1a703605d",
          link: "/FamilyProud"
        },
        {
          name: "Raccoonal",
          desc: "An emotional journal & companion for you.",
          img:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-73d2d.appspot.com/o/RaccoonalSlide.jpg?alt=media&token=2a306e62-636a-45e7-94b3-0e526f3669e3",
          link: "/Raccoonal"
        },
        {
          name: "UCSD-JSA.github.io",
          desc:
            "The official website of UCSD JSA (Japanese Student Association).",
          link: "/JSA",
          img:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-73d2d.appspot.com/o/JSAbanner.jpg?alt=media&token=c3e52a21-6e90-45e1-ab87-ebdff0a04946"
        },
        {
          name: "COGS18.github.io",
          desc: "Class website for COGS 18: Intro to Python.",
          link: "/",
          img:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-73d2d.appspot.com/o/cogs18logo.png?alt=media&token=80a13d26-1f10-4009-bc07-2e0d7fcaef28"
        },
        {
          name: "Pantry",
          desc: "A virtual pantry kitchen.",
          link: "/Pantry",
          img:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-73d2d.appspot.com/o/Pantry.png?alt=media&token=9efa65a1-50d7-4c5c-9a74-7c291eaeaf16"
        }
        /* 
        {
          name: "JSA Event Planner",
          desc: "",
          link: "/raccoonal",
          img: ""
        },
        {
          name: "Ray tracer",
          desc: "",
          link: "/raccoonal",
          img: ""
        },
        {
          name: "San Diego Road Condition & Accident",
          desc: "",
          link: "/raccoonal",
          img: ""
        }*/
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
    cursor: pointer;
    position: absolute;
    bottom: 0;
    width: 100%;

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
      width: 100%;
      margin: 30px 20px 0px;
    }
    .project-desc {
      max-height: 0;
      opacity: 0;
      font-size: 2em;
      margin: 0px 20px 10px;
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
