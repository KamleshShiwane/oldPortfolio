<template>
  <div class="content">
    <h1>CV</h1>
    <p>
      You can get my latest downloadable resume
      <a
        href="https://drive.google.com/file/d/1jnLn4ecyjZdQ0wcK4KJPjudKZevos4Te/view?usp=sharing"
        target="_blank"
      >here</a>. (Updated 02/05/2019)
    </p>
    <div class="education">
      <h2>Education</h2>
      <table>
        <tr>
          <td class="date">2019.08 - Current</td>
          <td class="degree">
            <b>M.S. in Digital Media (Expected May 2021)</b>
          </td>
        </tr>
        <tr>
          <td></td>
          <td class="location">
            <i>Georgia Institute of Technology</i>, Atlanta, United States
          </td>
        </tr>
        <tr>
          <td></td>
          <td
            class="major"
          >Major: Cognitive Science / Human-Computer Interaction; Minor: Computer Science</td>
        </tr>
      </table>
      <table>
        <tr>
          <td class="date">2015.09 - 2019.06</td>
          <td class="degree">
            <b>B.S. in Cognitive Science</b>
          </td>
        </tr>
        <tr>
          <td></td>
          <td class="location">
            <i>University of California, San Diego</i>, La Jolla, United States
          </td>
        </tr>
        <tr>
          <td></td>
          <td
            class="major"
          >Major: Cognitive Science / Human-Computer Interaction; Minor: Computer Science</td>
        </tr>
      </table>
    </div>
    <div class="experience">
      <h2>Relative Experience</h2>
      <table>
        <tr>
          <td class="date">2019.02 - 2019.07</td>
          <td class="name">
            <router-link active-class="active" to="/FamilyProud" exact>
              <b>UI/UX Designer Internship</b>
            </router-link>
          </td>
          <td class="location">
            <i>Family Proud</i>, La Jolla
          </td>
        </tr>
        <tr>
          <td class="date">2018.04 - 2018.06</td>
          <td class="name">
            <router-link active-class="active" to="/JSA" exact>
              <b>Pantry</b>
            </router-link>
          </td>
          <td class="location">
            <i>University of California, San Diego</i>, La Jolla
          </td>
        </tr>
        <tr>
          <td class="date">2018.03 - Current</td>
          <td class="name">
            <router-link active-class="active" to="/JSA" exact>
              <b>Webmaster</b>
            </router-link>
          </td>
          <td class="location">
            <i>UCSD Japanese Student Association</i>, La Jolla
          </td>
        </tr>
        <tr>
          <td class="date">2018.01 - 2018.03</td>
          <td class="name">
            <router-link active-class="active" to="/JSA" exact>
              <b>Raccoonal</b>
            </router-link>
          </td>
          <td class="location">
            <i>University of California, San Diego</i>, La Jolla
          </td>
        </tr>
        <tr>
          <td class="date">2018.01 - 2018.03</td>
          <td class="name">
            <b>Data Science Project on San Diego road condition &amp; accident</b>
          </td>
          <td class="location">
            <i>University of California, San Diego</i>, La Jolla
          </td>
        </tr>
        <tr>
          <td class="date">2018.01 - 2018.03</td>
          <td class="name">
            <b>JSA Event Planner</b>
          </td>
          <td class="location">
            <i>University of California, San Diego</i>, La Jolla
          </td>
        </tr>
        <tr>
          <td class="date">2017.01 - 2017.03</td>
          <td class="name">
            <b>Ray tracer</b>
          </td>
          <td class="location">
            <i>University of California, San Diego</i>, La Jolla
          </td>
        </tr>
      </table>
    </div>
    <div class="teach">
      <h2>Teaching Experience</h2>
      <table>
        <tr>
          <td class="date">2019.01 - 2019.3</td>
          <td class="name">
            <b>Instructional Assistant, COGS 108: Data Science in Practice</b>
          </td>
          <td class="location">
            <i>University of California, San Diego</i>, La Jolla
          </td>
        </tr>
        <tr>
          <td class="date">2018.09 - 2018.12</td>
          <td class="name">
            <b>Instructional Assistant, COGS 18: Introduction to Python</b>
          </td>
          <td class="location">
            <i>University of California, San Diego</i>, La Jolla
          </td>
        </tr>
      </table>
    </div>
    <h2>Skills &amp; Tools</h2>
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
  text-align: left;
}
.content {
  margin: 50px auto;
  width: 70%;
}
h1 {
  font-size: 3em;
}
h2 {
  margin-top: 20px;
  font-size: 2em;
}
p {
  font-size: 1.5em;
}
table {
  border-spacing: 10px;
}
.education,
.experience,
.teach {
  td {
    font-size: 1.2em;
  }
  .date {
    font-size: 1em;
  }
}
.experience {
}
.teach {
}
</style>