<template>
  <el-container>
    <el-header>
      <Header :active-index="activeIndex" />
    </el-header>
    <el-main>
      <el-row type="flex">
        <el-col :span="4"></el-col>
        <el-col :span="16">
          <h1>引用</h1>
          <ul>
            <li v-for="quote in quotes" :key="quote">
              <span v-text="quote.title"></span>：<el-link
                :href="quote.link"
                target="_blank"
                v-text="quote.link"
              ></el-link>
            </li>
          </ul>
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

export default Vue.extend({
  components: {
    Header,
    Backtop
  },
  data() {
    return {
      activeIndex: '',
      quotes: [],
      title: ''
    }
  },
  mounted() {
    axios.get('./data/about.json').then((res) => {
      this.activeIndex = res.data.activeIndex
      this.quotes = res.data.quotes
      this.pics = res.data.pics
      this.title = res.data.title
    })
  },
  head() {
    return {
      title: this.title + ' - ' + process.env.WEBSIDE_NAME,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
})
</script>

<style scoped>
h1 {
  font-size: 18px;
  line-height: 1.7;
  border-left: 5px solid #409eff;
  margin-bottom: 10px;
  padding-left: 5px;
}
li {
  margin-bottom: 10px;
}
</style>
