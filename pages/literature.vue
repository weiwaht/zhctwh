<template>
  <el-container>
    <el-header>
      <Header :active-index="activeIndex" />
    </el-header>
    <el-main>
      <el-row type="flex">
        <el-col :span="4"></el-col>
        <el-col :span="10" class="article-container">
          <p v-for="p in article" :key="p" v-text="p"></p>
        </el-col>
        <el-col :span="6">
          <ImageContainer :pics="pics" />
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
      <Backtop />
    </el-main>
  </el-container>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import Header from '~/components/Header.vue'
import Backtop from '~/components/Backtop.vue'
import ImageContainer from '~/components/ImageContainer.vue'

export default Vue.extend({
  components: {
    Header,
    Backtop,
    ImageContainer
  },
  data() {
    return {
      activeIndex: '',
      article: [],
      pics: [],
      title: ''
    }
  },
  mounted() {
    axios.get('/data/literature.json').then((res) => {
      this.activeIndex = res.data.activeIndex
      this.article = res.data.article
      this.pics = res.data.pics
      this.title = res.data.title
    })
  },
  head() {
    return {
      title: this.title + ' - ' + process.env.WEBSIDE_NAME
    }
  }
})
</script>

<style></style>
