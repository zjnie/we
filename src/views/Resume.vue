<template>
  <div class="resume">
    <div class="container">
      <Base />
      <Skill />
      <Job />
      <Project />
      <Education />
      <Evaluate />
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import ColumnHeader from '../components/resume/ColumnHeader'
  Vue.component('ColumnHeader', ColumnHeader)
  
  import Base from '../components/resume/Base'
  import Education from '../components/resume/Education'
  import Evaluate from '../components/resume/Evaluate'
  import Job from '../components/resume/Job'
  import Skill from '../components/resume/Skill'
  import Project from '../components/resume/Project'
  
  export default {
    name: 'Resume',
    components: {
      Base, Education, Evaluate, Job, Skill, Project
    },
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  .container {
    width: 900px;
    margin: 30px auto;
    padding: 20px 30px;
    
  }
</style>